import React from "react";
import "../component/Atagexample.css";

function Header() {
  return (
    <nav>
      <div className="logo">
        <img src="apple.png" alt="logo" />
      </div>
      <ul className="gnb-list">
        <li>
          <a href="">menu1</a>
        </li>
        <li>
          <a href="">menu2</a>
        </li>
        <li>
          <a href="">menu3</a>
        </li>
      </ul>
    </nav>
  );
}

function Body() {
  const num = [1, 2, 3];
  return (
    <body>
      <div className="back">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut
          ipsa tenetur excepturi voluptas voluptatem laboriosam rerum, saepe
          impedit magni vero expedita aliquid sit exercitationem amet aspernatur
          cumque, ad fuga.
        </p>
        <button>버튼</button>
      </div>
      <div className="back1">
        <div className="centerContainer">
          <h3>Lorem ipsum dolor sit.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            explicabo possimus culpa mollitia quibusdam impedit
          </p>
        </div>
        <div className="containerBox">
          {num.map(() => {
            return (
              <div className="container">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam explicabo possimus culpa mollitia quibusdam impedit
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </body>
  );
}

function Fotter() {
  return (
    <nav className="fnb-nav">
      <p>concat</p>
      <ul className="fnb-list">
        <li>
          <a href="">메일</a>
        </li>
        <li>
          <a href="">전화</a>
        </li>
        <li>
          <a href="">유튜브</a>
        </li>
      </ul>
    </nav>
  );
}

function Atagexample() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Fotter />
    </div>
  );
}

export default Atagexample;
