import { CLASS_LIST } from "./consts";

const CharacterClasses = ({ attributes }) => {
  const meetsClassRequirements = (className) => {
    const classMinAttributes = CLASS_LIST[className];
    for (let attribute in classMinAttributes) {
      if (classMinAttributes[attribute] > attributes[attribute].value)
        return false;
    }
    return true;
  };

  return (
    <div>
      {Object.keys(CLASS_LIST).map((className) => (
        <p
          className={`${
            meetsClassRequirements(className) ? "valid" : "invalid"
          }`}
        >
          {className}
        </p>
      ))}
    </div>
  );
};
export default CharacterClasses;
