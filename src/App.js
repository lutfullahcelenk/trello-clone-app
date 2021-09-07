import { useState } from "react";
import {v4 as uuid} from "uuid";
import "./App.css";
import List from "./components/List/List";
import store from "./utils/store";
import StoreApi from "./utils/storeApi";

function App() {
  const [data, setData] = useState(store);
  const addMoreCard = (title,listId) => {
      const newCardId = uuid();
      // en güzel key verme ve id oluşturma yöntemlerinden biriymiş.Stackoverflow sağolsun...
      const newCard = {
        id : newCardId,
        content: title,
        //title = e.target.value ile gelen değer
      };

      const list = data.lists[listId]
      list.cards = [...list.cards,newCard]

      const newState = {
        ...data, 
          lists:{
            ...data.list,
            [listId] : list,
          },
      }
      setData(newState);
  }

  return (
    <StoreApi.Provider value= {{addMoreCard}}>
      <div className="App">
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
      </div>
    </StoreApi.Provider>
  );
}

export default App;
