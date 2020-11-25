import React, {useReducer, useState} from 'react';
import './App.css';
import StartScreen from "./views/startScreen/StartScreen";
import {reducer, State, View} from "./model";
import GameScreen from "./views/gameScreen/GameScreen";

const initialState: State = {
  uiStore: {
    currentView: View.START
  },
  dataStore: {
    games: []
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        { state.uiStore.currentView === View.START  && <StartScreen state={state} dispatch={dispatch}/> }
        { state.uiStore.currentView === View.GAME  && <GameScreen state={state} dispatch={dispatch}/> }
      </header>
    </div>
  );
}

export default App;
