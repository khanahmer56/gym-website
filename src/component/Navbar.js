import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{ gap: { xs: "40px", md: "120px" }, px: "20px", mt: 4 }}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Stack direction="row" sx={{ gap: { xs: "40px", sm: "90px" } }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            borderBottom: "3px solid red",
            color: "#3A1212",
          }}
        >
          Home{" "}
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
