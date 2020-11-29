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

enum GameActionTypes {
  TOGGLE_PLAYER_TEAM = 'togglePlayerTeam'
}

// Epoch millis
type timeStamp = number

interface GameAction {
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


export interface DataStore {
  gameActions: GameAction[]
}




