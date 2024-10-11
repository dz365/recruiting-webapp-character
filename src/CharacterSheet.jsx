import { useState } from "react";
import { ATTRIBUTE_LIST } from "./consts";
import AttributesEditor from "./AttributesEditor";

const CharacterSheet = () => {
  const [attributes, setAttributes] = useState(
    ATTRIBUTE_LIST.reduce((accum, attribute) => {
      accum[attribute] = { value: 0, modifier: 0 };
      return accum;
    }, {})
  );
  return (
    <div>
      <AttributesEditor attributes={attributes} setAttributes={setAttributes} />
    </div>
  );
};

export default CharacterSheet;
