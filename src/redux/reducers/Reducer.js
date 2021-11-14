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
  cursorAtCanvas:'',
};

export const Reducer = (state = initialState, action) => {
  console.log('Reducer-initialState', initialState)
  const {payload} = action;
  switch(action.type){
    default:
      return {...state}
  }
}

