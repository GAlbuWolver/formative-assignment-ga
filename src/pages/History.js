import React from "react";
import "./pages.css";
function History() {
  return (
    <div>
      <div className="row">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/1200px-Toronto_Raptors_logo.svg.png"
          }
          width="100"
          height="100"
        />
        <div className="col">
          <h1>About the Toronto Raptors </h1>
          <p>
            The Toronto Raptors are a Canadian professional basketball team
            based in Toronto. The Raptors compete in the National Basketball
            Association (NBA) as a member of the Atlantic Division of the
            Eastern Conference. The team plays its home games at Scotiabank
            Arena, which it shares with the Toronto Maple Leafs of the National
            Hockey League (NHL). The team was founded in 1995 as part of the
            NBA's expansion into Canada, along with the Vancouver Grizzlies.
            Since the 2001–02 season, the Raptors have been the only
            Canadian-based team in the league, as the Grizzlies relocated from
            Vancouver to Memphis, Tennessee.
          </p>
        </div>
      </div>
      <div className="row2">
        <h1>Game Highlights</h1>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/BzbngAZcLnI"
          title="Los Angeles Lakers vs. Toronto Raptors 4th Qtr Full Highlights | Jan. 09 | NBA 2024 Highlights"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="row">
        <img
          src={
            "https://m.media-amazon.com/images/M/MV5BMTNiMTRmOTgtMmNmMC00NDU5LWI0N2ItNzljNDA4Y2E5NGRjXkEyXkFqcGdeQXVyNTAyMjQyMDE@._V1_.jpg"
          }
          width="100"
          height="100"
        />
        <div className="col">
          <h1>About the LA Lakers </h1>
          <p>
            The Los Angeles Lakers are an American professional basketball team
            based in Los Angeles. The Lakers compete in the National Basketball
            Association (NBA) as a member of the Pacific Division of the Western
            Conference. The Lakers play their home games at Crypto.com Arena, an
            arena shared with the NBA's Los Angeles Clippers, the Los Angeles
            Sparks of the Women's National Basketball Association, and the Los
            Angeles Kings of the National Hockey League.[10] The Lakers are one
            of the most successful teams in the history of the NBA, and have won
            17 NBA championships, tied with the Boston Celtics for the most in
            NBA history.[11] More recently, the Lakers were the champions of the
            NBA's inaugural In-Season Tournament in 2023.
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
