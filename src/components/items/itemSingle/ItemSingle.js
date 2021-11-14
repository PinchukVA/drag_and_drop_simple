import React from "react";
import './ItemSingle.scss';


function ItemSingle({style, dragStart}) {

  return (
    <div  draggable onDragStart={dragStart} className={style === 'circle' ? 'item__circle' : 'item__square'} />
  );
}

export default ItemSingle;