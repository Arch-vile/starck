import React, {useState} from 'react';
import {Action, State} from "../../uiModel";
import {createActions, reducer} from "../../reducers";
import {findAwayTeamPlayers, findHomeTeamPlayers} from "../../eventSourcing/eventSourcing";
import {Player} from "../../model";

interface Props {
  state: State,
  dispatch: (action: Action) => any,
  team: String,
}

function GoalMarking(props: Props) {
  const [serve, markServe] = useState<Player | undefined>()
  const actions = createActions(props.dispatch)
  const players = props.team === 'home' ?
      findHomeTeamPlayers(props.state.dataStore.gameActions) :
      findAwayTeamPlayers(props.state.dataStore.gameActions)

  const markGoal = function (goal: Player) {
    actions.markGoal(serve!!, goal)
  }

  return (
      <div>
        <div>
          <button onClick={actions.gameView}>Back to game</button>
        </div>
        { !serve ?
            <div>
             Choose serve<br/>
              {players.map(player => <button onClick={() => markServe(player)}>{player.name}</button>)}
            </div> :
            <div>
              Choose goal<br/>
              {players.map(player => <button onClick={() => markGoal(player)}>{player.name}</button>)}
            </div>
        }
      </div>
  );
}

export default GoalMarking;
