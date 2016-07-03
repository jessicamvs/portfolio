(function(module) {
  var projectController = {};

  Project.fetchProjects(projectView.renderIndex);

  projectController.index = function() {
    $('.tab-content').hide();
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
