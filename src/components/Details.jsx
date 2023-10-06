import axios from "axios";
import React, { useEffect, useState } from "react";

const Details = () => {
  const [articles, setArticles] = useState([]);
  let id = localStorage.getItem("id");
  let id1 = id.slice(1, id.length - 1);
  //   console.log(id1);
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
  return (
    <div>
      {articles
        .filter((el) => el.Id === id1)
        .map((el) => {
          return (
            <div>
              <div className="bg-primary">
                <div className="container" key={el.Id}>
                  <p className="p10 pb-3">Published at: {el.date}</p>
                  <p className="p11 text-white pb-4">{el.title}</p>
                  <div className="d20 d-flex gap-3 align-items-center pb-5">
                    <div className="d21"></div>
                    <p className="p12 text-white">{el.author}</p>
                  </div>
                </div>
              </div>
              <div className="container">
                <p className="p13 pt-4 pb-4">
                  {el.description} Leverage agile frameworks to provide a robust
                  synopsis for high level overviews. Iterative approaches to
                  corporate strategy foster collaborative thinking to further
                  the overall value proposition. Organically grow the holistic
                  world view of disruptive innovation via workplace diversity
                  and empowerment. Bring to the table win-win survival
                  strategies to ensure proactive domination. At the end of the
                  day, going forward, a new normal that has evolved from
                  generation X is on the runway heading towards a streamlined
                  cloud solution. User generated content in real-time will have
                  multiple touchpoints for offshoring. Capitalize on low hanging
                  fruit to identify a ballpark value added activity to beta
                  test. <br /> <br /> Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line. Leverage agile frameworks to
                  provide a robust synopsis for high level overviews. Iterative
                  approaches to corporate strategy foster collaborative thinking
                  to further the overall value proposition. Organically grow the
                  holistic innovation via workplace diversity and empowerment.
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. content in
                  real-time will have multiple touchpoints for offshoring.
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. <br /> <br /> Override the
                  digital divide with additional clickthroughs from DevOps.
                  Nanotechnology immersion along the information Leverage agile
                  frameworks to provide a robust synopsis for high level
                  overviews. Iterative approaches to corporate strategy foster
                  collaborative thinking to further the overall value
                  proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. approaches to corporate strategy foster
                  collaborative thinking to further the overall value
                  proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(Details);
