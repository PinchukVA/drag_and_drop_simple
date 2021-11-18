const items = [
  {
      id: '1c',
      style: 'circle',
  },
  {
      id: '2s',
      style: 'square',
  }
]

const initialState = {
  startItems:items,
  itemsAtCanvas:[],
  idItemOnDrag:'',
  itemToDrag:{},
  cursorAtCanvas:false,
  cursorAtItem:false,
  cursorDown:false,
};

export const Reducer = (state = initialState, action) => {
  console.log('Reducer-initialState', initialState)
  const {payload} = action;
  switch(action.type){
    case 'SET_CURSOR_AT_CANVAS':
      return {...state,cursorAtCanvas: payload}
    case 'SET_DRAG_ITEM':
      return {...state,itemToDrag: payload}
    case 'SET_IS_DOWN':
      return {...state,cursorDown: payload}
    case 'SET_ITEMS_AT_CANVAS':
      return {...state,itemsAtCanvas: payload}
    default:
      return {...state}
  }
}

