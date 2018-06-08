/* -*- mode: rjsx -*- */
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square" onClick={() => this.props.handleClick()}>
//               {this.props.value}
//             </button>
//         );
//     }
// }
function Square(props) {
    return <button className="square" onClick={props.handleClick}>{props.value}</button>;
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={this.props.squares[i]} handleClick={() => this.props.handleClick(i)} key={i}/>;
    }

    render() {
        let i = 0;
        const rows = Array(3).fill(null).map((_, row) => {
            const cols = Array(3).fill(null).map(() => this.renderSquare(i++));
            return <div className="board-row" key={row}>{cols}</div>;
        });
        return <div>{rows}</div>;
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }

    getChar() {
        return this.state.xIsNext ? 'X' : 'O';
    }

    handleClick(i) {
        const squares = this.state.history[this.state.history.length - 1].squares.slice();
        if (squares[i] || calculateWinner(squares) || this.state.stepNumber < this.state.history.length - 1) {
            return;
        }
        squares[i] = this.getChar();
        this.setState({
            history: this.state.history.concat({squares}),
            xIsNext: !this.state.xIsNext,
            stepNumber: this.state.history.length,
        });
    }

    jumpTo(move) {
        this.setState({
            stepNumber: move,
            xIsNext: (move % 2) === 0
        });
    }

    render() {
        const current = this.state.history[this.state.stepNumber].squares;
        const winner = calculateWinner(current);
        let status = 'Next player: ' + this.getChar();
        if (winner) {
            status = "Winner: " + winner;
        }
        const moves = this.state.history.map((state, move) => {
            const desc = move ?
                  'Go to move #' + move :
                  'Go to game start';
            return <li key={move}><button onClick={() => this.jumpTo(move)}>{desc}</button></li>;
        });

        return (
            <div className="game">
              <div className="game-board">
                <Board squares={current} handleClick={(i) => this.handleClick(i)}/>
              </div>
              <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
              </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
