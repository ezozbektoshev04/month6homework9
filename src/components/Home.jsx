import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [articlePagenation, setArticlePagenation] = useState([]);
  const [inputText, setInputText] = useState("");
  const [page, setPage] = useState(1);
  let limit = 8;
  let numOfpages = Math.ceil(articles.length / limit);
  let arrBtns = [];
  for (let i = 1; i <= numOfpages; i++) {
    arrBtns.push(i);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/articles?_page=${page}&_limit=${limit}`
        );
        setArticlePagenation(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);
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

  const filteredData = articlePagenation.filter((el) => {
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
    <div className="container pt-3 pb-3">
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
          ? filteredData.map((article) => {
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
      <div className="d-flex align-items-center justify-content-center pt-4 pb-3 gap-4">
        {arrBtns?.map((item) => (
          <button
            className="btn btn-outline-info"
            key={item}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
