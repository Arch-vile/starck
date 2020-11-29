import React from 'react';
import {Action, State} from "../../uiModel";
import {createActions} from "../../reducers";
import {Player, PLAYERS, TogglePlayerTeamGameAction} from "../../model";
import _ from "underscore"

interface Props {
  state: State,
  dispatch: (action: Action) => any
}

// The team assignment of the player can be sourced from the toggle event count for that player
function style(actionsPerPlayer: _.Dictionary<_.TypeOfCollection<TogglePlayerTeamGameAction[]>[]>, player: Player) {
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

  const toggleActions = props.state.dataStore.gameActions
  .filter(action => action instanceof TogglePlayerTeamGameAction)
  .map(action => action as TogglePlayerTeamGameAction)

  const actionsPerPlayer = _.groupBy(toggleActions, action => action.player.id)

  return (
      <div>Player list
        {PLAYERS.map(player =>
            <div key={player.id}
                 style={style(actionsPerPlayer, player)}
            >
              <button
                  onClick={actions.togglePlayerTeam(player)}>
                {player.name}
              </button>
            </div>
        )}
      </div>
  );
}

export default PlayerListing;
