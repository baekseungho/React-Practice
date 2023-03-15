import React from "react";
import "./Cards.css";

// const ob1 = {
//   title: "Title1",
//   text: "lorem ipsum dolor sit amet.",
// };
// const ob2 = {
//   title: " Title2",
//   text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, molestias.",
// };

// const ob3 = {
//   title: "Title3",
//   text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis, voluptas incidunt ad delectus amet?",
// };
// const arr = [ob1, ob2, ob3];

const Cards = () => {
  const arr = [
    { title: "Title1", text: "lorem ipsum dolor sit amet." },
    {
      title: " Title2",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, molestias.",
    },
    {
      title: "Title3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis, voluptas incidunt ad delectus amet?",
    },
  ];
  return (
    <section className="post-box">
      {arr.map((a, index) => {
        return <Card key={index} title={a.title} text={a.text} />;
      })}
    </section>
  );
};

function Card(props) {
  return (
    <div className="post-card">
      <h2>{props.title}</h2>
      <p className="post-card-txt">{props.text}</p>
    </div>
  );
}

export default Cards;
