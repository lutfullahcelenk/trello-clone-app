import React from "react";
import "./App.css";
import TrelloList from "./components/TrelloList";
import { useSelector } from "react-redux";
import TrelloActionButton from "./components/TrelloActionButton";

function App() {
  const lists = useSelector((state) => state.lists);
  // console.log(lists);

  return (
    <div>
      <h1>Hello</h1>
      <div style={{display:"flex", marginRight:"8px"}}>
        {lists.map((list) => (
          <TrelloList title={list.title} cards={list.cards} key={list.id} />
        ))}
        <TrelloActionButton type="list" />
      </div>
    </div>
  );
}

export default App;
