
define(['base/src/chessBoard.js'], function(chessGame){
describe('The chess game class', function(){

    
    
    
    
    
    var game;
    it('should construct', function(){
        expect(typeof chessGame).toBe('function');
        game = new chessGame();
        expect(game).not.toBe(undefined);
    });
    
    it('should fill a starting board', function(){
        game.init();
        expect(game.board[8]).toBe(1);
    });
    
});
});
