import React, {useReducer} from 'react';
import './App.css';
import {reducer, State, View} from "./model";
import GameScreen from "./views/gameScreen/GameScreen";
import PlayerListing from "./views/playerListing/PlayerListing";

const initialState: State = {
  uiStore: {
    currentView: View.GAME
  },
  dataStore: {
    gameActions: []
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <div className="App">
        <header className="App-header">
          {state.uiStore.currentView === View.GAME &&
          <GameScreen state={state} dispatch={dispatch}/>}

          {state.uiStore.currentView === View.MANAGE_PLAYERS &&
          <PlayerListing
              dispatch={dispatch}
          />}
          {state.dataStore.gameActions.map(action =>
            <div key={action.timestamp}>{JSON.stringify(action)}</div>
          )}
        </header>
      </div>
  );
}

export default App;
