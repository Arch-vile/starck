import React from 'react';
import {Action, State} from "../../model";

interface Props {
  state: State,
  dispatch: (action: Action) => any
}

function StartScreen(props: Props) {
  return (
      <div>This is the start screen
        <br/>
        <button onClick={() => props.dispatch({type: 'NewGame'})}>New Game</button>
      </div>
  );
}

export default StartScreen;
