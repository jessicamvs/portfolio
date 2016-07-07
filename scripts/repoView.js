(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#aboutMe');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = Handlebars.compile($('#myRepo-template').html());

  repoView.index = function() {
    ui();

    $('#aboutMe ul').append(
      myRepos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
