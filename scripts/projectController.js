(function(module) {
  var projectController = {};

  projectController.index = function(ctx, next) {
    projectView.index(ctx.projects);
  };

  projectController.loadAll = function(ctx, next) {
    var projectData = function(allProjects) {
      ctx.projects = Project.all;
      next();
    };

    if (Project.all.length) {
      ctx.projects = Project.all;
      next();
    } else {
      Project.fetchProjects(projectData);
    }
  };

  module.projectController = projectController;
})(window);
