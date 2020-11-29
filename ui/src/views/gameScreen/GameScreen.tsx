import React from 'react';
import {Action, State} from "../../uiModel";
import {createActions} from "../../reducers";

interface Props {
  state: State,
  dispatch: (action: Action) => any
}

function GameScreen(props: Props) {

  const actions = createActions(props.dispatch)

  return (
      <div>This is the game screen
        <div>
          <div>
            Team 1
            <button onClick={actions.managePlayers}>
              Players: 4</button>
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
