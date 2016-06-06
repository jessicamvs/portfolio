var projectView = {};


projectView.fillFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {

      var val = $(this).attr('data-category');
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

// projectView.handleCategoryFilter = function() {
//   $('#category-filter').on('change', function() {
//     if($(this).val()) {
//       $('article').hide();
//       var $catChoice = $(this).val();
//
//       $('article[data-category="' + $catChoice + '"]').fadeIn();
//     } else {
//       $('article').show();
//       $('.template').hide();
//     }
//     // $('#author-filter').val('');
//   });
// };

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
  $('#projectDisplay').on('click', 'article > a', function(e){
    e.preventDefault();
    $(this).parent().find('.about-project').children().show();
    $(this).hide();
  });
};

$(function() {
  projectView.fillFilters();
  // projectView.handleCategoryFilter();
  projectView.mainNavTabSelect();
  projectView.moreLink();
});
