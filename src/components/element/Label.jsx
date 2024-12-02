import React from "react";

// eslint-disable-next-line react/prop-types
export default function Label({ label, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="text-slate-800">
      {label}
    </label>
  );
}
