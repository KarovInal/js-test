'use strict';

function Clock({ elem }) {
  let $elem = $(elem),
      $hours = $elem.find('.hours'),
      $minutes = $elem.find('.minutes'),
      $seconds = $elem.find('.seconds'),
      $startButton = $elem.find('.start'),
      $stopButton = $elem.find('.stop'),
      interval;
    
  this.start = function() {
    if(!interval) { interval = setInterval(displayTime, 500) };
  };

  this.stop = function() {
    interval = clearInterval(interval);
  };

  function displayTime() {
    let time = new Date;

    $hours.html(time.getHours());
    $minutes.html(time.getMinutes());
    $seconds.html(time.getSeconds());
  }

  $startButton.on('click', this.start)
  $stopButton.on('click', this.stop)
};
