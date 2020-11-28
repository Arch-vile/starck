import React from 'react';
import {Action, createActions} from "../../model";

interface Props {
  dispatch: (action: Action) => any
}

const PLAYER_NAMES: string[] = [
  'mikko', 'ida', 'roope'
]

function PlayerListing(props: Props) {

  const actions = createActions(props.dispatch)

  return (
      <div>Player list
          {PLAYER_NAMES.map(player =>
              <div key={player}><button>
                {player}
              </button>
              </div>
          )}
      </div>
  );
}

export default PlayerListing;
