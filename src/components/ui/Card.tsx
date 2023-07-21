import React from "react";

type CardProps = {
  name: string;
  debut: number;
  className: string;
};

const Card = (props: CardProps) => {
  return (
    <div className={props.className}>
      <h2>Team Name: {props.name}</h2>
      <h4>Debut Year: {props.debut}</h4>
    </div>
  );
};

export default Card;
