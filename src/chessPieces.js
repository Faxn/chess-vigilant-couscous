
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
    
    
    
    function pushIfEmpty(cursor, list){
        if(cursor.getPiece() == Chess.EMPTY){
            list.push(cursor.idx)
            return true
        }
        return false;
    }
    
    function pushIfCapture(cursor, list, piece){
        
        incumbent = cursor.getPiece()
        
        if(incumbent != Chess.EMPTY &&
           (incumbent & Chess.BLACK) != (piece & Chess.BLACK)){
            list.push(cursor.idx)
            return true
        }
        return false;
    }
     
    
    MoveFunctions[Chess.PAWN] = function(board, idx){
         moves = []
         piece = board.board[idx]
         c = board.getCursor(idx)
         
         // Are we moving up or down?
         var vertical = Chess.DIRECTION.UP         
         var thirdRank = 2
         if(piece & Chess.BLACK){ //piece is black
             vertical = Chess.DIRECTION.DOWN
             thirdRank=5
         }
         
         c.seek(vertical)
         clear = pushIfEmpty(c, moves)
         if(clear && c.getRank() == thirdRank){
            c.seek(vertical)
            pushIfEmpty(c, moves)
         }
         c = board.getCursor(idx).seek(vertical).seek(Chess.DIRECTION.RIGHT)
         pushIfCapture(c, moves, piece)
         c = board.getCursor(idx).seek(vertical).seek(Chess.DIRECTION.LEFT)
         pushIfCapture(c, moves, piece)
         
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
