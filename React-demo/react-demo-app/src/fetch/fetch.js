import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const json = await response.json();
      setData(json);
    //   console.log(json);
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
const usersToDisplay = data.slice(0, 10);
  return (
    <div>
      <h1> User's Data</h1>
      {usersToDisplay.map((user) =>(
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.address.street}</p>
        <p>{user.address.city}</p>
      </div>
      ))}
    </div>
  );
};
export default Fetch;




























// import React, { useState, useEffect } from "react";

// const Fetch = () => {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const json = await response.json();
//       setData(json);
//       console.log(json);
//     };
//     fetchData();
//   }, []);
//   if (!data) {
//     return <div>Loading...</div>;
//   }
  
//   const user = data[1];
//   return (
//     <div>
//       <h1> User's Data</h1>
//       <div>
//         <p>{user.id}</p>
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//         <p>{user.address.street}</p>
//         <p>{user.address.city}</p>
//       </div>
//     </div>
//   );
// };
// export default Fetch;