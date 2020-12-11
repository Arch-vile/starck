import React from 'react';
import {Action, State} from "../../uiModel";
import {createActions} from "../../reducers";
import {
  calcAwayTeamPlayerCount, calcAwayTeamScore,
  calcHomeTeamPlayerCount,
  calcHomeTeamScore
} from "../../eventSourcing/eventSourcing";

interface Props {
  state: State,
  dispatch: (action: Action) => any
}

function GameScreen(props: Props) {

  const actions = createActions(props.dispatch)

  const gameActions = props.state.dataStore.gameActions;
  const homeTeamPlayerCount = calcHomeTeamPlayerCount(gameActions)
  const awayTeamPlayerCount = calcAwayTeamPlayerCount(gameActions)
  const homeTeamScore = calcHomeTeamScore(gameActions)
  const awayTeamScore = calcAwayTeamScore(gameActions)

  return (
      <div>This is the game screen
        <div>
          <div>
            <span style={{color: 'green'}}>Team 1</span>
            <button onClick={actions.managePlayers}>
              Players: {homeTeamPlayerCount}
            </button>
            <button onClick={actions.markHomeTeamGoal}>Goals: {homeTeamScore}</button>
          </div>
          <div>
            <span style={{color: 'red'}}>Team 2</span>
            <button onClick={actions.managePlayers}>
              Players: {awayTeamPlayerCount}
            </button>
            <button onClick={actions.markAwayTeamGoal}>Goals: {awayTeamScore}</button>
          </div>
        </div>
        <div>
          <button onClick={actions.newGame}>Start new game</button>
        </div>
      </div>
  );
}

export default GameScreen;
