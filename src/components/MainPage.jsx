import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import MainHeader from "./MainHeader";

const MainPage = () => {
  const userName = useSelector((store) => store.user?.displayName) || "";

  if (userName === "") {
    return (
      <div className="flex w-full h-[100vh] justify-center items-center">
        <CircleLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="">
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default MainPage;
