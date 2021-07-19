import React from "react";

export default function HeaderSection({ data }) {
  return (
    <div className="w-full px-10">
      <h3 className="font-sans font-xl text-primary font-bold">{data.title}</h3>
    </div>
  );
}
