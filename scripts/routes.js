page('/', homeController.index);
page('/projects', projectController.index);
page('/about', aboutController.index);
page('/stats', statsController.index);
page('*', function(){
  console.error('NO SUCH PAGE 404040404040404040404');
});

page();
