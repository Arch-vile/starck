import {GameAction, TogglePlayerTeamGameAction} from "../model";
import _ from "underscore";


// function findLatestGameStartingAction(data: GameAction[]) {
//   const reversed = data.reverse()
//   const index = reversed.findIndex(action => {
//     return action.type === GameActionTypes.TOGGLE_PLAYER_TEAM ||
//         action.type === GameActionTypes.FINISH_GAME ||
//         action.type === GameActionTypes.RESET
//   });
//
//   if( index !== -1) {
//     return data[index]
//   } else {
//     return data[0]
//   }
// }

export function toggleActionsPerPlayer(events: GameAction[]) {
  const toggleActions = events
  .filter(action => action instanceof TogglePlayerTeamGameAction)
  .map(action => action as TogglePlayerTeamGameAction)

  return _.groupBy(toggleActions, action => action.player.id)
}

export function calcHomeTeamPlayerCount(events: GameAction[]) {
  const togglesPerPlayer = toggleActionsPerPlayer(events)
  return Object.values(togglesPerPlayer)
  .filter(actions => actions.length % 3 === 1).length;
}

export function calcAwayTeamPlayerCount(events: GameAction[]) {
  const togglesPerPlayer = toggleActionsPerPlayer(events)
  return Object.values(togglesPerPlayer)
  .filter(actions => actions.length % 3 === 2).length;
}
