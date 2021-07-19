import React from "react";
import Template from "../Template";

export default function Category({ data }) {
  return (
    <div>
      {data.templates.map((item) => {
        return <Template data={item} />;
      })}
    </div>
  );
}
