import { useState } from "react";

const AttributesEditor = ({ attributes, setAttributes }) => {
  const incrementAttribute = (attribute) => {
    const newValue = attributes[attribute].value + 1;
    setAttributes({
      ...attributes,
      [attribute]: {
        value: newValue,
        modifier: 0,
      },
    });
  };

  const decrementAttribute = (attribute) => {
    const newValue = attributes[attribute].value - 1;
    if (newValue < 0) return;
    setAttributes({
      ...attributes,
      [attribute]: {
        value: newValue,
        modifier: 0,
      },
    });
  };

  return (
    <div>
      {Object.entries(attributes).map(([attribute, values]) => (
        <div>
          <span>
            {attribute} : {values.value}
          </span>
          <button onClick={() => decrementAttribute(attribute)}>-</button>
          <button onClick={() => incrementAttribute(attribute)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default AttributesEditor;
