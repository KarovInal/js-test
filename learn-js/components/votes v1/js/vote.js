'use strict';

function Vote({ elem }) {
  let $up = elem.find('.up'),
      $down = elem.find('.down'),
      $vote = elem.find('.vote'),
      vote = 0;
  
  function up() {
    ++vote;
    render();
  }

  function down() {
    --vote;
    render();
  }

  function render() {
    $vote.html(vote);
  };

  this.setVote = function(userVote) {
    vote = userVote;
    render()
  }

  $up.on('click', up);
  $down.on('click', down);
  
};