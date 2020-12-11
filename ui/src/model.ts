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
  new Player('roope'),
  new Player('pekka'),
  new Player('olli'),
  new Player('markus')
]

export interface DataStore {
  gameActions: GameAction[]
}

export enum GameActionTypes {
  TOGGLE_PLAYER_TEAM = 'togglePlayerTeam',
  MARK_GOAL = 'markGoal',
  NEW_GAME = 'newGame',
}

// Epoch millis
type timeStamp = number

export interface GameAction {
  id: number
  timestamp: timeStamp
  type: GameActionTypes

}

abstract class BaseAction  {
 id = newId()
  timestamp = new Date().getTime()
}

export class TogglePlayerTeamGameAction extends BaseAction implements GameAction {
  type = GameActionTypes.TOGGLE_PLAYER_TEAM
  player: Player

  constructor(player: Player) {
    super()
    this.player = player
  }
}

export class MarkGoalGameAction extends BaseAction implements GameAction {
  type = GameActionTypes.MARK_GOAL
  serve: Player
  goal: Player

  constructor(serve: Player, goal: Player) {
    super()
    this.serve = serve
    this.goal = goal
  }
}

export class NewGameGameAction extends BaseAction implements GameAction {
  type = GameActionTypes.NEW_GAME
}


function newId() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER ) ;
}






