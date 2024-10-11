const saveCharacterSheet = (character) => {
  return fetch(
    "https://recruiting.verylongdomaintotestwith.ca/api/{{dz365}}/character",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    }
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
};

const loadCharacterSheet = async () => {
  try {
    const res = await fetch(
      "https://recruiting.verylongdomaintotestwith.ca/api/{{dz365}}/character"
    );
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export { saveCharacterSheet, loadCharacterSheet };
