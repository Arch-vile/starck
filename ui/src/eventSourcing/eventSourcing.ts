import {
  GameAction,
  MarkGoalGameAction,
  NewGameGameAction,
  Player,
  TogglePlayerTeamGameAction
} from "../model";
import _, { Dictionary } from "lodash";

export function toggleActionsPerPlayer(events: GameAction[]): Dictionary<TogglePlayerTeamGameAction[]>   {
  const toggleActions = events
  .filter((action): action is TogglePlayerTeamGameAction => action instanceof TogglePlayerTeamGameAction)

  const foo = _.groupBy(toggleActions, action => action.player.id)
  return foo;
}

export function findPlayers(teamOrder: number, events: GameAction[]) {
  const togglesPerPlayer = toggleActionsPerPlayer(events)
  return Object.values(togglesPerPlayer)
  .filter(actions => actions.length % 3 === teamOrder)
  .map( actions => actions[0])
  .map(action => action.player)
}

export function findHomeTeamPlayers(events: GameAction[]) {
  return findPlayers(1, events)
}

export function findAwayTeamPlayers(events: GameAction[]) {
  return findPlayers(2, events)
}

export function calcHomeTeamPlayerCount(events: GameAction[]) {
return findHomeTeamPlayers(events).length
}

export function calcAwayTeamPlayerCount(events: GameAction[]) {
  return findAwayTeamPlayers(events).length
}

function filterCurrentGameActions(events: GameAction[]) {
  const indexOfLastToggle = _.findLastIndex(events, action => action instanceof TogglePlayerTeamGameAction)
  const indexOfNewGame = _.findLastIndex(events, action => action instanceof NewGameGameAction)
  return events.slice(Math.max(indexOfLastToggle, indexOfNewGame))
}

export function calcHomeTeamScore(events: GameAction[]) {
  return calcTeamScore(findHomeTeamPlayers(events), events)
}

export function calcAwayTeamScore(events: GameAction[]) {
  return calcTeamScore(findAwayTeamPlayers(events), events)
}

export function calcTeamScore(teamPlayers: Player[], events: GameAction[]) {
  const currentGameActions = filterCurrentGameActions(events)
  return currentGameActions
  .filter((action): action is MarkGoalGameAction => action instanceof MarkGoalGameAction)
  .filter(action => teamPlayers.includes(action.goal))
      .length
}
