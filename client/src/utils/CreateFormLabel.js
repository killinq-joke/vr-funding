import React from "react"

export default function CreateFormLabel({label}) {
    return (
      <>
        <label>
          {label}:
          <input name={label.toLowerCase()} />
        </label>
      </>
    );
}