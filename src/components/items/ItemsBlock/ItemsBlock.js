import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import './ItemsBlock.scss';

import { ItemSingle } from '../../index';

function ItemsBlock() {
  const appState = useSelector((state) => state.Reducer);
  const { startItems } = appState;
  const handleDragStart = e =>{
    console.log(e)

  }
  const renderItems = (arr) =>{
    const result = arr.map((item) => (
      < ItemSingle
        key={item.id}
        style={item.style}
        dragStart={handleDragStart}
      />
    ));

    return result;
  }

  return (
    <div className='items__wrapper'>
      <h2>Items</h2>
      <div className='items__container'>
        {renderItems(startItems)}
      </div>
    </div>
  );
}

export default ItemsBlock;
