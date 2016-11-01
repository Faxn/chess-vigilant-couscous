

define(['base/src/chessBoard.js', 'base/src/chessPieces.js'], function(chessGame, chessPieces){
    
    
    var board1 = new chessGame();
    board1.init();
    
    
    describe("The Pawn", function(){
        it("should move up when white", function(){
            expect(chessPieces.getMoves(board1, 9)).toContain(17)
        })
    });
});
