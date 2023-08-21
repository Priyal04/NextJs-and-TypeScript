import React from 'react'
interface Todo {
  id: number;
  todo : string;
  completed: boolean;
  userId:number;
}

interface TableDataProps {
  data: Todo[];
  search: string
}

const TableData: React.FC<TableDataProps> = ({ data, search} : TableDataProps )=> {
    console.log(data);
    //--------------Filter For search ------------------------
    let DisplayData = data
    if (search.length >= 3) {
      DisplayData = data.filter(
        (item) =>
          item.todo.toLowerCase().includes(search.toLowerCase()) 
      );
      }
  return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>UsedID</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData?.map((item) => (
            <tr key={item?.id}>
              <td>{item?.id}</td>
              <td>{item?.todo}</td>
              <td>{item?.completed ? 'Yes' : 'No'}</td>
              <td>{item?.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default TableData;

























