import "./Blog.css";
import { useState } from "react";

function Modal1(props) {
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>Lorem, ipsum.{props.name}</p>
      <button onClick={() => props.closeModal}>닫기</button>
    </div>
  );
}

function Blog1() {
  const [modal, setModal] = useState(false);
  const [titles, setTitle] = useState(["Title1", "Title2", "Title3"]);
  const name = ["김이순신", "박안중근", "백세종대왕"];
  const [num, setNum] = useState(0);

  return (
    <div>
      <div className="nav">
        <h1>Blog</h1>
      </div>
      {titles.map((title, index) => {
        return (
          <div
            key={index}
            className="list"
            onClick={() => {
              setNum(index);
              index === num ? setModal(false) : setModal(true);
            }}
          >
            <h4>{title}</h4>
            <p>안녕하세요 저는 {name[index]} 입니다.</p>
            <button
              onClick={() => {
                let copy = [...titles];
                copy.splice(index, 1);
                setTitle(copy);
              }}
            >
              글삭제
            </button>
          </div>
        );
      })}
      {titles.map((title, index) => {
        return modal === false ? null : num === index ? (
          <Modal1
            key={index}
            title={title}
            name={name[index]}
            closeModal={() => setModal(false)}
          />
        ) : null;
      })}
    </div>
  );
}

export default Blog1;
