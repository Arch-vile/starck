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
  const [serve, setServe] = useState<Player | undefined>()
  const [goal, setGoal] = useState()


  const actions = createActions(props.dispatch)
  const players = props.team === 'home' ?
      findHomeTeamPlayers(props.state.dataStore.gameActions) :
      findAwayTeamPlayers(props.state.dataStore.gameActions)

  return (
      <div>
        <div>
          <button onClick={actions.gameView}>Back to game</button>
        </div>
        { !serve ?
            <div>
             Choose serve<br/>
              {players.map(player => <button onClick={() => setServe(player)}>{player.name}</button>)}
            </div> :
            <div>
            </div>
        }
      </div>
  );
}

export default GoalMarking;
