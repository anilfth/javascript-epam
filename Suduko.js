import React from 'react';

const BOARD_SIZE = 9;

class SudokuBoard extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the board with some default values
    this.state = {
      board: [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
      ]
    };
  }

  render() {
    return (
      <div className="sudoku-board">
        {this.state.board.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cellValue, cellIndex) => (
              <div key={cellIndex} className="sudoku-cell">
                {cellValue !== 0 ? cellValue : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default SudokuBoard;
