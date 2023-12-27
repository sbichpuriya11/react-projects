import React from "react";
import { useState } from "react";

export const HookCounterThree = () => {
  const [name, setName] = useState({ title: "", firstName: "", lastName: "" });

  const handleTitleChange = (event) => {
    setName({ ...name, title: event.target.value });
  };

  const handleFirstNameChange = (event) => {
    setName({ ...name, firstName: event.target.value });
  };
  const handleLastNameChange = (event) => {
    setName({ ...name, lastName: event.target.value });
  };

  return (
    <div>
      <form>
        <input type="text" value={name.title} onChange={handleTitleChange} />
        <input
          type="text"
          value={name.firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={handleLastNameChange}
        />
        <h4>
          Your name is {name.title}. {name.firstName} {name.lastName}
        </h4>
      </form>
      <p>{JSON.stringify(name)}</p>
    </div>
  );
};
