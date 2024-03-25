import React from "react";
import CounterApp from "./components/CounterApp";
import SongList from "./components/songList";
import SongDisplay from "./components/SongDisplay";


const App = () => {
  return (
    <div>
      <CounterApp />
      <SongList/>
      <SongDisplay/>

    </div>
  );
};

export default App;
