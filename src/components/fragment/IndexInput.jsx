import React from "react";
import Input from "../element/Input";
import Label from "../element/Label";

// eslint-disable-next-line react/prop-types
export default function IndexInput({ Name, type, Placeholder }) {
  return (
    <section className="flex flex-col gap-y-2">
      <Label label={Name} htmlFor={Name} />
      <Input name={Name} type={type} placeholder={Placeholder} />
    </section>
  );
}
