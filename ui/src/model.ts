export class Player {
  id: number
  name: string

  constructor(name: string) {
    this.id = Math.random()
    this.name = name
  }
}

export const PLAYERS: Player[] = [
  new Player('mikko'),
  new Player('ida'),
  new Player('roope')
]

export interface DataStore {
  gameActions: GameAction[]
}

export enum GameActionTypes {
  TOGGLE_PLAYER_TEAM = 'togglePlayerTeam',
  MARK_GOAL = 'markGoal',
}

// Epoch millis
type timeStamp = number

export interface GameAction {
  timestamp: timeStamp
  type: GameActionTypes
}

export class TogglePlayerTeamGameAction implements GameAction {
  timestamp = new Date().getTime()
  type = GameActionTypes.TOGGLE_PLAYER_TEAM
  player: Player

  constructor(player: Player) {
    this.player = player
  }
}

export class MarkGoalGameAction implements GameAction {
  timestamp = new Date().getTime()
  type = GameActionTypes.MARK_GOAL
  serve: Player
  goal: Player

  constructor(serve: Player, goal: Player) {
    this.serve = serve
    this.goal = goal
  }
}






