import React, { useState } from "react";

const initialData = [
  {
    FirstName: "VishnuVardhan",
    LastName: "Dagumati",
    Age: 21,
  },
  {
    FirstName: "Harsha Vardhan",
    LastName: "Dagumati",
    Age: 20,
  },
  {
    FirstName: "Venkateswarlu reddy",
    LastName: "Dagumati",
    Age: 60,
  },
  {
    FirstName: "Madhavi",
    LastName: "Dagumati",
    Age: 45,
  },
  {
    FirstName: "Bhavesh Kumar Reddy",
    LastName: "Dagumati",
    Age: 10,
  },
];

const Main = () => {
  const [data, setData] = useState(initialData);

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <section>
      <h1>Hello VishnuVardhan</h1>
      {data.map((eachObj, index) => {
        const { FirstName, LastName, Age } = eachObj;
        return (
          <div key={index}>
            <h2>
              FirstName: {FirstName} <br />
              LastName: {LastName} <br />
              Age: {Age}
            </h2>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </section>
  );
};

export default Main;
