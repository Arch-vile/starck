import produce from 'immer'

export enum View {
  START,
  GAME,
  HOME_TEAM_PLAYERS
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
  homeTeam: Player[]
  points: Point[]
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
  VIEW_HOMETEAM_PLAYERS = "viewHomeTeamPlayers"
}

export interface Action {
  type: ActionTypes
}

// export function createActions(dispatch: any) {
//   return {
//     newGame: () => dispatch({type: ActionTypes.NEW_GAME})
//   }
// }

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.NEW_GAME: {
      return produce(state, (draft: State) => {
        draft.dataStore.games.push({homeTeam: [{name: 'mikko'}], points: []})
        draft.uiStore.currentView = View.GAME
      });
    }
    case ActionTypes.VIEW_HOMETEAM_PLAYERS:
      return produce(state, (draft: State) => {
        draft.uiStore.currentView = View.HOME_TEAM_PLAYERS
      })
    default:
      // eslint-disable-next-line
      const _exhaustCheck: never = action.type
      throw new Error();
  }

}

