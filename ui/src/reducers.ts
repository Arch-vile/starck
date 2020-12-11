import produce from "immer";
import {
  Action,
  MarkGoalAction, NewGameAction,
  SetViewAction,
  State,
  TogglePlayerTeamAction,
  View
} from "./uiModel";
import {MarkGoalGameAction, NewGameGameAction, Player, TogglePlayerTeamGameAction} from "./model";

export function createActions(dispatch: any) {
  return {
    gameView: () => dispatch(new SetViewAction(View.GAME)),
    managePlayers: () => dispatch(new SetViewAction(View.MANAGE_PLAYERS)),
    togglePlayerTeam: (player: Player) => () =>
        dispatch(new TogglePlayerTeamAction(player)),
    markHomeTeamGoal: () => dispatch(new SetViewAction(View.HOME_TEAM_GOAL)),
    markAwayTeamGoal: () => dispatch(new SetViewAction(View.AWAY_TEAM_GOAL)),
    markGoal: (serve: Player, goal: Player) => dispatch(new MarkGoalAction(serve,goal)),
    newGame: () => dispatch(new NewGameAction())
  }
}

export function reducer(state: State, action: Action) {
  if (SetViewAction.is(action)) {
    return produce(state, (draft: State) => {
      draft.uiStore.currentView = action.view
    })
  }

  if (TogglePlayerTeamAction.is(action)) {
    return produce(state, (draft: State) => {
      draft.dataStore.gameActions.push(new TogglePlayerTeamGameAction(action.player))
    })
  }

  if (MarkGoalAction.is(action)) {
    return produce(state, (draft: State) => {
      draft.dataStore.gameActions.push(new MarkGoalGameAction(action.serve, action.goal))
      draft.uiStore.currentView = View.GAME
    })
  }

  if (NewGameAction.is(action)) {
    return produce(state, (draft: State) => {
      draft.dataStore.gameActions.push(new NewGameGameAction())
    })
  }
  throw Error(`unknown action ${JSON.stringify(action)}`)
}
