export const setCursorAtCanvas = data => {
  return {
    type: 'SET_CURSOR_AT_CANVAS',
    payload: data
  }
}
export const setDragItem = data => {
  return {
    type: 'SET_DRAG_ITEM',
    payload: data
  }
}
export const setIsDown = data => {
  return {
    type: 'SET_IS_DOWN',
    payload: data
  }
}
export const setItemsAtCanvas = data => {
  return {
    type: 'SET_ITEMS_AT_CANVAS',
    payload: data
  }
}
export const setStartMove = data => {
  return {
    type: 'SET_START_MOVE',
    payload: data
  }
}
export const deleteItem = () => {
  return {
    type: 'DELETE_ITEM'
  }
}