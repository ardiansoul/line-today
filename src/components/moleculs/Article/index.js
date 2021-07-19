import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarked } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";

export default function Article({ data }) {
  const [state, dispatch] = useContext(AppContext);
  const [checked, setChecked] = useState(false);

  const bookmark = (item) => {
    dispatch({
      type: "BOOKMARK ITEM",
      payload: item,
    });
  };

  const bookmarkCheck = (item) => {
    const find = state.bookmarks.find((i) => {
      return i.id == item.id;
    });
    if (find) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  useEffect(() => {
    bookmarkCheck(data);
  }, [bookmark]);

  return (
    <div className="w-60 h-60 my-4">
      <div
        style={{
          backgroundImage: `url(https://obs.line-scdn.net/${data?.thumbnail?.hash})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative w-full h-full flex border-2 rounded-lg overflow-hidden"
      >
        <div
          className="absolute bg-white w-8 h-8 flex justify-center items-center rounded-full"
          style={{ top: "5px", right: "5px" }}
        >
          <button
            onClick={() => {
              bookmark(data);
            }}
          >
            {checked ? (
              <FontAwesomeIcon icon={faBookmark} />
            ) : (
              <FontAwesomeIcon icon={faBookmarked} />
            )}
          </button>
        </div>
        <a
          target="_blank"
          href={data?.url?.url}
          className="w-full bg-white self-end p-4"
        >
          <h3 className="font-sans text-base font-bold">
            {data.title.length > 50
              ? data.title.substr(0, 50) + " ..."
              : data.title}
          </h3>
        </a>
      </div>
    </div>
  );
}
