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
    
    app.controller('StoreController',['$http',function($http){
        var store = this;
        
        store.products = []; 
        
        $http.get('/data/products.json').success(function(data){
            store.products = data;    
        });
    }]);
    
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
    
    
    
})();