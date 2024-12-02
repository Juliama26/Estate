import React from "react";
import Label from "../element/Label";
import Textarea from "../element/Textarea";

// eslint-disable-next-line react/prop-types
export default function IndexTextArea({ Name, className }) {
  return (
    <section className={`flex flex-col gap-y-2 ${className}`}>
      <Label label={Name} htmlFor={Name} />
      <Textarea Name={Name} />
    </section>
  );
}
