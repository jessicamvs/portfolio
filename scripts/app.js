(function(module) {

  function Project (obj) {
    this.title = obj.title;
    this.category = obj.category;
    this.projectUrl = obj.projectUrl;
    this.publishDate = obj.publishDate;
    this.about = obj.about;
  }

  Project.all = [];

  Project.findWhere = function(value, callback) {
    var filtered = Project.all.filter(function(ele) {
      return ele.title === value;
    });

    console.log(filtered);

    callback(filtered);
  };

  Project.prepareProjects = function(data) {
    data.sort(function(a,b) {
      return (new Date(b.publishDate)) - (new Date(a.publishDate));
    });

    Project.all = data.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.numWordsInAbout = function() {
    return Project.all.map(function(ele) {
      return {
        title: ele.title,
        numWords: ele.about.split(' ').length
      };
    });
  };

  Project.totalNumAboutWords = function() {
    return Project.all.map(function(ele) {
      return ele.about.split(' ').length;
    })
    .reduce(function(a, b) {
      return a + b;
    });
  };

  Project.fetchProjects = function(callback1) {
    if(localStorage.data) {
      Project.prepareProjects(JSON.parse(localStorage.data));
      callback1();
    } else {
      $.getJSON('data/projects.json', function(data) {
        Project.prepareProjects(data);
        localStorage.setItem('data', JSON.stringify(data));
        callback1();
      });
    }
  };

  module.Project = Project;

})(window);
