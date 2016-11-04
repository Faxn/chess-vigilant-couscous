

define(['base/src/Chess.js', 'base/src/chessBoard.js', 'base/src/chessPieces.js'], function(Chess, chessGame, chessPieces){
    
    var board1
    var board2;
    
    beforeEach(function(){
        board1 = new chessGame();
        board1.init();
        
        
        
        board2 = new chessGame();
        board2.board = [ 0,0,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,0]
    })
    
    
    describe("The Pawn", function(){
        it("should move up when white", function(){
            expect(chessPieces.getMoves(board1, 9)).toContain(17)
        })
        it("should move down when black", function(){
            expect(chessPieces.getMoves(board1, 53)).toContain(45)
        })
        it("should move 2 iff it is on it's starting rank", function(){
            expect(chessPieces.getMoves(board1, 9)).toContain(25)
            expect(chessPieces.getMoves(board1, 53)).toContain(37)
        })
        
        it("should capture diagonaly", function(){
            board2.board[10] = Chess.PAWN
            board2.board[17] = Chess.PAWN ^ Chess.BLACK
            board2.board[19] = Chess.PAWN ^ Chess.BLACK
            
            t = chessPieces.getMoves(board2, 10)
            
            expect(t).toContain(17)
            expect(t).toContain(19)
        })
    });
});
