(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.tab-content').hide();
    $('#aboutMe').show();
  };

  module.aboutController = aboutController;
})(window);
