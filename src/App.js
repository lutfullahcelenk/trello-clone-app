import React,{ useState } from "react";
import {v4 as uuid} from "uuid";
import "./App.css";
import InputContainer from "./components/input/InputContainer";
import List from "./components/List/List";
import store from "./utils/store";
import StoreApi from "./utils/storeApi";
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles((theme)=> ({
  root:{
    display: "flex",
    minHeight: "100vh",
    background: "cadetblue"
  },
}))



function App() {

  const classes = useStyle()
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
            ...data.lists,
            [listId] : list,
          },
      }
      setData(newState);
  }

  const addMoreList = (title) => {
    const newListId = uuid()
    const newList = {
      id: newListId,
      title: title,
      cards : []
    }

    const newState = {
      lists : {
        ...data.lists,
        [newListId] : newList
      },
      listIds: [...data.listIds, newListId],
    }
    setData(newState);
  }


  return (
    <StoreApi.Provider value= {{addMoreCard, addMoreList}}>
      <div className={classes.root}>
        {data.listIds.map((listId) => {
            const list = data.lists[listId];
            return(<List list = {list} key={listId}/>)
       })}
       <InputContainer type = "list"/>
    </div>
    </StoreApi.Provider>
  );
}

export default App;
