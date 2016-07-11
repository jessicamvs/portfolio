(function(module) {
  var projectController = {};

  projectController.index = function(ctx, next) {
    projectView.index(ctx.projects);
  };

  projectController.loadByTitle = function(ctx, next) {
    console.log(ctx);
    console.log(ctx.params.title);
    var titleData = function(projectWithThisTitle) {
      ctx.projects = projectWithThisTitle;
      console.log(ctx.projects);
      next();
    };

    Project.findWhere('title', ctx.params.title, titleData);
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
