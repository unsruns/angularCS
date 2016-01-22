(function(){
    var app = angular.module('store',[]);
    
    
    app.directive('productPanels',function(){
        return {
            restrict:'E',
            templateUrl:'partials/product-panels.html',
            controller: function()
            {
                 this.tab = 1;
        
                this.selectTab = function(setTab)
                {
                    this.tab = setTab;
                }
                
                this.isSelected = function(checkTab)
                {
                    return this.tab === checkTab;
                }
            },
            controllerAs:'panels'
        }
    });
    
    app.directive('productTitle',function(){
        return {
            restrict:'E',
            templateUrl:'partials/product-title.html'
        }
    });
    
    app.controller('StoreController',function(){
        this.products = gems;
    });
    
     app.controller('PanelController',function(){
        this.tab = 1;
        
        this.selectTab = function(setTab)
        {
            this.tab = setTab;
        }
        
        this.isSelected = function(checkTab)
        {
            return this.tab === checkTab;
        }
    });
    
    app.controller('ReviewController',function(){
        this.review = {};
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };

    });
    
    var gems = [
        {
            name:"Dodecahedron",
            price:2.95,
            description:"lorem  ipsum",
            images:[
                {
                    full:"Hydrangeas.jpg",
                    thumb:"Hydrangeas-thumb.jpg",
                    
                },
                 {
                    full:"Hydrangeas.jpg.jpg",
                    thumb:"Hydrangeas-thumb.jpg",
                    
                },
                 {
                    full:"Hydrangeas.jpg",
                    thumb:"Hydrangeas-thumb.jpg",
                    
                },
            ],
            reviews: [
                { 
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                },
                { 
                    stars: 1,
                    body: "This product sucks",
                    author: "tim@hater.com"
                }
            ],
            canPurchase:true,
            soldOut:false,
        },
        {
            name:"pentagonal Gem",
            price:2.95,
            description:"lorem  ipsum",
            images:[
                {
                    full:"Chrysanthemum.jpg",
                    thumb:"Chrysanthemum-thumb.jpg",
                    
                },
                {
                    full:"Chrysanthemum.jpg",
                    thumb:"Chrysanthemum-thumb.jpg",
                    
                },
                {
                    full:"Chrysanthemum.jpg",
                    thumb:"Chrysanthemum-thumb.jpg",
                    
                }
            ],
            reviews: [
                { 
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                },
                { 
                    stars: 1,
                    body: "This product sucks",
                    author: "tim@hater.com"
                }
            ],
            canPurchase:false,
            soldOut:true,
        },
        {
            name:"Dodecahedron",
            price:2.95,
            description:"lorem  ipsum lorem  ipsum",
            images:[
                {
                    full:"Desert.jpg",
                    thumb:"Desert-thumb.jpg",
                    
                },
                 {
                    full:"Desert.jpg.jpg",
                    thumb:"Desert-thumb.jpg",
                    
                },
                 {
                    full:"Desert.jpg",
                    thumb:"Desert-thumb.jpg",
                    
                },
            ],
            reviews: [
                { 
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                },
                { 
                    stars: 1,
                    body: "This product sucks",
                    author: "tim@hater.com"
                }
            ],
            canPurchase:true,
            soldOut:true,
        }
    ]
    
})();