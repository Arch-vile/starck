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

interface Point {
  serve: Player,
  goal: Player
}

interface Game {
  homeTeam: Team
  awayTeam: Team
  points: Point[]
}

export interface Team {
  players: Player[]
}

interface DataStore {
  games: Game[]
}

export interface State {
  uiStore: UIStore,
  dataStore: DataStore
}

export enum ActionTypes {
  NEW_GAME = "newGame",
  MANAGE_PLAYERS = "managePlayers",
  TOGGLE_PLAYER_TEAM = "togglePlayerTeam"
}

export interface Action {
  type: ActionTypes
}

export function createActions(dispatch: any) {
  return {
    newGame: () => dispatch({type: ActionTypes.NEW_GAME}),
    managePlayers: () =>  dispatch({type: ActionTypes.MANAGE_PLAYERS}),
    togglePlayerTeam: (player: Player) => () =>
        dispatch({type: ActionTypes.TOGGLE_PLAYER_TEAM, player: player})
  }
}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.NEW_GAME: {
      return produce(state, (draft: State) => {
        draft.dataStore.games.push(
            {
              homeTeam: {players: []},
              awayTeam: {players: []},
              points: []
            })
        draft.uiStore.currentView = View.GAME
      });
    }
    case ActionTypes.MANAGE_PLAYERS:
      return produce(state, (draft: State) => {
        draft.uiStore.currentView = View.MANAGE_PLAYERS
      })
    case ActionTypes.TOGGLE_PLAYER_TEAM:
      return produce(state, (draft: State) => draft);
    default:
      // eslint-disable-next-line
      const _exhaustCheck: never = action.type
      throw new Error();
  }

}

