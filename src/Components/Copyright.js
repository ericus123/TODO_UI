import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a
        style={{ textDecoration: "none" }}
        color="inherit"
        href="https://amanieric.com"
        target="_blank"
      >
        amanieric
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
