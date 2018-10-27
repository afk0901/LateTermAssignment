function isWinner(board, player, round) {
    if(board[0] === player && board[1] === player && board[2] === player ||
       board[3] === player && board[4] === player && board[5] === player ||
       board[6] === player && board[7] === player && board[8] === player ||
       board[0] === player && board[3] === player && board[6] === player ||
       board[1] === player && board[4] === player && board[7] === player ||
       board[2] === player && board[5] === player && board[8] === player ||
       board[0] === player && board[4] === player && board[8] === player ||
       board[2] === player && board[4] === player && board[6] === player
    ) {
        return { "winner": player };
    }
    else if (round == 9) {
        return { "winner": "Draw" };
    }
    else {
        return { "winner": "" };
    }
}

module.exports = {
    isWinner
}
