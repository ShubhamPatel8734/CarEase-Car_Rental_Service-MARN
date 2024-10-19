import React from "react";
import { NavLink, Route, Routes, Outlet } from "react-router-dom";
import "../user-pages/UserProfile.css";

function UserProfile() {
  return (
    <div className="Userprofile">
      <div className="Userprofile-container">
        <div className="Userprofile-leftside">
          <nav>
          <div className="Userprofile-link-box">
            <NavLink to="/dashboard/profile" end className="Navbar-link">
              <h3>My Profile</h3>
            </NavLink>
          </div>
          <div className="Userprofile-link-box">
            <NavLink to="/dashboard/profile/edit" className="Navbar-link">
              <h3>Edit Profile</h3>
            </NavLink>
          </div>
          </nav>
        </div>
        <div className="Userprofile-rightside">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
