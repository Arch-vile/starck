import React, {useReducer} from 'react';
import './App.css';
import GameScreen from "./views/gameScreen/GameScreen";
import PlayerListing from "./views/playerListing/PlayerListing";
import {reducer} from "./reducers";
import {initialState, View} from "./uiModel";
import GoalMarking from "./views/GoalMarking/GoalMarkingScreen";

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <div className="App">
        <header className="App-header">
          {state.uiStore.currentView === View.GAME &&
          <GameScreen state={state} dispatch={dispatch}/>}

          {state.uiStore.currentView === View.MANAGE_PLAYERS &&
          <PlayerListing
              state={state}
              dispatch={dispatch}
          />}

          {state.uiStore.currentView === View.HOME_TEAM_GOAL &&
          <GoalMarking
              team={'home'}
              state={state}
              dispatch={dispatch}
          />}
          {state.uiStore.currentView === View.AWAY_TEAM_GOAL &&
          <GoalMarking
              team={'away'}
              state={state}
              dispatch={dispatch}
          />}
           {/*Just for debugging*/}
           <br/>
          <span>Just for debugging</span><br/>
          {state.dataStore.gameActions.map(action =>
            <div style={{ fontSize: 'small'}} key={action.timestamp}>{JSON.stringify(action)}</div>
          )}
        </header>
      </div>
  );
}

export default App;
