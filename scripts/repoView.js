(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = Handlebars.compile($('#myRepo-template').html());

  repoView.index = function() {
    ui();

    $('#aboutMe ul').append(
    );
  };

  module.repoView = repoView;
})(window);
