import "./Blog.css";
import { useState } from "react";

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>Lorem, ipsum.</p>
      <button onClick={props.closeModal}>닫기</button>
    </div>
  );
}

function Blog() {
  // 모달창을 띄우기 위한 상태값
  const [modal, setModal] = useState(false);
  // 모달창에 표시될 제목 글의 인덱스
  let [modalTitle, setModalTitle] = useState(0);
  const [titles, setTitle] = useState(["Title1", "Title2", "Title3"]);
  const name = ["김이순신", "박안중근", "백세종대왕"];

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
              return modal && modalTitle === index
                ? setModal(false)
                : (setModal(true), setModalTitle(index));
              // if (modal && modalTitle === index) {
              //   setModal(false);
              // } else {
              //   setModal(true);
              //   setModalTitle(index);
              // }
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
      {modal && (
        <Modal
          modalTitle={modalTitle}
          title={titles}
          closeModal={() => setModal(false)}
        />
      )}
    </div>
  );
}

export default Blog;
