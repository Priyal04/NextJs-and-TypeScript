import React from 'react'
import Link from "next/link";

export const getStaticProps = async() => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const json = await res.json();
    return {
        props:{
            data : json.results,
        }
    }
}
const Index = ({data}) => {
  return (
    <div>
        <h1>Pokemon</h1>
        {data?.map((user) =>(
      <div key={user?.name}>
        <Link href={user?.url} ><h2>{user?.name}</h2></Link>
        <br></br>
      </div>
      ))} 
    </div>
  )
}

export default Index