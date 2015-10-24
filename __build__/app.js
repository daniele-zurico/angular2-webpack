webpackJsonp([2,0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(213);


/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	var mock_heroes_1 = __webpack_require__(212);
	var HeroesService = (function () {
	    function HeroesService() {
	    }
	    HeroesService.prototype.getHeroes = function () {
	        return Promise.resolve(mock_heroes_1.HEROES);
	    };
	    return HeroesService;
	})();
	exports.HeroesService = HeroesService;


/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(48);
	var hero_service_1 = __webpack_require__(149);
	var AppComponent = (function () {
	    function AppComponent(_heroService) {
	        var _this = this;
	        this._heroService = _heroService;
	        this.hero = {
	            id: 1,
	            name: 'Windstorm'
	        };
	        this.heroes = [];
	        this.selectedHero = {
	            id: 16,
	            name: "RubberMan"
	        };
	        this.test = {
	            id: 16,
	            name: "RubberMan"
	        };
	        this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
	    }
	    AppComponent.prototype.onSelect = function (hero) {
	        this.selectedHero = hero;
	    };
	    AppComponent.prototype.getSelectedClass = function (hero) {
	        return { 'selected': hero === this.selectedHero };
	    };
	    AppComponent = __decorate([
	        angular2_1.Component({
	            selector: 'my-app',
	            templateUrl: './modules/heroes/tpl/hero.html',
	            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
	            styleUrls: ['./modules/heroes/tpl/hero.css'],
	        }), 
	        __metadata('design:paramtypes', [hero_service_1.HeroesService])
	    ], AppComponent);
	    return AppComponent;
	})();
	exports.AppComponent = AppComponent;


/***/ },

/***/ 212:
/***/ function(module, exports) {

	exports.HEROES = [
	    { "id": 11, "name": "Mr. Nice" },
	    { "id": 12, "name": "Narco" },
	    { "id": 13, "name": "Bombasto" },
	    { "id": 14, "name": "Celeritas" },
	    { "id": 15, "name": "Magneta" },
	    { "id": 16, "name": "RubberMan" },
	    { "id": 17, "name": "Dynama" },
	    { "id": 18, "name": "Dr IQ" },
	    { "id": 19, "name": "Magma" },
	    { "id": 20, "name": "Tornado" }
	];


/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	var angular2_1 = __webpack_require__(48);
	var hero_service_1 = __webpack_require__(149);
	var hero_component_1 = __webpack_require__(211);
	angular2_1.bootstrap(hero_component_1.AppComponent, [hero_service_1.HeroesService]);


/***/ }

});
//# sourceMappingURL=app.js.map