(function(module) {
  var projectController = {};

  Project.fetchProjects(projectView.renderIndex);

  projectController.index = function() {
    $('#projects').show().siblings().hide();
  };

  module.projectController = projectController;
})(window);
