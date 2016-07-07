(function(module) {
  var myRepos = {};

  myRepos.all = [];

  myRepos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/jessicamvs/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + GITHUB_TOKEN},
      success: function(data) {
        myRepos.all = data;
        callback();
      }
    });
  };

  module.myRepos = myRepos;
})(window);
