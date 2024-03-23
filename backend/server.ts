import cors from "cors";
import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";
import jwt from "jsonwebtoken";
import isAuthenicate from "./middlewares/authenticate";
const app: Express = express();
const port = process.env.PORT || 4000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

async function main() {
  app.post("/assessments", isAuthenicate, async (req, res) => {
    const result = await prisma.assessment.create({
      data: {
        userId: req.user.index,
        a1: req.body.a1,
        q1: req.body.q1,
        a2: req.body.a2,
        q2: req.body.q2,
        a3: req.body.a3,
        q3: req.body.q3,
        note: req.body.note,
      },
    });

    res.send(result);
  });

  app.post("/reset-password", async (req: Request, res: Response) => {
    try {
      const result = await prisma.user.update({
        where: {
          email: req.body.email,
        },
        data: {
          password: req.body.password,
        },
      });
      res.send(result);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });

  app.post("/create-account", async (req: Request, res: Response) => {
    const result: any = await prisma.user.create({
      data: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.send(result);
  });

  app.post("/login", async (req: Request, res: Response) => {
    const result: any = await prisma.user.findUnique({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });

    if (!result) {
      return res.status(404).json({ message: "Not Found" });
    }

    let accessToken = await jwt.sign(result, "rubnawaz");

    res.json(accessToken);
  });

  app.get("/records", async (req: Request, res: Response) => {
    const result: any = await prisma.list.findMany({});
    res.send(result);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
