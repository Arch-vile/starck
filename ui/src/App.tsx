import React, {useState} from 'react';
import './App.css';
import StartScreen from "./views/startScreen/StartScreen";
import {State, View} from "./model";
import GameScreen from "./views/GameScreen";

const initialState: State = {
  currentView: View.START
};

function App() {

  const [state, setState] = useState(initialState);

  return (
    <div className="App">
      <header className="App-header">
        { state.currentView === View.START  && <StartScreen state={state} setState={setState}/> }
        { state.currentView === View.GAME  && <GameScreen state={state} setState={setState}/> }
      </header>
    </div>
  );
}

export default App;
