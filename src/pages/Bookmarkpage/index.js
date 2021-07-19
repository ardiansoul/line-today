import React, { useContext } from "react";
import { Article } from "../../components";
import { AppContext } from "../../context/AppContext";

export default function Bookmarkpage() {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className="w-full h-full mt-10">
      <div className="p-10 flex justify-between flex-wrap">
        {/* <StackGrid
      appearDelay={30}
      columnWidth={250}
      gutterWidth={20}
      gutterHeight={20}
    > */}
        {state.bookmarks.length > 0
          ? state.bookmarks.map((article, index) => {
              if (article.title) {
                return <Article data={article} />;
              }
            })
          : ""}
        {/* </StackGrid> */}
      </div>
    </div>
  );
}
