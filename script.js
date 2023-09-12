var board = null;
var game = new Chess();

function onDragStart(source, piece, position, orientation) {
    // Highlight valid moves for the dragged piece
    var moves = game.legalMoves({ square: source });
    moves.forEach(function (move) {
        board.highlightSquare(move.to);
    });
}

function onDrop(source, target) {
    // Attempt to make the move
    var move = game.move({
        from: source,
        to: target,
    });

    // If the move is valid, update the board
    if (move !== null) {
        board.position(game.fen());
    }
}

var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
}

board = ChessBoard('board', config);
