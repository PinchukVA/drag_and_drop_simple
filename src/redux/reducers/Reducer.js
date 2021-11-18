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
  itemsAtCanvas:[
    {x:50,y:50,style:'circle',id:'1-circle'},
    {x:150,y:50,style:'rect',id:'2-rect'},
    {x:250,y:50,style:'rect',id:'3-rect'},
    {x:50,y:150,style:'circle',id:'4-circle'},
    {x:50,y:250,style:'rect',id:'5-rect'},
    {x:50,y:350,style:'circle',id:'6-circle'},
    {x:250,y:150,style:'rect',id:'7-rect'},
    {x:250,y:250,style:'circle',id:'8-circle'}
  ],
  idItemOnDrag:'',
  itemToDrag:{},
  startMoveCoordinate:{
    x:0,
    y:0,
  },
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
    case 'SET_START_MOVE':
      return {...state,startMoveCoordinate: payload}
    default:
      return {...state}
  }
}

