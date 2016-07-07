(function(module) {
  var statsController = {};

  statsController.index = function() {
    $('#stats').show().siblings().hide();
  };

  module.statsController = statsController;
})(window);
