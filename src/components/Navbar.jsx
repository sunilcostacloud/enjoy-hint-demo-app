import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { TourGuide } from "./tourGuide/TourGuide";
import { HomeSteps } from "./home/HomeSteps";
import { AboutSteps } from "./about/AboutSteps";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const handleTourGuide = () => {
    const steps =
      pathname === "/" ? HomeSteps : pathname === "/about" ? AboutSteps : [];
    TourGuide(steps);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        background: "#F77500",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2 style={{ color: "#fff", paddingLeft: "20px" }}>Navbar</h2>
        <Button
          variant="contained"
          color="success"
          style={{ marginRight: "20px" }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          variant="contained"
          color="info"
          style={{ marginRight: "20px" }}
          onClick={() => navigate("/about")}
        >
          About
        </Button>
        <Button
          variant="contained"
          style={{ marginRight: "20px" }}
          onClick={() => handleTourGuide()}
        >
          Start Tour Guide
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
