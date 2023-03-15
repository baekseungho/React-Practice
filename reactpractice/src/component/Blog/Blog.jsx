import "./Blog.css";
import { useState } from "react";
let bool = false;

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>Lorem, ipsum.{props.name}</p>
      <button
        onClick={() => {
          props.setNum(false);
        }}
      >
        닫기
      </button>
    </div>
  );
}

function Blog() {
  const [modal, setModal] = useState([]);
  const [titles, setTitle] = useState([
    { title: "Title1", name: "김이순신" },
    { title: "Title2", name: "박안중근" },
    { title: "Title3", name: "정세종대왕" },
  ]);

  let [num, setNum] = useState(false);
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
              setNum(true);
              let copy = [...titles];
              const modal = copy.splice(index, 1);
              setModal(modal[0]);
            }}
          >
            <h4>{title.title}</h4>
            <p>안녕하세요 저는 {title.name} 입니다.</p>
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
      {num === false ? null : (
        <Modal title={modal.title} name={modal.name} setNum={setNum} />
      )}
    </div>
  );
}

export default Blog;
