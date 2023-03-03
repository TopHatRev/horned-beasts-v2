import React from "react";
import { useState } from "react";

export default function HornedBeast({
  title,
  imageURL,
  description,
  handleModal,
  beast,
}) {
  const [votes, setVotes] = useState(0);

  function handleVotes() {
    setVotes(votes + 1);
    handleModal(beast);
  }

  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img src={imageURL} alt="" onClick={handleVotes} />
      <p>{description}</p>
      <p>Favourites {votes}</p>
    </div>
  );
}
