
// 56 57 58 59 60 61 62 63
// 48 49 50 51 52 53 54 55
// 40 41 42 43 44 45 46 47
// 32 33 34 35 36 37 38 39
// 24 25 26 27 28 29 30 31 
// 16 17 18 19 20 21 22 23
// 08 09 10 11 12 13 14 15
// 00 01 02 03 04 05 06 07

define(['./Chess.js'], function(Chess) {

    
    var chessBoard = function () {
       this.board = [ 0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0]    
    };
    
    
    chessBoard.Direction = {
        left:4,
        up:8,
        right:6,
        down:2
    }
    
    /** Set the board to the traditional chess starting position.
     */
    back = [4,2,3,6,5,3,2,4]
    chessBoard.prototype.init = function(){
           for(i=0; i<8; i++){
              this.board[i+48]=129; //black pawns
              this.board[i+8]=1; //white pawns
              this.board[i+56] = back[i]+128; //black rank
              this.board[i] = back[i];        //white rank
           }
    }
    
    chessBoard.prototype.getRank = function(idx){
       return idx/8;
    }

    chessBoard.prototype.getFile = function(idx){
       return idx % 8;
    }
    
    /**
     * returns the unicode glyph for the piece for fancy display
     */
    chessBoard.prototype.getDisplay = function(idx){
         var p = this.board[idx];
         var g = Chess.toUnicode(p);
         //console.log("Rendering "+p+" as "+g)
         return g
     }
    
    
    
    /**
     * Finds the square in direction from the specified square.
     * returns the index of that square.
     */
    chessBoard.prototype.seek = function(idx, dir){
        if (Array.isArray(dir)) {
            i = idx;
            for( d in dir ){
                i = this.seek(i, d);
            }
            return i;
        } else if(dir == chessBoard.Direction.left){
            if (idx % 8 == 0) return -1;
            return idx - 1;
        } else if(dir == chessBoard.Direction.up){
            if (idx / 8 > 7) return -1; //> because js numbers are all floats.
            return idx + 8;
        } else if(dir == chessBoard.Direction.right){
            if (idx % 8 == 7) return -1;
            return idx + 1;
        } else if(dir == chessBoard.Direction.down){
            if (idx / 8 < 1) return -1;
            return idx - 8;
        } else {
            console.log("Can't seek "+dir);
            var e = TypeError("Tried to seek in a direction that doesn't exist.")
            e.dir =dir;
            throw e;
        }
        throw Error("Inmcomplete Implementation, this should be unreachable.");
    }

    
    return chessBoard;
});



