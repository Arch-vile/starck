import produce from "immer";
import {Action, SetViewAction, State, TogglePlayerTeamAction, View} from "./uiModel";
import {Player, TogglePlayerTeamGameAction} from "./model";

export function createActions(dispatch: any) {
  return {
    managePlayers: () => dispatch(new SetViewAction(View.MANAGE_PLAYERS)),
    togglePlayerTeam: (player: Player) => () =>
        dispatch(new TogglePlayerTeamAction(player))
  }
}

export function reducer(state: State, action: Action) {
  if (SetViewAction.is(action)) {
    return produce(state, (draft: State) => {
      draft.uiStore.currentView = action.view
    })
  }

  console.log(action.constructor);
  if (TogglePlayerTeamAction.is(action)) {
    console.log('the what now ', JSON.stringify(action))
    return produce(state, (draft: State) => {
      draft.dataStore.gameActions.push(new TogglePlayerTeamGameAction(action.player))
    })
  }

  throw Error("unknown action")
}
