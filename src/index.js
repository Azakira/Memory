import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: this.initArray(),
            nbTurn: 0,
        }
        
    };
    initArray() {
        //Create a pair each square
        let squares = Array(16)
        for(var i=0; i<squares.length; i++){
            squares[i] = Math.floor(i/2)
        }
        return squares.sort(() => Math.random() - 0.5);
    }
    handleClick(i){
        return;
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
    render() {
        return (
        <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
            </div>
            <div className="board-row">
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
            </div>
            <div className="board-row">
                {this.renderSquare(8)}
                {this.renderSquare(9)}
                {this.renderSquare(10)}
                {this.renderSquare(11)}
            </div>
            <div className="board-row">
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
                {this.renderSquare(15)}
            </div>
        </div>
        );
    }
}

ReactDOM.render(<Board />, document.getElementById("root"));