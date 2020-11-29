import React from 'react';
import {Action, createActions, PLAYERS} from "../../model";

interface Props {
  dispatch: (action: Action) => any
}

function PlayerListing(props: Props) {

  const actions = createActions(props.dispatch)

  return (
      <div>Player list
          {PLAYERS.map(player =>
              <div key={player.name}><button
              onClick={actions.togglePlayerTeam(player)}>
                {player.name}
              </button>
              </div>
          )}
      </div>
  );
}

export default PlayerListing;
