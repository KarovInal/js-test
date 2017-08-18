'use strict';

function Vote({ elem }) {
  let $up = elem.find('.up'),
      $down = elem.find('.down');

  this._$vote = elem.find('.vote');
  this._vote = 0;

  $up.on('click', this._up.bind(this))
  $down.on('click', this._down.bind(this))
};

Vote.prototype._up = function() {
  ++this._vote;
  this._render();
}

Vote.prototype._down = function() {
  --this._vote;
  this._render();
}

Vote.prototype._render = function() {
  this._$vote.html(this._vote);
};

Vote.prototype._setVote = function(userVote) {
  this._vote = userVote;
  this._render();
};