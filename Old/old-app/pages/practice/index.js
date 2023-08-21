import React from 'react'
import Link from "next/link";

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    return {
        props:{
            data : json,
        }
    }
}
const Index = ({data}) => {
  return (
    <div>
        {data.map((user) =>(
      <div key={user.id}>
        <Link href={`practice/${user.id}`} ><h2>{user.name}</h2></Link>
        <p>{user.email}</p>
        <p>{user.address.street}</p>
        <p>{user.address.city}</p>
        <br></br>
      </div>
      ))} 
    </div>
  )
}

export default Index