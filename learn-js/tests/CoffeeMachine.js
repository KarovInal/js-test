function Machine() {
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  }

  this.disable = function() {
    self._enabled = false;
  }
}

function CoffeeMachine(power, capacity) {
  Machine.call(this);

  var WATER_HEAT_CAPACITY = 4200;

  var waterAmount = 0;
  var timerId;
  var self = this;

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.addWater = function(water) {
    this.setWaterAmount(water + waterAmount);
  }

  this.getWaterAmount = function() {
    return waterAmount;
  };

  this.getPower = function() {
    return power;
  }

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  onReady = function() {
    console.log( 'Кофе готово!' );
  }

  this.setOnReady = function(func) {
    func = func.bind(this);
    onReady = func;
  }

  this.isRunning = function() {
    return !!timerId;
  }

  this.run = function() {
    if(!this._enabled) 
      throw new Error("Кофеварка выключена");

    timerId = setTimeout(function() {
      onReady()
    }, getBoilTime());
  }

  var parentDisable = this.disable
  this.disable = function() {
    parentDisable();
    clearTimeout(timerId);
  }

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();