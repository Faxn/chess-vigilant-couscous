
define(function(){
    var pieces = {};
    
    
    /**
     * Encoding
     */
    //utility
    pieces.empty=0;
    
    //Sides
    pieces.white = 0;
    pieces.black = 128;

    //Chess Pieces
    pieces.pawn = 1;
    pieces.knight = 2;
    pieces.bishop = 3;
    pieces.rook = 4;
    pieces.king = 5;
    pieces.queen = 6;
    
    pieces.types = [1,2,3,4,5,6];
    values = [];
    for(i in pieces.types){
        values[values.length] = parseInt(i);
        values[values.length] = parseInt(i)+128;
    }
    pieces.values = values;

    /**
     * Moving
     */
    pieces.moves = function(game, index){
        
    }



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
    pieces.toUnicode= function(piece){
        if(piece == 0){
            
        return ' '
        }
        piece = unicode[piece]

        return piece;
    }
    
    return pieces;
});
