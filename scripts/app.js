function Project (obj) {
  this.title = obj.title;
  this.category = obj.category;
  this.projectUrl = obj.projectUrl;
  this.publishDate = obj.publishDate;
  this.about = obj.about;
}

Project.all = [];

Project.prototype.toHtml = function() {

  Handlebars.registerHelper('daysAgoPub', function() {
    this.daysAgo = parseInt((new Date() - new Date(this.publishDate)) / 60 / 60 / 24 / 1000);
    this.publishStatus = this.publishDate ? 'published about ' + this.daysAgo + ' days ago' : '(draft)';
    return this.publishStatus;
  });

  var theTemplateScript = $('#projectTemplate').html();
  var theTemplate = Handlebars.compile(theTemplateScript);

  var theCompiled = theTemplate(this);

  return theCompiled;
};

Project.prepareProjects = function(data) {
  data.sort(function(a,b) {
    return (new Date(b.publishDate)) - (new Date(a.publishDate));
  });

  data.forEach(function(obj) {
    Project.all.push(new Project(obj));
  });
};

projects.forEach(function(obj) {
  $('#projectDisplay').append(obj.toHtml());
});
