import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Topicpage() {
  const [state] = useContext(AppContext);
  return (
    <div className="w-full flex flex-wrap justify-between px-10">
      {state.topics.map((item) => (
        <div className="bg-primary m-4 p-2 rounded text-white transition duration-500 ease-in-out cursor-pointer hover:bg-white hover:text-primary">
          <span className="font-bold">{item}</span>
        </div>
      ))}
    </div>
  );
}
