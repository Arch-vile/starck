import React, {useReducer} from 'react';
import './App.css';
import StartScreen from "./views/startScreen/StartScreen";
import {reducer, State, View} from "./model";
import GameScreen from "./views/gameScreen/GameScreen";
import PlayerListing from "./views/playerListing/PlayerListing";

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
          {state.uiStore.currentView === View.START &&
          <StartScreen state={state} dispatch={dispatch}/>}

          {state.uiStore.currentView === View.GAME &&
          <GameScreen state={state} dispatch={dispatch}/>}

          {state.uiStore.currentView === View.MANAGE_PLAYERS &&
          <PlayerListing
              dispatch={dispatch}
          />}
        </header>
      </div>
  );
}

export default App;
