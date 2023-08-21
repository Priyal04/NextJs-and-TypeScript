import React from "react";

const NewsArticle = ({articles}) => {
    return (
        <div>
      <h1>index</h1>
        {
            articles?.map((article )=>{
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id} | {article.title}
                        </h2>
                        <p></p>
                        <p>{article.body}</p>
                    </div>
                )
            })
        }
    </div>
  );
};

export default NewsArticle

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // Pass data to the page via props
  return {
      props: {
      articles: data,
    },
  };
}
