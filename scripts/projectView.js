var projectView = {};


projectView.fillFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {

      var optionSelected = $(this).attr('data-category');
      var assignOptionVal = '<option value="' + optionSelected + '">' + optionSelected + '</option>';
      if ($('#category-filter option[value="' + optionSelected + '"]').length === 0) {
        $('#category-filter').append(assignOptionVal);
      }
    }
  });
};

projectView.handleFilter = function() {
  $('#category-filter').on('change', function() {
    if($(this).val()) {
      $('article').hide();
      var choice = $(this).val();

      $('article[data-category="' + choice + '"]').fadeIn();
    } else {
      $('article').show();

    }
  });
};

projectView.mainNavTabSelect = function() {
  $('.mainNav').on('click', 'li', function(e){
    $('.tab-content').hide();
    var $tabSelection = $(this).data('content');
    $('#' + $tabSelection).show();
  });

  $('.mainNav .tab:first').click();
};

projectView.hamburgerToggle = function() {
  $('div.icon-menu').on('click', function() {
    $('.mainNav ul').toggle('slow').addClass('menuNavColor');
  });
  $(window).on('resize', function() {
    if ($(window).width() >= 600) {
      $('.mainNav ul').show().removeClass('menuNavColor');
    } else {
      $('.mainNav ul').hide();
    }
  });
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
  projectView.handleFilter();
  projectView.mainNavTabSelect();
  projectView.hamburgerToggle();
  projectView.moreLink();
});
