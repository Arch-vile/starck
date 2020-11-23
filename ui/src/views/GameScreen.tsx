import React from 'react';
import {State, View, createActions} from "../model";

interface Props {
  state: State,
  setState: any
}

function GameScreen(props: Props) {
  return (
    <div >This is the game screen</div>
  );
}

export default GameScreen;
