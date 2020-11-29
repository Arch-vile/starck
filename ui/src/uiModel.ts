import {DataStore, Player} from "./model";

export enum View {
  GAME,
  MANAGE_PLAYERS
}

interface UIStore {
  currentView: View
}

export interface State {
  uiStore: UIStore,
  dataStore: DataStore
}

export interface Action {
}

export class SetViewAction implements Action {
  view: View

  constructor(view: View) {
    this.view = view
  }

  static is(action: Action): action is SetViewAction {
    return (action as SetViewAction).view !== undefined
  }
}

export class TogglePlayerTeamAction implements Action {
  player: Player

  constructor(player: Player) {
    this.player = player
  }

  static is(action: Action): action is TogglePlayerTeamAction {
    return (action as TogglePlayerTeamAction).player !== undefined
  }
}

export const initialState: State = {
  uiStore: {
    currentView: View.GAME
  },
  dataStore: {
    gameActions: []
  }
};

