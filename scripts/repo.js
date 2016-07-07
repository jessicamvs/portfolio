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

  myRepos.with = function(attr) {
    return myRepos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.myRepos = myRepos;
})(window);
