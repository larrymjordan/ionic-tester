describe('Friends', function(){
  var Friends

  beforeEach(module('starter.services'))

  it('should exists before operate', function(){
    inject(function(_Friends_){
      Friends = _Friends_
      expect(Friends).toBeDefined()
    })
  })

  it('should return a list of friends', function(){
    var expectedFriends = [
      { id: 0, name: 'Scruff McGruff' },
      { id: 1, name: 'G.I. Joe' },
      { id: 2, name: 'Miss Frizzle' },
      { id: 3, name: 'Ash Ketchum' }
    ];
    expect(Friends.all()).toEqual(expectedFriends)
  })

  describe('FriendsCtrl', function(){
    var scope, controller

    beforeEach(module('starter.controllers'))

    beforeEach(function(){
      inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        controller = $controller('FriendsCtrl', {'$scope':scope, 'Friends': Friends});
      })
    })

    it('should keep a list of friends in scope', function(){
      var expectedFriends = [
        { id: 0, name: 'Scruff McGruff' },
        { id: 1, name: 'G.I. Joe' },
        { id: 2, name: 'Miss Frizzle' },
        { id: 3, name: 'Ash Ketchum' }
      ];
      expect(scope.friends).toEqual(expectedFriends)
    })
  })
});