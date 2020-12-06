import React from 'react';
import {Action, State} from "../../uiModel";
import {createActions} from "../../reducers";
import {Player, PLAYERS, TogglePlayerTeamGameAction} from "../../model";
import {Dictionary} from "lodash"
import {toggleActionsPerPlayer} from "../../eventSourcing/eventSourcing";

interface Props {
  state: State,
  dispatch: (action: Action) => any
}

// The team assignment of the player can be sourced from the toggle event count for that player
function style(actionsPerPlayer: Dictionary<TogglePlayerTeamGameAction[]> , player: Player) {
  if (!actionsPerPlayer[player.id] || actionsPerPlayer[player.id].length % 3 === 0) {
    return {backgroundColor: 'transparent'}
  }

  if (actionsPerPlayer[player.id].length % 3 === 1) {
    return {backgroundColor: 'green'}
  }

  if (actionsPerPlayer[player.id].length % 3 === 2) {
    return {backgroundColor: 'red'}
  }
}

function PlayerListing(props: Props) {

  const actions = createActions(props.dispatch)
  const actionsPerPlayer = toggleActionsPerPlayer(props.state.dataStore.gameActions)

  return (
      <div>
        <div>
          <button onClick={actions.gameView}>Back to game</button>
        </div>
        Player list
        {PLAYERS.map(player =>
            <div key={player.id}
                 style={style(actionsPerPlayer, player)}>
              <button
                  onClick={actions.togglePlayerTeam(player)}>
                {player.name}
              </button>
            </div>
        )}

        <button disabled>Add player</button>
      </div>
  );
}

export default PlayerListing;
