import React from "react";

export default function SelectedBeast({ theBeast, handleModal }) {
  function closeModal() {
    handleModal({});
  }
  return (
    <div className="selected-beast">
      <span className="modalButton" onClick={closeModal}>
        X
      </span>
      <img src={theBeast.image_url} alt={theBeast.title} />
    </div>
  );
}
