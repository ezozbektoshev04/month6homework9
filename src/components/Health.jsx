import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Health = () => {
  const [articles, setArticles] = useState([]);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/articles");
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const searchValue = (e) => {
    e.preventDefault();
    const input = e.target.value.toLowerCase();
    setInputText(input);
    console.log(inputText);
  };

  const filteredData = articles.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.title.toLowerCase().includes(inputText);
    }
  });
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/details");
    localStorage.setItem("id", JSON.stringify(id));
  };
  return (
    <div className="container">
      <h2>Our Lastest Posts</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <input
            type="text"
            className="form-control w-50 mt-3 mb-4"
            placeholder="Search..."
            name="search"
            onChange={searchValue}
          />
        </div>
      </form>
      <div className="d-flex gap-3 flex-wrap">
        {articles.length > 0
          ? filteredData
              .filter((el) => el.topic === "Health")
              .map((article) => {
                return (
                  <div key={article.Id} className="d1">
                    <div
                      className="bg-secondary"
                      style={{ width: "296px", height: "312px" }}
                    >
                      {" "}
                      <p className="p1">{article.topic}</p>
                    </div>

                    <p
                      className="aa pt-2"
                      onClick={() => handleClick(article.Id)}
                    >
                      {article.title}
                    </p>
                    <p className="p2">{article.author}</p>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default React.memo(Health);
