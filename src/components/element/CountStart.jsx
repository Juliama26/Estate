import React from "react";

export default function CountStart(props) {
  // eslint-disable-next-line react/prop-types
  const { Name, children } = props;
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-semibold">{children}+</h2>
      <p>{Name}</p>
    </section>
  );
}
