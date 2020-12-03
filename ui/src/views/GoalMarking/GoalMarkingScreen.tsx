import React from 'react';
import {Action, State} from "../../uiModel";
import {createActions, reducer} from "../../reducers";
import {findAwayTeamPlayers, findHomeTeamPlayers} from "../../eventSourcing/eventSourcing";

interface Props {
  state: State,
  dispatch: (action: Action) => any,
  team: String,
}

function GoalMarking(props: Props) {
  const actions = createActions(props.dispatch)
  const players = props.team === 'home' ?
      findHomeTeamPlayers(props.state.dataStore.gameActions) :
      findAwayTeamPlayers(props.state.dataStore.gameActions)

  return (
      <div>
        <div>
          <button onClick={actions.gameView}>Back to game</button>
        </div>
        {players.map(player => <span>{player.name}</span>)}
      </div>
  );
}

export default GoalMarking;
