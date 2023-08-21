import React from 'react'

type User = {
    id: number;
    name: string;
    email: string;
    address: {
      street: string | number;
      city: string;
    };
  };
 
type FetchProps = {
    data: User[];
  };

export const getStaticProps = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return{
        props : {data : json}
    };
};
const Fetch : React.FC<FetchProps> = ({data}) => {
  return (
    <div>
       <h1> User's Data</h1>
      {data.map((user) =>(
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.address.street}</p>
        <p>{user.address.city}</p>
        <br></br>
      </div>
      ))} 
    </div>
  )
}

export default Fetch;