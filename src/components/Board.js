import React from "react";
import Square from "./Square";

//Code from tutorial
class Board extends React.Component {
  renderSquare(i) {
    return (
      <div className="square">
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          />
          </div>
          );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
