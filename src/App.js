import { useState } from 'react';
import './App.css';
import List from "./components/List/List";
import store from "./utils/store"

function App() {

  const [data, setData] = useState(store);

  return (
    <div className="App">
        {data.listIds.map((listId)=>{
          const list = data.lists[listId]
          return  <List list={list} key={listId} />
          
        })}

    </div>
  );
}

export default App;
