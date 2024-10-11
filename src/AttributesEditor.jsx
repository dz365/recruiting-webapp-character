import { useState } from "react";

const AttributesEditor = ({ attributes, setAttributes }) => {
  const incrementAttribute = (attribute) => {
    const newValue = attributes[attribute].value + 1;
    const newModifier = Math.floor((newValue - 10) / 2);
    setAttributes({
      ...attributes,
      [attribute]: {
        value: newValue,
        modifier: newModifier,
      },
    });
  };

  const decrementAttribute = (attribute) => {
    const newValue = attributes[attribute].value - 1;
    const newModifier = Math.floor((newValue - 10) / 2);
    if (newValue < 0) return;
    setAttributes({
      ...attributes,
      [attribute]: {
        value: newValue,
        modifier: newModifier,
      },
    });
  };

  return (
    <div>
      {Object.entries(attributes).map(([attribute, values]) => (
        <div>
          <span>
            {attribute} (modifier: {values.modifier}) : {values.value}
          </span>
          <button onClick={() => decrementAttribute(attribute)}>-</button>
          <button onClick={() => incrementAttribute(attribute)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default AttributesEditor;
