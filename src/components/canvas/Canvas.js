import React, { useRef, useEffect } from "react";
import "./Canvas.scss";

function Canvas() {
  const canvasRef = useRef(null);
  let width = '700px'
  let height = '500px'
  const handleMouseMove = (e) =>{
    let { offsetX, offsetY } = e.nativeEvent
    console.log('MoseMove-offsetX-offsetY',offsetX,offsetY)
  }
  const handleMouseEnter = (e) =>{
    console.log('MoseMove-handleMouseEnter')
  }
  const handleMouseLeave= (e) =>{
    console.log('MoseMove-handleMouseLeave')
  }

  const drawSquare = (ctx,arr)=>{

    ctx.fillStyle = '#2E86C1';
    ctx.strokeStyle= '#616A6B';
    arr.forEach(e => {
      ctx.fillRect(e.x, e.y, 70, 70);
      ctx.strokeRect(e.x, e.y, 70,70)
      ctx.stroke();
    })
    
    console.log('drawSquare',ctx)
  }

  useEffect(()=>{
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, width, height)
    ctx.beginPath()
    // drawSquare(ctx,checkArray) 

  },[])

  return (
    <div className="canvas_wrapper">
      <h2>Canvas</h2>
      <canvas 
        className="canvas_item"
        ref={canvasRef} 
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        width={width}
        height={height}
      >

      </canvas>
    </div>
  );
}

export default Canvas;
