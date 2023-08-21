import React from "react";

export const getStaticPaths = async() => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await res.json();
  const paths = json?.map((data) => {
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
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
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
      <div key={data.name}>
        <h2>{data.name}</h2>
        <p>{data.url}</p>
        {/* <p>{data.address?.street}</p>
        <p>{data.address?.city}</p> */}
        <br></br>
      </div>
    </div>
  );
};
 export default ID;
