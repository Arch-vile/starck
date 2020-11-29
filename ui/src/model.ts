import produce from 'immer'

export enum View {
  START,
  GAME,
  MANAGE_PLAYERS
}

interface UIStore {
  currentView: View
}

interface Player {
  name: string
}
export const PLAYERS: Player[] = [
  {name: 'mikko'}, {name: 'ida'}, {name: 'roope'}
]

enum GameActionTypes {
  TOGGLE_PLAYER_TEAM = 'togglePlayerTeam'
}

// Epoch millis
type timeStamp = number

interface GameAction {
  timestamp: timeStamp
  type: GameActionTypes
}

class TogglePlayerTeamGameAction implements GameAction {
  timestamp = new Date().getTime()
  type = GameActionTypes.TOGGLE_PLAYER_TEAM
  player: Player

 constructor(player: Player) {
    this.player = player
 }
}


interface DataStore {
  gameActions: GameAction[]
}

export interface State {
  uiStore: UIStore,
  dataStore: DataStore
}

// export enum ActionTypes {
//   NEW_GAME = "newGame",
//   MANAGE_PLAYERS = "managePlayers",
//   TOGGLE_PLAYER_TEAM = "togglePlayerTeam"
// }

export interface Action { }

class SetViewAction implements Action {
  view: View
  constructor(view: View) {
    this.view = view
  }

  static is(action: Action): action is SetViewAction {
    return (action as SetViewAction).view !== undefined
  }
}

class TogglePlayerTeamAction implements Action {
  player: Player

  constructor(player: Player){
    this.player = player
  }

  static is(action: Action): action is TogglePlayerTeamAction {
    return (action as TogglePlayerTeamAction).player !== undefined
  }
}

export function createActions(dispatch: any) {
  return {
    // newGame: () => dispatch({type: ActionTypes.NEW_GAME}),
    managePlayers: () =>  dispatch(new SetViewAction(View.MANAGE_PLAYERS)),
     togglePlayerTeam: (player: Player) => () =>
         dispatch(new TogglePlayerTeamGameAction(player))
  }
}

export function reducer(state: State, action: Action ) {
  if(SetViewAction.is(action)) {
    return produce(state, (draft: State) => {
      draft.uiStore.currentView = action.view
    })
  }

  if(TogglePlayerTeamAction.is(action)) {
    return produce(state, (draft: State) => {
     draft.dataStore.gameActions.push(new TogglePlayerTeamGameAction(action.player))
    })
  }

  throw Error("unknown action")
  // switch (action.type) {
  //   case ActionTypes.NEW_GAME: {
  //     return produce(state, (draft: State) => draft);
  //   }
  //   case ActionTypes.MANAGE_PLAYERS:
  //     return produce(state, (draft: State) => {
  //       draft.uiStore.currentView = View.MANAGE_PLAYERS
  //     })
  //   case ActionTypes.TOGGLE_PLAYER_TEAM:
  //     return produce(state, (draft: State) => draft);
  //   default:
  //     eslint-disable-next-line
      // const _exhaustCheck: never = action.type
      // throw new Error();
  // }

}

