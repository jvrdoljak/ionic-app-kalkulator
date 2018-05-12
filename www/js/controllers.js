angular.module('starter.controllers', [])

.controller('CalcCtrl', function($scope, $window) {
    $scope.izlaz = '';
    
    $scope.znamenka = function(broj) {
        $scope.izlaz = $scope.izlaz + broj;
        //validacija radi prve nule
    };
    
    $scope.ocisti = function() {
        $scope.izlaz = '';
        $window.localStorage['operand1'] = '';
        $window.localStorage['operator'] = '';
    };
    
    $scope.operator = function(op) {
        
        switch(op) {
            case 'x2':
                $scope.izlaz = Math.pow($scope.izlaz, 2);
                $window.localStorage['operator'] = null;
                break;
            case 'korijen':
                $scope.izlaz = Math.sqrt($scope.izlaz);
                $window.localStorage['operator'] = null;
                break;
            case '+/-':
                $scope.izlaz = (-1)*$scope.izlaz;
                $window.localStorage['operator'] = null;
                break;
            default:
                $window.localStorage['operand1'] = $scope.izlaz;
                $window.localStorage['operator'] = op;
                $scope.izlaz = '';
        }
    };
    
    $scope.decimalna = function(tocka) {
        
        switch(tocka) {
            case '.':
                $scope.izlaz = $scope.izlaz + '.';
                $window.localStorage['decimalna'] = null;
                break;
            default:
                $window.localStorage['operand1'] = $scope.izlaz;
                $window.localStorage['operator'] = op;
                $scope.izlaz = '';
        }
    };
    
    
    $scope.brisi = function() {
         var str =  String($scope.izlaz);
         console.log(str);
         str = str.substring(0, str.length - 1);
         $scope.izlaz = str;
    };
    

 
     $scope.rezultat = function() {
        var x = parseFloat($window.localStorage['operand1']);
        var y = parseFloat($scope.izlaz);
        var z = 0;
        
        switch($window.localStorage['operator']) {
            case '+':
                z = x+y; 
                break;
            case '-':
                z = x-y;
                break;
            case '*':
                z = x*y;
                break;
            case '/':
                z = x/y;
                break;
            // case 'x2':
            //     z = Math.pow(x, 2);
            //     break;
            // case 'korijen':
            //     z = Math.sqrt(x);
            //     break;
            // case '+/-':
            //     z = (-1)*x;
            //     break;
            default:
                $scope.izlaz = 'greška';
        }
 
        $scope.izlaz = z;
    };
    
    
    
    //$scope.izlaz = $window.localStorage['op1']; 
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
