import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import data from "./data.json";
import SelectedBeast from "./Components/SelectedBeast";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [theBeast, setTheBeast] = useState({});
  const [hornsFilter, setHornsFilter] = useState("");

  function handleModal(beast) {
    setModalShow(!modalShow);
    setTheBeast(beast);
    console.log(beast);
  }

  return (
    <div className="App">
      <Header setHornsFilter={setHornsFilter} hornsFilter={hornsFilter} />
      <Main data={data} handleModal={handleModal} hornsFilter={hornsFilter} />
      {modalShow && (
        <SelectedBeast theBeast={theBeast} handleModal={handleModal} />
      )}
      <Footer />
    </div>
  );
}

export default App;
