page('/', homeController.index);

page('/projects',
  projectController.loadAll,
  projectController.index);

page('/projects/:title',
  projectController.loadByTitle,
  projectController.index);

page('/about', aboutController.index);

page('/stats', statsController.index);

page('*', function(){
  $('#404').show().siblings().hide();
});

page();
