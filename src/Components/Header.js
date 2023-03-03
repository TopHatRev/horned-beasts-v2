import React from "react";
import Form from "./Form";

export default function Header({ hornsFilter, setHornsFilter }) {
  return (
    <header>
      <h1>Horned Beast</h1>
      <Form setHornsFilter={setHornsFilter} hornsFilter={hornsFilter} />
    </header>
  );
}
