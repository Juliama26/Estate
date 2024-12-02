import React from "react";
import { MdStarRate } from "react-icons/md";

export default function Testimoni(props) {
  // eslint-disable-next-line react/prop-types
  const { Img, Name, Title, starCount, Text } = props;
  return (
    <section className="flex flex-col items-center gap-y-3 max-w-xs mx-auto p-3 shadow-lg border rounded-md">
      <img src={Img} alt="profile" />
      <h2 className="text-xl font-semibold">{Name}</h2>
      <p className="text-slate-500">{Title}</p>
      <div className="flex gap-x-1 text-orange-500">
        {Array.from({ length: starCount }, (_, index) => (
          <MdStarRate key={index} />
        ))}
      </div>
      <p className="text-center">{Text}</p>
    </section>
  );
}
