import { useEffect, useState } from "react";
import { SKILL_LIST } from "./consts";

const SkillsEditor = ({ attributes, skills, setSkills }) => {
  const [pointsAvailable, setPointsAvailable] = useState(0);

  useEffect(() => {
    setPointsAvailable(10 + 4 * attributes["Intelligence"].modifier);
  }, [attributes]);

  const incrementSkill = (skill) => {
    if (pointsAvailable <= 0) return;
    setPointsAvailable(pointsAvailable - 1);
    const newPointsSpent = skills[skill].pointsSpent + 1;
    const newTotalValue =
      newPointsSpent + attributes[skills[skill].attributeModifier].modifier;
    setSkills({
      ...skills,
      [skill]: {
        totalValue: newTotalValue,
        pointsSpent: newPointsSpent,
        attributeModifier: skills[skill].attributeModifier,
      },
    });
  };

  const decrementSkill = (skill) => {
    const newPointsSpent = skills[skill].pointsSpent - 1;

    if (newPointsSpent < 0) return;

    setPointsAvailable(pointsAvailable + 1);
    const newTotalValue =
      newPointsSpent + attributes[skills[skill].attributeModifier].modifier;
    setSkills({
      ...skills,
      [skill]: {
        totalValue: newTotalValue,
        pointsSpent: newPointsSpent,
        attributeModifier: skills[skill].attributeModifier,
      },
    });
  };

  useEffect(() => {
    const updatedSkills = {};
    for (let skill in skills) {
      updatedSkills[skill] = {
        totalValue:
          skills[skill].pointsSpent +
          attributes[skills[skill].attributeModifier].modifier,
        pointsSpent: skills[skill].pointsSpent,
        attributeModifier: skills[skill].attributeModifier,
      };
    }
    setSkills(updatedSkills);
  }, [attributes]);
  
  return (
    <div>
      <p>Points available: {pointsAvailable}</p>
      {Object.entries(skills).map(([skill, values]) => (
        <div>
          <span>{skill} - </span>
          <span>
            Modifier ({values.attributeModifier}):{" "}
            {attributes[values.attributeModifier].modifier}
          </span>
          <span>Points spent: {values.pointsSpent}</span>
          <span>Total: {values.totalValue}</span>
          <button onClick={() => decrementSkill(skill)}>-</button>
          <button onClick={() => incrementSkill(skill)}>+</button>
        </div>
      ))}
    </div>
  );
};
export default SkillsEditor;
