
define(['./Chess.js'], function(Chess) {
    var pieces = {};
    
    

    /**
     * Moving
     */
    pieces.moves = function(game, index){
        
    }



   
    
    /**
     * psuedolegal Move calculation functions
     */
    MoveFunctions = [];
    
    
     
    
    MoveFunctions[Chess.PAWN] = function(board, idx){
         moves = []
         piece = board.board[idx]
         if(piece && Chess.BLACK){ //piece is black
             return [17]
         }else{
             
         }
         return moves
    }
    
    /**
     * Public get moves function
     */
    pieces.getMoves = function (board, idx){
        piece = board.board[idx] % Chess.BLACK
        return MoveFunctions[piece](board, idx)
    }
    
    
    
    
    return pieces;
});
