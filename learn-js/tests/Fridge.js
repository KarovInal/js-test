function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];
    var _self = this;
    
    function checkFood(foods) {
        if(power/100 >= (foods.length + food.length)) 
            return true;
        else
            return false;
    }

    this.addFood = function() {
        if(!this._enabled)
            throw new Error('Холодильник выключен!');
        
        if(checkFood(arguments)) {
            var arguments = [].slice.call(arguments);
            food = food.concat(arguments);
        } else {
            throw new Error('Холодильник полон!');
        }
        
    }

    this.getFood = function() {
        return food.slice();
    }

    this.filterFood = function(func) {
        return food.filter(func);
    }

    this.removeFood = function(item) {
        var idx = food.indexOf(item);
        if (idx != -1) food.splice(idx, 1);
    }

    var parrentDisable = this.disable;
    this.disable = function() {
        if(food.length)
            throw new Error('В холодильнике есть продукты!')
        parrentDisable();
    }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable();