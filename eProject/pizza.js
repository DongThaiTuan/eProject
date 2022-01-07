//khoi tao đường liên kết tới trang 
var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "menu_body.html"
        })
        .when("/Pizza", {
            templateUrl: "pizza.html"
        })
        .when("/Dessert", {
            templateUrl: "dessert.html"
        })
        .when("/Bread", {
            templateUrl: "bread.html"
        })

        .when("/Cart", {
            templateUrl: "cart.html"
        })
        .when("/Bevenger", {
            templateUrl: "bevenger.html"
        });
});


// Start: JSON Code / truyền data từ JSON file
app.run(function ($rootScope, $http) {

    $http.get("menu.json").then(function (response) {
        $rootScope.menu = response.data.menu;
        console.log($rootScope.menu);
    });
    $http.get("pizza.json").then(function (response) {
        $rootScope.pizza = response.data.pizza;
        console.log($rootScope.pizza);
    });

    $http.get("bevenger.json").then(function (response) {
        $rootScope.bevenger = response.data.bevenger;
        console.log($rootScope.bevenger);
    });

    $http.get("dessert.json").then(function (response) {
        $rootScope.dessert = response.data.dessert;
        console.log($rootScope.dessert);
    });

    $http.get("bread.json").then(function (response) {
        $rootScope.bread = response.data.bread;
        console.log($rootScope.bread);
    });

    //tạo chức năng tìm kiếm tên menu
    app.controller('myCTR', function ($scope) {
        $scope.name = reponse.data.menu;
    });

    $rootScope.cart = [];
    $rootScope.total = 0;
});


//khởi tạo chức năng thêm món hàng vào trang order
app.controller("myMenu", function ($scope, $rootScope) {
    $scope.addCart = function (id) {
        var index = $rootScope.menu.findIndex((element) => element.id == id);
        var item = $rootScope.menu[index];

        for (var i = 0; i < $rootScope.cart.length; ++i) {
            if ($rootScope.cart[i].id == id) {
                $rootScope.cart[i].qty++;
                $rootScope.total += $rootScope.cart[i].price
                return;
            }
        }

        var newEle = {
            "id": id,
            "name": item.name,
            "price": item.price,
            "qty": 1
        }
        $rootScope.total += item.price
        $rootScope.cart.push(newEle);
        console.log($rootScope.cart)
    }

    $scope.addCart2 = function (id) {
        var index = $rootScope.pizza.findIndex((element) => element.id == id);
        var item = $rootScope.pizza[index];

        for (var i = 0; i < $rootScope.cart.length; ++i) {
            if ($rootScope.cart[i].id == id) {
                $rootScope.cart[i].qty++;
                $rootScope.total += $rootScope.cart[i].price
                return;
            }
        }

        var newEle2 = {
            "id": id,
            "name": item.name,
            "price": item.price,
            "qty": 1
        }
        $rootScope.total += item.price
        $rootScope.cart.push(newEle2);
        console.log($rootScope.cart)
    }

    $scope.addCart3 = function (id) {
        var index = $rootScope.bevenger.findIndex((element) => element.id == id);
        var item = $rootScope.bevenger[index];

        for (var i = 0; i < $rootScope.cart.length; ++i) {
            if ($rootScope.cart[i].id == id) {
                $rootScope.cart[i].qty++;
                $rootScope.total += $rootScope.cart[i].price
                return;
            }
        }

        var newEle3 = {
            "id": id,
            "name": item.name,
            "price": item.price,
            "qty": 1
        }
        $rootScope.total += item.price
        $rootScope.cart.push(newEle3);
        console.log($rootScope.cart)
    }

    $scope.addCart4 = function (id) {
        var index = $rootScope.dessert.findIndex((element) => element.id == id);
        var item = $rootScope.dessert[index];

        for (var i = 0; i < $rootScope.cart.length; ++i) {
            if ($rootScope.cart[i].id == id) {
                $rootScope.cart[i].qty++;
                $rootScope.total += $rootScope.cart[i].price
                return;
            }
        }

        var newEle4 = {
            "id": id,
            "name": item.name,
            "price": item.price,
            "qty": 1
        }
        $rootScope.total += item.price
        $rootScope.cart.push(newEle4);
        console.log($rootScope.cart)
    }

    $scope.addCart4 = function (id) {
        var index = $rootScope.bread.findIndex((element) => element.id == id);
        var item = $rootScope.bread[index];

        for (var i = 0; i < $rootScope.cart.length; ++i) {
            if ($rootScope.cart[i].id == id) {
                $rootScope.cart[i].qty++;
                $rootScope.total += $rootScope.cart[i].price
                return;
            }
        }

        var newEle4 = {
            "id": id,
            "name": item.name,
            "price": item.price,
            "qty": 1
        }
        $rootScope.total += item.price
        $rootScope.cart.push(newEle4);
        console.log($rootScope.cart)
    }


});

//khoi tạo nút deleter
app.controller("myCTR", function ($scope, $rootScope) {

    $scope.remove = function (index) {
        if (confirm('See You Later?')) {
            $rootScope.total -= $rootScope.cart[index].price * $rootScope.cart[index].qty;
            $scope.cart.splice(index, 1)
        }
    }
    //khoi tạo nút Buy mua hàng
    $scope.Buy = function () {
        if ($rootScope.cart.length > 0) {
            $scope.isShow = true;
        }
        else {
            $scope.isShow = false;
        }
    }

    $scope.thank = function () {
        alert("Tuck In!");
        $scope.isShow = false;
        $rootScope.total = 0
        $rootScope.cart = [];
    }
});
//khởi tạo dữ liệu trang about us
document.getElementById("form-contact").onsubmit = function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var mail = document.getElementById("mail").value.trim();
    var messege = document.getElementById("messege").value.trim();

    var a = [];
    a.push(`Your Information !!!`);
    a.push(`................`);
    a.push(`Your Name: ${name}`);
    a.push(`Email: ${mail}`);
    a.push(`Messenge: ${messege}`)
    a.push(`................`);
    a.push(`Thanks for your respond. We will reply you soon.`);
    alert(a.join("\n"));
}
