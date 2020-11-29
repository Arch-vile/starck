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
            <span style={{color: 'green'}}>Team 1</span>
            <button onClick={actions.managePlayers}>
              Players: 4</button>
            <button disabled={true}>Goals: 5</button>
          </div>
          <div>
            <span style={{color: 'red'}}>Team 2</span>
            <button disabled={true}>Players: 4</button>
            <button disabled={true}>Goals: 5</button>
          </div>
        </div>
      </div>
  );
}

export default GameScreen;
