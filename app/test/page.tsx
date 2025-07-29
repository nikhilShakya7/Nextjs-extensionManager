/*import React from "react";

const page = () => {
  const datas = [
    { id: 2, name: "Max", adress: "sdvdv" },
    { id: 8, name: "John", adress: "sdvdv" },
    { id: 3, name: "Jane" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Alice" },
  ];
  return (
    <div>
      {datas.map((data) => {
        console.log(data);
        return (
           <li key={data.id}>
            name={data.name}
            id={data.id}
          </li>
          <Card key={data.id} name={data.name} address={data.adress} />
        );
      })}
    </div>
  );
};

export default page;

const Card = ({
  name,
  address = "default", //goes to default if address is not given
}: {
  name: string;
  address?: string; //?=not required
}) => {
  return (
    <div className="text-amber-300 bg-red-500 m-10 ">
      <p>{name}</p>
      <p>{address}</p>
    </div>
  );
};

*/
/*"use client";
import React, { useState } from "react";

const page = () => {
  const [colour, setColour] = useState("black");

  return (
    <div className="px-100 py-50">
      <p style={{ color: colour, fontSize: "24px" }}>This colour is {colour}</p>
      <div className="text-center border-2 bg-blue-600 w-20 ">
        <button onClick={() => setColour("blue")}>Blue</button>
      </div>
      <div className="text-center border-2 bg-green-600 w-20">
        <button onClick={() => setColour("green")}>Green</button>
      </div>
      <div className="text-center bg-red-600 w-20 border-2">
        <button onClick={() => setColour("red")}>Red</button>
      </div>
    </div>
  );
};

export default page;
*/

"use client";
import React, { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="rounded-3xl bg-purple-600 hover:bg-purple-950 border-2 text-2xl"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <p>Count: {count} </p>
    </div>
  );
};

export default page;
