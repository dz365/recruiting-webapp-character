import { useState } from "react";
import { ATTRIBUTE_LIST, SKILL_LIST } from "./consts";
import AttributesEditor from "./AttributesEditor";
import CharacterClasses from "./CharacterClasses";
import SkillsEditor from "./SkillsEditor";

const CharacterSheet = () => {
  const [attributes, setAttributes] = useState(
    ATTRIBUTE_LIST.reduce((accum, attribute) => {
      accum[attribute] = { value: 10, modifier: 0 };
      return accum;
    }, {})
  );

  const [skills, setSkills] = useState(
    SKILL_LIST.reduce((accum, skillObject) => {
      accum[skillObject.name] = {
        totalValue: 0,
        pointsSpent: 0,
        attributeModifier: skillObject.attributeModifier,
      };
      return accum;
    }, {})
  );

  return (
    <div>
      <AttributesEditor attributes={attributes} setAttributes={setAttributes} />
      <CharacterClasses attributes={attributes} />
      <SkillsEditor
        attributes={attributes}
        skills={skills}
        setSkills={setSkills}
      />
    </div>
  );
};

export default CharacterSheet;
