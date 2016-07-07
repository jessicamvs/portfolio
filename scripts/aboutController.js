(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    console.log('what');
    $('#aboutMe').show().siblings().hide();

    myRepos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
