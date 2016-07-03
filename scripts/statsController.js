(function(module) {
  var statsController = {};

  statsController.index = function() {
    $('.tab-content').hide();
    $('#stats').show();
  };

  module.statsController = statsController;
})(window);
