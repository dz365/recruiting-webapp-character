import { useEffect, useState } from "react";
import { ATTRIBUTE_LIST, SKILL_LIST } from "./consts";
import AttributesEditor from "./AttributesEditor";
import CharacterClasses from "./CharacterClasses";
import SkillsEditor from "./SkillsEditor";
import { loadCharacterSheet, saveCharacterSheet } from "./services/api-service";

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

  const saveCharacter = () => {
    saveCharacterSheet({
      attributes: attributes,
      skills: skills,
    });
  };

  const loadCharacter = () => {
    loadCharacterSheet().then((data) => {
      setAttributes(data.body.attributes);
      setSkills(data.body.skills);
    });
  };

  return (
    <div>
      <button onClick={saveCharacter}>Save Character</button>
      <button onClick={loadCharacter}>Load Character</button>
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
