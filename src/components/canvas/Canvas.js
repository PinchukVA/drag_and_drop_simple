import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import "./Canvas.scss";
import { setCursorAtCanvas,setIsDown,setDragItem } from '../../redux/actions/Actions'

function Canvas() {
  const canvasRef = useRef();
  const dispatch = useDispatch()
  const appState = useSelector((state) => state.Reducer);
  const { itemsAtCanvas, cursorDown,itemToDrag } = appState;

  let width = '700px'
  let height = '500px'
  let startX = null;
  let startY = null;

  const testArray = [
    {x:50,y:50,style:'circle',id:'1-circle'},
    {x:150,y:50,style:'rect',id:'2-rect'},
    {x:250,y:50,style:'rect',id:'3-rect'},
    {x:50,y:150,style:'circle',id:'4-circle'},
    {x:50,y:250,style:'rect',id:'5-rect'},
    {x:50,y:350,style:'circle',id:'6-circle'},
    {x:250,y:150,style:'rect',id:'7-rect'},
    {x:250,y:250,style:'circle',id:'8-circle'}
  ]

  const handleMouseMove = (e) =>{
    if (!cursorDown) return;

  }

  const handleMouseEnter = (e) =>{
  }

  const handleMouseLeave= (e) =>{
  }

  const handleMouseUp = (e) =>{
    dispatch(setIsDown(false))
  }

  const isItemClick = (x,y,item) => {
    let isTarget = false;
    if (item.style === 'circle'){
      let dx = item.x - x;
      let dy = item.y - y;
      if (dx * dx + dy * dy < 35 * 35) {
        dispatch(setDragItem(item))
        isTarget = true;
      }
    }else {
      if (
        x >= item.x &&
        x <= item.x + 70 &&
        y >= item.y &&
        y <= item.y + 70
      ) {
        dispatch(setDragItem(item))
        isTarget = true;
      }
    }
    return isTarget;
  }

  const handleMouseDown = (e) =>{
    let { offsetX, offsetY } = e.nativeEvent
    startX = parseInt(offsetX - canvasRef.current.clientLeft);
    startY = parseInt(offsetY- canvasRef.current.clientTop);
    const testArrayCoppy = [...testArray]
    for (let i = 0; i < testArrayCoppy.length; i++) {
      const item = testArrayCoppy[i];
      let result = isItemClick(startX,startY,item)
      if (result) {
        dispatch(setIsDown(true))
        break; 
      }
    }
  }

  const drawSquare = (ctx,obj)=>{
    ctx.beginPath();
    ctx.rect(obj.x,obj.y,70,70)
    ctx.closePath();
    ctx.fillStyle = '#2E86C1';
    ctx.strokeStyle= 'grey';
    ctx.fill();
    ctx.stroke();    
  }

  const drawCircle = (ctx,obj)=>{
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, 35, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fillStyle = '#28B463';
    ctx.strokeStyle= 'grey';
    ctx.fill();
    ctx.stroke();
 }

  const drawOneItem = (ctx,obj)=>{
    // line width
    ctx.lineWidth = 1;
    if (obj.id === itemToDrag.id) {
      // set line width for selected item
      ctx.lineWidth = 5
    }
    if (obj.style === 'circle') {
      drawCircle(ctx,obj)
    }else{
      drawSquare(ctx,obj)
    }
  }

  const drawItems = (ctx, itemsArray) => {
    itemsArray.forEach(item => {
      drawOneItem(ctx,item)
    });
  }

  useEffect(()=>{
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, width, height)
    ctx.beginPath()
    drawItems(ctx,testArray)
  },[itemToDrag])

  return (
    <div className="canvas_wrapper">
      <h2>Canvas</h2>
      <canvas 
        className="canvas_item"
        ref={canvasRef} 
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        width={width}
        height={height}
      >

      </canvas>
    </div>
  );
}

export default Canvas;
