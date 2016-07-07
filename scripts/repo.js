(function(module) {
  var myRepos = {};

  myRepos.all = [];

  myRepos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/geoffreycc/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + GITHUB_TOKEN},
      success: function(data) {
        repos.all = data;
        callback();
      }
    });
  };

  module.myRepos = myRepos;
})(window);
