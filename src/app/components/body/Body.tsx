import React from "react";
import Header from "./Header";
import Feed from "./Feed";

const Body = () => {
  return (
    <div className="sm:ms-4 md:ms-0 md:px-5 w-full">
      <Header />
      <Feed />
    </div>
  );
};

export default Body;
