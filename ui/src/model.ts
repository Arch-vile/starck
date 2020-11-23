export enum View {
  START,
  GAME
}

export interface State {
  currentView: View
}


export const createActions = (setState: any) => {
  return {
    setView: (view: View) => setState({currentView: view})
  };
}