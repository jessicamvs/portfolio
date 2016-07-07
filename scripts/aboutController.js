(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#aboutMe').show().siblings().hide();

    myRepos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
