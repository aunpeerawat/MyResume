import React from "react";
import { Link } from "react-scroll";

function ScrollButton(params) {
  return (
    <Link
      activeClass="active"
      to={params.to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      id={params.id}
    >
      <button type="button" class="btn btn-secondary my-button toggle-button ms-1 " style={{fontSize:"16px",fontWeight:"bold"}}>
        {params.name}
      </button>
    </Link>
  );
}

export default ScrollButton;