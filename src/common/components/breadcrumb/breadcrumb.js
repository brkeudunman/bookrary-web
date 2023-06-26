import React from "react";

const BasicBreadCrumb = () => {
    //locationdan çekelim
  const location = window.location.pathname
  return (
    <div className="w-full p-3 rounded-md bg-white font-bold text-sm">
      <span className="capitalize">Homepage{location}</span>
    </div>
  );
};

export default BasicBreadCrumb;
