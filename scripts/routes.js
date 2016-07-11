page('/', homeController.index);

page('/projects',
  projectController.loadAll,
  projectController.index);

page('/about', aboutController.index);
page('/stats', statsController.index);
page('*', function(){
  $('#404').show().siblings().hide();
});

page();


// page('/',
//   articlesController.loadAll,
//   articlesController.index);
//
// page('/about', aboutController.index);
//
// page('/article/:id',
//   articlesController.loadById,
//   articlesController.index);
//
// // Redirect home if the default filter option is selected:
// page('/category', '/');
//
// page('/category/:categoryName',
//   articlesController.loadByCategory,
//   articlesController.index);
