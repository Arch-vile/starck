import React from 'react';
import {Action,  createActions, State} from "../../model";

interface Props {
  state: State,
  dispatch: (action: Action) => any
}

function StartScreen(props: Props) {

  const actions = createActions(props.dispatch)

  return (
      <div>This is the start screen
        <br/>
        <button onClick={actions.newGame}>New Game</button>
      </div>
  );
}

export default StartScreen;
