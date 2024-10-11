import { useState } from "react";
import { CLASS_LIST } from "./consts";

const CharacterClasses = ({ attributes }) => {
  const [displayClassRequirements, setDisplayClassRequirements] =
    useState(false);
  const [selectedClass, setSelectedClass] = useState("");

  const meetsClassRequirements = (className) => {
    const classMinAttributes = CLASS_LIST[className];
    for (let attribute in classMinAttributes) {
      if (classMinAttributes[attribute] > attributes[attribute].value)
        return false;
    }
    return true;
  };

  const revealRequirements = (className) => {
    setDisplayClassRequirements(true);
    setSelectedClass(className);
  };

  return (
    <div>
      {Object.keys(CLASS_LIST).map((className) => (
        <p
          className={`${
            meetsClassRequirements(className) ? "valid" : "invalid"
          }`}
          onClick={() => revealRequirements(className)}
        >
          {className}
        </p>
      ))}
      {displayClassRequirements && (
        <div>
          <p>{selectedClass}</p>
          {Object.entries(CLASS_LIST[selectedClass]).map(
            ([attribute, value]) => (
              <div>
                <span>
                  {attribute} : {value}
                </span>
              </div>
            )
          )}
          <button onClick={() => setDisplayClassRequirements(false)}>
            hide requirements
          </button>
        </div>
      )}
    </div>
  );
};
export default CharacterClasses;
