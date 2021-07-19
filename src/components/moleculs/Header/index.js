import React, { useContext, useEffect, useState } from "react";
import Logo from "../../../assets/logo.png";
import { AppContext } from "../../../context/AppContext";
import { useHistory } from "react-router-dom";

export default function Header() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [state] = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    setData(state.categories);
    setIsLoading(state.isLoading);
  }, []);
  return (
    <div className="w-full h-48 m-auto">
      <div className="w-full h-full flex justify-between items-center px-6">
        <div className="w-4/12 h-full">
          <a href="#" className="w-4/12 h-full">
            <img
              src={Logo}
              alt="Line Today"
              className="w-full h-full object-contain object-center"
            />
          </a>
        </div>
        <div className="w-8/12 flex justify-end items-center">
          <button onClick={() => history.push("/")} className="">
            <span className="mx-10 text-base text-black">Home</span>
          </button>
          <button onClick={() => history.push("/topics")} className="">
            <span className="mx-10 text-base text-black">Topics</span>
          </button>
          <button onClick={() => history.push("/bookmarks")} className="">
            <span className="mx-10 text-base text-black">Bookmarks</span>
          </button>
        </div>
        {isLoading &&
          data.map((item) => (
            <div>
              <a>{item.name}</a>
            </div>
          ))}
      </div>
    </div>
  );
}
