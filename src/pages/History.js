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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vulputate, sapien nec mollis congue, mi ante pretium turpis, quis
            ultricies lorem metus consequat felis. Proin convallis sagittis
            justo a faucibus. Aenean eu purus vestibulum, ullamcorper risus et,
            finibus enim. Vivamus ut neque gravida, efficitur mi eu, auctor
            ipsum. Nunc lacinia quam sit amet nisl sagittis, id molestie turpis
            gravida. Nam vulputate dolor erat, eget elementum ligula porttitor
            nec. Ut ultricies nunc ac augue tempus pretium. Sed consequat mi eu
            augue luctus, at tempor ligula tristique. Sed sagittis feugiat
            risus. Donec ut finibus velit, non facilisis urna. Nullam ac est ac
            neque interdum ullamcorper. Donec lobortis scelerisque viverra.
            Maecenas blandit et eros sed
          </p>
        </div>
      </div>
      <div className="row2">
        <h1>Game Hihlights</h1>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vulputate, sapien nec mollis congue, mi ante pretium turpis, quis
            ultricies lorem metus consequat felis. Proin convallis sagittis
            justo a faucibus. Aenean eu purus vestibulum, ullamcorper risus et,
            finibus enim. Vivamus ut neque gravida, efficitur mi eu, auctor
            ipsum. Nunc lacinia quam sit amet nisl sagittis, id molestie turpis
            gravida. Nam vulputate dolor erat, eget elementum ligula porttitor
            nec. Ut ultricies nunc ac augue tempus pretium. Sed consequat mi eu
            augue luctus, at tempor ligula tristique. Sed sagittis feugiat
            risus. Donec ut finibus velit, non facilisis urna. Nullam ac est ac
            neque interdum ullamcorper. Donec lobortis scelerisque viverra.
            Maecenas blandit et eros sed
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
