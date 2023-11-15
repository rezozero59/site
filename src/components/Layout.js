import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-light px-32   dark:bg-dark p-12 
      md:p-8 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
