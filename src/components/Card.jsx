import React from "react";
import { useState } from "react";
import "./Card.css";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";

const imgApi = "https://image.tmdb.org/t/p/w500";

export default function Card({
  title,
  poster_path,
  overview,
  release_date,
  vote_average,
}) {
  const [readMore, setReadMore] = useState(false);

  const linkName = readMore ? "Read Less" : "Read More...";

  const setClass = (vote) => {
    if (vote > 6.9) {
      return "ratings green";
    } else if (vote > 4.9) {
      return "ratings yellow";
    } else {
      return "ratings red";
    }
  };

  return (
    <div className="movie">
      <div className="card-base">
        <div className="card-img">
          <img
            src={poster_path ? imgApi + poster_path : "https://images.unsplash.com/photo-1629208113515-4569380efcb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
            alt={title}
          />
        </div>
        <div className="name">
          <h1> {title} </h1>
        </div>
        <div className="rate-date">
          <div className="released">
            <CalendarTodayTwoToneIcon /> {release_date}
          </div>
          <div className={setClass(vote_average)}>⭐{vote_average}</div>
        </div>
        <div className="description">
          <a
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            <p>{linkName}</p>
          </a>
          {readMore && overview}
        </div>
      </div>
    </div>
  );
}
