import React from "react";
import "./FeatureProducts.scss";
import Card from "../Card/Card";
const FeatureProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "/img/1.jpg",
      img2: "/img/2.jpg",
      title: "Sony XBR-55X900E 55-inch 4K HDR Ultra HD",
      isNew: true,
      oldPrice: 17,
      newPrice: 20,
    },
    {
      id: 2,
      img: "/img/3.jpg",
      img2: "/img/4.jpg",
      title: "cold",
      isNew: true,
      oldPrice: 19,
      newPrice: 15,
    },
    {
      id: 3,
      img: "/img/5.jpg",
      img2: "/img/6.jpg",
      title: "Hot",
      isNew: true,
      oldPrice: 16,
      newPrice: 22,
    },
    {
      id: 4,
      img: "/img/7.jpg",
      img2: "/img/8.jpg",
      title: "yeahhh",
      isNew: true,
      oldPrice: 13,
      newPrice: 21,
    },
  ];
  return (
    <div className="featureProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          necessitatibus suscipit voluptatum voluptatem magni modi deleniti
          itaque illo assumenda optio, maxime, porro culpa quia iusto
          perspiciatis blanditiis veniam pariatur in?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
