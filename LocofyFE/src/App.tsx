import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CallerDashboard from "./pages/CallerDashboard";
import CallerFeedback from "./pages/CallerFeedback";
import ManagerDashboard from "./pages/ManagerDashboard";
import CampaignResearch from "./pages/CampaignResearch";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Instructions from "./pages/Instructions";
import About from "./pages/About";
import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";
import { useAppDispatch } from "./redux/hooks";
import { loginUser } from "./redux/slice/authSlice";
import CreateAccount from "./pages/CreateAccount";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/callerdashboard":
        title = "";
        metaDescription = "";
        break;
      case "/callerfeedback":
        title = "";
        metaDescription = "";
        break;
      case "/managerdashboard":
        title = "";
        metaDescription = "";
        break;
      case "/campaignresearch":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/resetpassword":
        title = "";
        metaDescription = "";
        break;
      case "/instructions":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);


  const getLoggedInUser = async () => {
    try {
      let config = {
        headers: {
          "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
      }
      let response = await axios.get("http://localhost:4000/me", config);
      if(response.status === 200) {
        dispatch(loginUser(response.data));
      }
    } catch(error) {
      dispatch(loginUser(null));
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    getLoggedInUser();
  }, []);

  if(isLoading ===  true) {
    return <>Loading</>
  }

  return (
    <div style={{ margin: "0 auto", maxWidth: "1500px" }}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/callerdashboard"
          element={
            <ProtectedRoute>
              <CallerDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/callerfeedback" element={<CallerFeedback />} />
        <Route path="/managerdashboard" element={<ManagerDashboard />} />
        <Route path="/campaignresearch" element={<CampaignResearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
