
define(['base/src/chessBoard.js'], function(chessGame){
describe('The chess Board class', function(){

    
    
    
    
    
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
    
    it('should provide a cursor', function(){
        c = game.getCursor(0);
        expect(c).not.toBe(undefined)
        
        it("should know it's rank and file", function(){
            expect(c.getRank()).toBe(0)
            expect(c.getFile()).toBe(0)
        })
        
        it("Should move when it seeks", function(){
            c.seek(8).seek(6)
            expect(c.getRank()).toBe(1)
            expect(c.getFile()).toBe(1)
            expect(c.idx).toBe(9)
        })
        
        it("17 should be in rank 2", function(){
            c2 = game.getCursor(17)
            expect(c2.getRank()).toBe(2)
        })
    })
    
});
});
