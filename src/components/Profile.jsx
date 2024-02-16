import React from "react";

function Profile() {
  return (
    <div className="px-4 py-5 my-5 text-center container-fluid">
      <img
        className="d-block mx-auto mb-4 my-profile"
        src="https://i.ibb.co/xYp7jq5/MyPic.jpg"
        alt=""
        width="auto"
        height="180"
        id="profileSection"
      />
      <h1 className="display-5 fw-bold mb-3">My Profile</h1>

      <div className="col-lg-6 mx-auto">
        <ul className="no-bullets h4">
          <li className="mb-2">
            <b>Name : </b>Peerawat Orankitvanit
          </li>
          <li className="mb-2">
            <b>University : </b>Chulalongkorn University
          </li>
          <li className="mb-2">
            <b>Faculty : </b>Faculty of Engineering (Civil Engineering)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;