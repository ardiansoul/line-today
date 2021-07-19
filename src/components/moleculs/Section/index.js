import React from "react";
import Article from "../Article";
import StackGrid from "react-stack-grid";

export default function Section({ data }) {
  return (
    <div
      className={`w-full h-full ${
        data.articles &&
        data.articles.length > 0 &&
        data.articles[0].title &&
        "border-b-2 border-primary"
      }`}
    >
      {/* <div className="p-10 flex justify-between flex-wrap"> */}
      <StackGrid
        appearDelay={30}
        columnWidth={250}
        gutterWidth={20}
        gutterHeight={20}
      >
        {data.articles
          ? data.articles.map((article, index) => {
              if (article.title) {
                return <Article data={article} />;
              }
            })
          : ""}
      </StackGrid>
      {/* </div> */}
    </div>
  );
}
