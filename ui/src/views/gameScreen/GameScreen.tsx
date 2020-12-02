import React from 'react';
import {Action, State} from "../../uiModel";
import {createActions} from "../../reducers";
import {calcAwayTeamPlayerCount, calcHomeTeamPlayerCount} from "../../eventSourcing/eventSourcing";

interface Props {
  state: State,
  dispatch: (action: Action) => any
}

function GameScreen(props: Props) {

  const actions = createActions(props.dispatch)

  const homeTeamPlayerCount = calcHomeTeamPlayerCount(props.state.dataStore.gameActions)
  const awayTeamPlayerCount = calcAwayTeamPlayerCount(props.state.dataStore.gameActions)

  return (
      <div>This is the game screen
        <div>
          <div>
            <span style={{color: 'green'}}>Team 1</span>
            <button onClick={actions.managePlayers}>
              Players: {homeTeamPlayerCount}
            </button>
            <button disabled={true}>Goals: 5</button>
          </div>
          <div>
            <span style={{color: 'red'}}>Team 2</span>
            <button disabled={true}>Players: {awayTeamPlayerCount}</button>
            <button disabled={true}>Goals: 5</button>
          </div>
        </div>
      </div>
  );
}

export default GameScreen;
