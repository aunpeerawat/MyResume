import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div>
      <header>
        <h2 className="fw-bold heading">
          <FaceIcon fontSize="large" className="ms-3" sx={{ color: "white" }} />
          &nbsp; My Resume
        </h2>
      </header>
    </div>
  );
}

export default Header;