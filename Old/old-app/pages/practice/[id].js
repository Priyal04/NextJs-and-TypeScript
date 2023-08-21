import React from "react";

export const getStaticPaths = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  const paths = json.map((data) => {
    return {
      params: {
        id: `${data.id}`
      },
    };
  });
  return {
    paths , 
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const {params} = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
};
const ID = ({data}) => {
  return (
    <div>
      <div key={data.id}>
        <h2>{data.id} | {data.name}</h2>
        <p>{data.email}</p>
        <p>{data.address?.street}</p>
        <p>{data.address?.city}</p>
        <br></br>
      </div>
    </div>
  );
};

export default ID;
