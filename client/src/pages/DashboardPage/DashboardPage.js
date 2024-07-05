import React from "react";
import TopBar from "../TopNavigation/TopBar";
import BottomBar from "../BottomNavigation/BottomBar";
import Board from "../BoardPage/Board";

const DashboardPage = (logo) => {
  return (
    <div>
      <TopBar />
      <BottomBar />
      <Board />
    </div>
  );
};

export default DashboardPage;
