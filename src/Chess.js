
/**
 * Information and helper functions for chess2 implementation.
 */

define( function(){
    
    
    var Chess = {};
    
    
    
    /**
     * Constants
     */
    //utility
    Chess.EMPTY=0;
    
    //Sides
    Chess.WHITE = 0;
    Chess.BLACK = 128;

    //Pieces
    Chess.PAWN = 1;
    Chess.KNIGHT = 2;
    Chess.BISHOP = 3;
    Chess.ROOK = 4;
    Chess.KING = 5;
    Chess.QUEEN = 6;
    
    Chess.types = [1,2,3,4,5,6];
    values = [];
    for(i in Chess.types){
        values[values.length] = parseInt(i);
        values[values.length] = parseInt(i)+128;
    }
    Chess.values = values;
    
    
    
    Chess.LEFT = 4;
    Chess.UP = 8;
    Chess.RIGHT = 6;
    Chess.DOWN = 2;
    

    /**
     * Rendering
     */
    unicode = {
        1:'\u2659',
        2:'\u2658',
        3:'\u2657',
        4:'\u2656',
        5:'\u2654',
        6:'\u2655',
        129:'\u265f',
        130:'\u265e',
        131:'\u265d',
        132:'\u265c',
        133:'\u265a',
        134:'\u265b',
    }


    offset = 6;
    Chess.toUnicode= function(piece){
        if(piece == 0){
            
        return ' '
        }
        piece = unicode[piece]

        return piece;
    }
    
    
    
    
   
    
    
   
    
    
    return Chess
});
