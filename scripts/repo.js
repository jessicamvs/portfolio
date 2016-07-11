(function(module) {
  var myRepos = {};

  myRepos.all = [];

  myRepos.requestRepos = function(callback) {
    $.ajax({
      url: 'github/user/repos',
      type: 'GET',
      success: function(data) {
        myRepos.all = data;
        callback();
      }
    });
  };

  module.myRepos = myRepos;
})(window);
