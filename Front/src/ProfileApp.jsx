import React from "react";
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar";
import  ProfileView  from "./components/ProfileView"; //

export const ProfileApp = () => {
  
    return (
      <>
        <RenderNavbar />
        <RenderCategoriesBar />
        <div className="container my-5">
        <ProfileView />
        </div>
      </>
    );
  };
  