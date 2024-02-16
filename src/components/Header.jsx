import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div>
      <header>
        <h1 className="fw-bold">
          <FaceIcon fontSize="large" className="ms-3" sx={{ color: "white" }} />
          &nbsp; My Resume
        </h1>
      </header>
    </div>
  );
}

export default Header;