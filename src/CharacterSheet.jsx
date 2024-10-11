import { useState } from "react";
import { ATTRIBUTE_LIST } from "./consts";
import AttributesEditor from "./AttributesEditor";
import CharacterClasses from "./CharacterClasses";

const CharacterSheet = () => {
  const [attributes, setAttributes] = useState(
    ATTRIBUTE_LIST.reduce((accum, attribute) => {
      accum[attribute] = { value: 10, modifier: 0 };
      return accum;
    }, {})
  );
  return (
    <div>
      <AttributesEditor attributes={attributes} setAttributes={setAttributes} />
      <CharacterClasses attributes={attributes} />
    </div>
  );
};

export default CharacterSheet;
