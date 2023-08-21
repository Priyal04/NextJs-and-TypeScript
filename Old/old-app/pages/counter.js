// import React from 'react'

// const Counter = () => {
//     const [value , setValue] = useState(0);
//   return (
//     <div>
//     <h1>counter</h1>
//     <button onClick={(setValue((value)+ 1))}> Counter</button>
//     </div>
//   )
// }

// export default Counter;
import React, { useState, useEffect } from "react";
import Link from "next/link";

const funcComp = () => {
  const [state, setState] = useState(0);

  console.log("Outside");

//   useEffect(() => {
//     console.log("Inside useEffect");
//   }, []);
//   useEffect(() => {
//     console.log("Inside useEffect2");
//   });
//   useEffect(() => {
//     console.log("Inside useEffect3");
//   });

  useEffect(() => {
    const Timer = setInterval(() => {
      console.log("AllLifecycle Inside Useeffect1");
    }, 5000);
    // const Timer2 = setInterval(() => {
    //     console.log("AllLifecycle Inside Useeffect2");
    // },3000);
    return () => {
      console.log("Return inside UseEffect");
      clearInterval(Timer);
      // clearInterval(Timer2);
    };
  });

  console.log("Outside After useEffect");

  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
      </ul>
      {console.log("Inside Render")}
      <div style={{ border: "1px solid black", padding: "10px" }}>
        {/* <SecondFunctionalComponent /> */}
      </div>
      <br />
      Hello this is functional component
      <button onClick={() => setState((prev) => prev + 2)}>Click me</button>
      <h1>{state}</h1>
    </div>
  );
};

export default funcComp;
