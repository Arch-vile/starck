import React, {useState} from 'react';
import {State, View, createActions} from "../../model";

interface Props {
  state: State,
  setState: any
}

function StartScreen(props: Props) {

  const actions = createActions(props.setState);

  return (
    <div >This is the start screen
  <button onClick={() => actions.setView(View.GAME)}>fooo</button>
    </div>
  );
}

export default StartScreen;
