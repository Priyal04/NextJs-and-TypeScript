import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const post = await response.json();
      setData(post);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1> User's Data</h1>
      {data?.map((user) => (
        <div key={user.id}>
          <h2>{user.title}</h2>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  );
};
export default Fetch;
