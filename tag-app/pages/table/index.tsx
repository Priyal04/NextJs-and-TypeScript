import React, { useState } from "react";
import TableData from "./TableData";
import {Chela_One } from "next/font/google";
// import Style from "./Table.module.css";

export const chela_one = Chela_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface HomeProps {
  data: Todo[];
}

const Home: React.FC<HomeProps> = ({ data }: HomeProps) => {
  const itemsPerPage = 10; // Number of items to display per page
  const [allData, setAllData] = useState<Todo[]>(data);
  const [filteredData, setFilteredData] = useState<Todo[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1); // items to be displayed on the current page
  const [sortOrder, setSortOrder] = useState<string>("asc"); // asc for ascending, desc for descending
  const [activeTab, setActiveTab] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  //---------------------HandleFilter---------------------------------------
  const handleFilter = (filterType: string) => {
    if (filterType == "All") {
      setFilteredData(allData);
    } else {
      const filteredTodos = allData.filter((item) =>
        filterType === "Completed" ? item.completed : !item.completed
      );
      setFilteredData(filteredTodos);
    }
    setCurrentPage(1); // Reset to the first page when changing filters
  };

  //----------------------HandleSort--------------------------------------
  const handleSort = (sortOrder: string) => {
    setSortOrder(sortOrder);
    const sortedTodos = [...filteredData].sort((a, b) =>
      sortOrder === "asc"
        ? a.todo.localeCompare(b.todo)
        : b.todo.localeCompare(a.todo)
    );
    setFilteredData(sortedTodos);
  };

  //-----------------------HandleSearch------------------------------------

  const handleSearch = (value: string) => {
    setSearch(value);
    // if (value.length >= 3) {
    //   const searchResults = filteredData.filter(
    //     (item) =>
    //       item.todo.toLowerCase().includes(value.toLowerCase()) &&
    //       (activeTab === "All"
    //         ? true
    //         : activeTab === "Completed"
    //         ? item.completed
    //         : !item.completed)
    //   );
    //   setFilteredData(searchResults);
    // } else {
    //   setFilteredData(allData);
    // }
  };

  //-----------------------Pagination Constant-----------------------------
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container">
      <h1 className={`text-center ${chela_one.className}`}>Todo List</h1>
      {/* --------------------------Searching-------------------------- */}
      <div className="fontStyle">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search Todos..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between py-5">
          {/* ---------------------Filter----------------------------- */}
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => handleFilter("All")}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary "
            onClick={() => handleFilter("Completed")}
          >
            Completed
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => handleFilter("NotCompleted")}
          >
            Not Completed
          </button>
          <div className="d-flex justify-content-start">
            {/* -----------------------Sorting----------------------------- */}
            <select
              className={`form-control`}
              value={sortOrder}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <TableData data={currentItems} search={search} />
        {/* ----------------Pagination-------------------------- */}
        {filteredData.length > itemsPerPage && (
          <nav aria-label="pagination">
            <ul className="pagination justify-content-center">
              {Array.from({
                length: Math.ceil(filteredData.length / itemsPerPage),
              }).map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 && activeTab === "All"
                      ? "active"
                      : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    return {
      props: {
        data: data?.todos,
      },
    };
  } catch (error) {
    console.log("Error fetching data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
}