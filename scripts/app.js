var projects = [];

function Project (obj) {
  this.title = obj.title;
  this.category = obj.category;
  this.projectUrl = obj.projectUrl;
  this.publishDate = obj.publishDate;
  this.about = obj.about;
}

Project.prototype.toHtml = function() {

  Handlebars.registerHelper('daysAgoPub', function() {
    this.daysAgo = parseInt((new Date() - new Date(this.publishDate)) / 60 / 60 / 24 / 1000);
    this.publishStatus = this.publishDate ? 'published about ' + this.daysAgo + ' days ago' : '(draft)';
    return this.publishStatus;
  });

  var theTemplateScript = $('#projectTemplate').html();
  var theTemplate = Handlebars.compile(theTemplateScript);

  var context = {
    projectData: data
  };

  var theCompiled = theTemplate(context);
  $('#projectDisplay').append(theCompiled);

  // var $newProject = $('.template').clone();
  //
  // $newProject.attr('data-category', this.category);
  // $newProject.find('h1 a').text(this.title).attr('href', this.projectUrl);
  // $newProject.find('time[pubdate]').attr('title', this.publishDate);
  // $newProject.find('time').html('Published about ' + parseInt((new Date() - new Date(this.publishDate))/60/60/24/1000) + ' days ago');
  // $newProject.find('.about-project').html(this.about);
  // $newProject.append('<hr>');
  // $newProject.removeClass('template');
  //
  // return $newProject;
};

data.sort(function(a,b) {
  return (new Date(b.publishDate)) - (new Date(a.publishDate));
});

data.forEach(function(obj) {
  projects.push(new Project(obj));
});

projects.forEach(function(a){
  $('#projectDisplay').append(a.toHtml());
});
