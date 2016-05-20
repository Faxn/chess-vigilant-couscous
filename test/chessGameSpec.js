
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
    
    
    var dir = chessGame.Direction;
    it('shold across the board', function(){
        
        p = game.seek(27, dir.up)
        expect(p).not.toBe(undefined);
        expect(p).toBe(35);
        
        p = game.seek(27, dir.down);
        expect(p).toBe(19)
        
        p = game.seek(27, dir.left);
        expect(p).toBe(26)
        
        p = game.seek(27, dir.right);
        expect(p).toBe(28)
        
        
    });
    
    it('should return -1 when you try to go off the edge.', function(){
        
        q = game.seek(63, dir.up)
        expect(q).toBe(-1);
        
        q = game.seek(63, dir.right)
        expect(q).toBe(-1);
        
        q = game.seek(0, dir.down)
        expect(q).toBe(-1);
        
        q = game.seek(0, dir.left)
        expect(q).toBe(-1);
        
        q = game.seek(3, dir.down)
        expect(q).toBe(-1);
        
        q = game.seek(32, dir.left)
        expect(q).toBe(-1);
        
        
    });
    
});
});
