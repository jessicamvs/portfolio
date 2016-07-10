(function(module) {
  var myRepos = {};

  myRepos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'github/user/repos' +
            '?per_page=100' +
            '&sort=updated',
      type: 'GET',
      success: function(data) {
        repos.all = data;
      }
    }).done(callback);
  };

  module.myRepos = myRepos;
})(window);
