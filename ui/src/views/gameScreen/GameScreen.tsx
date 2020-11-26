import React from 'react';
import {State, View, createActions, Action} from "../../model";

interface Props {
  state: State,
  dispatch: (action:Action) => any
}

function GameScreen(props: Props) {

 console.log(JSON.stringify(props))

  return (
    <div >This is the game screen
      <div>
        <div>
          Team 1
          <button>Players: {props.state.dataStore.games[0].homeTeam.length}</button>
          <button>Goals: 5</button>
        </div>
        <div>
          Team 2
          <button>Players: 4</button>
          <button>Goals: 5</button>
        </div>
      </div>
    </div>
  );
}

export default GameScreen;
