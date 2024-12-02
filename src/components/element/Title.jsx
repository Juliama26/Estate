import React from "react";

export default function Title(props) {
  // eslint-disable-next-line react/prop-types
  const { Title1, Title2, children } = props;
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-xl md:text-3xl">
        <strong>{Title1}</strong> {""}
        <span className="border-b border-black">{Title2}</span>
      </h2>
      <p>{children}</p>
    </section>
  );
}
