import React from "react";
// import Atagexample from "./component/Atagexample";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Cards from "./component/Main/Cards";
import "./App.css";
import Blog from "./component/Blog/Blog";
import Blog1 from "./component/Blog/Blog1";
import { Route, Routes, Link } from "react-router-dom";
import Menu2 from "./component/Menu2";
import { Button } from "react-bootstrap";
import Nav from "./component/Nav";
import { Card } from "react-bootstrap";
import About from "./component/Router/About";
import Home from "./component/Router/Home";
import Products from "./component/Router/Products";
import ProductDetail from "./component/Router/ProductDetail";
import Modal2 from "./component/Modal2";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // useEffect 함수가 매개변수 두 개를 받는다.
  // 1. 콜백함수
  // 2. [] array
  useEffect(() => {
    console.log("useEffect1");
  }, []);

  // Array에 state 값을 넣으면 리액트 그 값을 주시하고 있다가
  // count 업데이트 되면 render State 업데이트 됐다고 알려준다.
  useEffect(() => {
    console.log("useEffect2", count);
  }, [count]);
  return (
    <div className="App">
      {console.log("render")}
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        더하기 1
      </button>
      <Modal2 />
      {/* <Atagexample /> */}
      {/* <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu1/" element={<h1>menu1</h1>} />
        <Route path="/menu2/" element={<Menu2 />} />
        <Route path="/menu3/" element={<h1>menu3</h1>} />
      </Routes> */}
      {/* <Main />
      <Cards /> */}
      {/* <Blog /> */}
      <br></br>
      {/* <Blog1 /> */}
      {/* <Nav />
      <Button variant="dark">Dark</Button>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      <Routes>
        {/* Route 안에 속성이 두 개가 들어간다 path/ element
          1. path : 페이지의 주소 URL
          2. element : path 주소로 이동 했을 때 보여줄 페이지 
          3. / : 기본 경로 */}
        <Route path="/" element={<Home />} />
        {/* nested Routes */}
        {/* Outlet */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<h1>멤버!멤버!멤버!</h1>} />
          <Route
            path="location"
            element={<h1>로케이션!로케이션!로케이션!</h1>}
          />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
