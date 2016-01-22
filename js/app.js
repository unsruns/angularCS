(function(){
    var app = angular.module('store',[]);
    app.controller('StoreController',function(){
        this.products = gems;
    });
    
    var gems = [
        {
            name:"Dodecahedron",
            price:2.95,
            description:"lorem  ipsum",
            canPurchase:true,
            soldOut:false,
        },
        {
            name:"pentagonal Gem",
            price:2.95,
            description:"lorem  ipsum",
            canPurchase:false,
            soldOut:true,
        },
        {
            name:"Dodecahedron",
            price:2.95,
            description:"lorem  ipsum lorem  ipsum",
            canPurchase:true,
            soldOut:true,
        }
    ]
    
})();