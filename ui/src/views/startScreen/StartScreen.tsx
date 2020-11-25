import React, {useState} from 'react';
import {State, View, createActions, Action} from "../../model";

interface Props {
  state: State,
  dispatch: (action:Action) => any
}

function StartScreen(props: Props) {

  // const actions = createActions(props.state, props.setState);

  return (
    <div >This is the start screen
      <br/>
  <button onClick={() => props.dispatch({type: 'GameView'})}>New Game</button>
    </div>
  );
}

export default StartScreen;
