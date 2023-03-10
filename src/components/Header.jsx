import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  function pathMathRoute(Route) {
    if (Route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <Header>
        <div className="flex justify-between items-center px-3 max-w-6xl mx-auto">
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="Logo"
            className="h-5 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          ></img>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/") && "text-black  border-b-500 "
              }
              cursor-pointer
              `}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/offers") && "text-black  border-b-500 "
              }cursor-pointer
              `}
              onClick={() => {
                navigate("/offers");
              }}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/sign-in") && "text-black  border-b-500 "
              }cursor-pointer
              `}
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Sign In
            </li>
          </ul>
        </div>
      </Header>
    </div>
  );
}
