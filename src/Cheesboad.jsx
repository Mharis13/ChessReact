import React from "react";

const Chessboard = () => {
  const rows = 8;
  const cols = 8;
  const cellSize =100;

  // Crear el tablero
  const board = [];
  let nums = 8; 
  for (let row = 0; row < rows; row++) {
    let char = 'a'.charAt(0);
    const rowCells = [];
    for (let col = 0; col < cols; col++) {
        const isBlack = (row + col) % 2 === 1; //Altern colors
   
   
      rowCells.push(
        <div
          key={`${row}-${col}`}
          style={{
            backgroundColor: isBlack ? "#666666" : "#eeeed2", // White and black
            width: `${cellSize}px`,
            height: `${cellSize}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isBlack ? "#eeeed2" : "#666666", 
            position: "relative",   
            
          }}
          
        >
         {col === 7&& (
            <span style = {{position: "absolute",bottom:"80px",right:"5px"}}>
                {nums}
            </span>
         )}
         {row ===7 && (
            <span style = {{position: "absolute", bottom:"1px",right:"5px"}}>
                {char}
            </span>
         )}
            </div>
        
      );
      if (col !== 8) {
        char = String.fromCharCode(char.charCodeAt(0) + 1);
      }
    }
    nums--;
    board.push(
      <div key={row} style={{ display: "flex" }}>
      
        {rowCells}
      </div>
    );
  }

  return <div style={{ display: "inline-block", border: "2px solid #000" }}>{board}</div>;
};

export default Chessboard;
