import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import HeaderSection from "../HeaderSection";
import Section from "../Section";

export default function Template({ data }) {
  const [selectedData, setSelectedData] = useState({});
  const [index, setIndex] = useState(0);

  const changeIndex = (type) => {
    if (type === "inc") {
      setSelectedData(data.sections[index + 1]);
      setIndex(index + 1);
    } else if (type === "dec") {
      setSelectedData(data.sections[index - 1]);
      setIndex(index - 1);
    } else {
      setSelectedData(data.sections[0]);
    }
  };

  useEffect(() => {
    changeIndex();
  }, []);

  return (
    <div className="w-full">
      {data.title && data.sections[0].articles.length === 0 && (
        <HeaderSection data={data} />
      )}
      {data.sections.length > 1 ? (
        <div
          className={`w-full flex flex-col ${
            data.sections[0].articles.length > 0 &&
            data.sections[0].articles[0].title &&
            "p-10"
          }`}
        >
          <div className="w-24 h-10 self-end flex justify-between">
            <button
              className="w-10 h-10 border-2 border-black rounded"
              disabled={index === 0}
              onClick={() => {
                changeIndex("dec");
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className="w-10 h-10 border-2 border-black rounded"
              disabled={index === data.sections.length - 1}
              onClick={() => {
                changeIndex("inc");
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <Section data={selectedData} />
        </div>
      ) : (
        <div className="w-full flex flex-col p-10">
          {data.sections.map((item) => {
            return <Section data={item} />;
          })}
        </div>
      )}
    </div>
  );
}
