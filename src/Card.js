import React, {useState, useEffect} from "react";
//API key
const API_KEY = "6d6d9cc4";

function Card({ userInput }){

    const [filmData, setFilmData] = useState({});

    useEffect(() => {

        async function loadFilm() {
          try {
            //makes dynamic API call with userInput and API key
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&plot=short&t=${userInput}`);
            //turns API response to JSON object
            const data = await response.json();
            //sets filmData state to
            setFilmData(data);
    
      
          } catch (err) {
           console.log(err);
          }
        }
        loadFilm()

      }, [userInput]);
      
      //Inline CSS
      const cardStyle = {
          width: "18rem",
          margin: "0px",
          padding: "0px",
      }
      
      const card =  (
        <div className="card" >
          <img src={filmData.Poster} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-text" >{filmData.Title}</h1>
            <h6 className="card-text" style={{color: "grey"}}>{filmData.Year}</h6>
            <p className="card-text">{filmData.Rated}</p>
            <p className="card-text">{filmData.Genre}</p>
            <p className="card-text">{filmData.Plot}</p>
          </div>
        </div>
       )

      return (
          //Conditionally renders card layout based on if there is a poster or name
          <div style={cardStyle}>
              {(!filmData.Poster) ? null : card}
          </div>
       )
}

export default Card;