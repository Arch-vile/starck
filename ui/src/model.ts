export interface Player {
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




