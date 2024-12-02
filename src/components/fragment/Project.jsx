import React from "react";

export default function Project(props) {
  // eslint-disable-next-line react/prop-types
  const { Img, Name, Price, City } = props;
  return (
    <figure className="relative min-w-[300px] max-w-xs mx-auto">
      <img src={Img} alt="project" />
      <figcaption className="absolute -bottom-9 left-16 p-3 bg-white shadow-lg">
        <h2 className="text-xl font-semibold">{Name}</h2>
        <p className="text-slate-500">
          {Price} | {City}
        </p>
      </figcaption>
    </figure>
  );
}
