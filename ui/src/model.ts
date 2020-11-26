import produce from 'immer'

export enum View {
  START,
  GAME
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

export interface Action {
  type: string
}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'NewGame':
      {
        return produce(state, (draft: State) => {
          draft.dataStore.games.push({ homeTeam: [{name: 'mikko'}], points: []})
          draft.uiStore.currentView = View.GAME
        });
      }
    default:
      throw new Error();
  }
}

