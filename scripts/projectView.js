var projectView = {};

projectView.mainNavTabSelect = function() {
  $('.mainNav').on('click', 'li', function(e){
    e.preventDefault();
    $('.tab-content').hide();
    var $tabSelection = $(this).data('content');
    $('#' + $tabSelection).show();
  });

  $('.mainNav .tab:first').click();
};

projectView.moreLink = function() {
  $('.about-project *:nth-of-type(n+2)').hide();
  $('#articles').on('click', 'a', function(e){
    e.preventDefault();
    $(this).parent().find('.about-project').children().show();
    $(this).hide();
  });
};

$(function() {
  projectView.mainNavTabSelect();
  projectView.moreLink();
});
