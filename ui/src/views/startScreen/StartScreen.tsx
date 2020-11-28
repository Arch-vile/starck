import React from 'react';
import {Action, ActionTypes, State} from "../../model";

interface Props {
  state: State,
  dispatch: (action: Action) => any
}

function StartScreen(props: Props) {

  // const actions = createActions(props.dispatch)


  return (
      <div>This is the start screen
        <br/>
        <button onClick={() => props.dispatch({type: ActionTypes.NEW_GAME})}>New Game</button>
      </div>
  );
}

export default StartScreen;
