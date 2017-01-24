app.controller("aula8",function($scope){
    $scope.email= novoLogin();
});
    
    function novoLogin(){
        return{
            email="";
            senha="";
        }
    }