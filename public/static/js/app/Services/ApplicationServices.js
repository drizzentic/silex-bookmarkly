//service concernant la gestion d'un utilisateur

var ApplicationServices = angular.module("ApplicationServices",[]);

ApplicationServices.factory("UserService",['$http','$window',
    function($http,$window){
        return {
            getCurrentUser:function(success,error){
                $http.get("/json/user").success(success).error(error||function(){});
            },
            isLogged : function(){},
            register : function(user,success,error){
                $http.post("/json/register",user).success(success).error(error);
            },
            login : function(user,success,error){
                $http.post("/json/login",user).success(success).error(error);
            },
            logout:function(success,error){
                $http.post("/json/logout").success(success).error(error);
            }
        };
    }
]);

ApplicationServices.factory("BookmarkService",['$http',function($http){
    return {
        get : function(success,error){
            $http.get("/json/bookmark").success(success).error(error);
        },
        post : function(bookmark,success,error){
            $http.put("/json/bookmark",bookmark).success(success).error(error);
        },
        put : function(bookmark,success,error){
            $http.post("/json/bookmark",bookmark).success(success).error(error);
        },
        "delete" : function(bookmark){
            $http['delete']("/json/bookmark",bookmark).success(success).error(error);

        }
    };
}]);

ApplicationServices.factory("TagService",["$http",function($http){
    return {

    };
}]);