function CoffeeMachine(power, capacity) {

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

  this.run = function() {
    timerId = setTimeout(onReady, getBoilTime());
  }

  this.stop = function() {
    clearTimeout(timerId);
  }

}

var coffeeMachine = new CoffeeMachine(5000, 1000);

coffeeMachine.setOnReady(function() {
  var amount = this.getWaterAmount();
  console.log( 'Готов кофе: ' + amount + 'мл' );
})

coffeeMachine.setWaterAmount(200);

coffeeMachine.run();