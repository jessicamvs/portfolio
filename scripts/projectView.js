(function(module) {

  var projectView = {};

  var render = function(project) {

    Handlebars.registerHelper('daysAgoPub', function() {
      project.daysAgo = parseInt((new Date() - new Date(project .publishDate)) / 60 / 60 / 24 / 1000);
      project.publishStatus = project .publishDate ? 'published about ' + project.daysAgo + ' days ago' : '(draft)';
      return project .publishStatus;
    });

    var theTemplateScript = $('#projectTemplate').html();
    var theTemplate = Handlebars.compile(theTemplateScript);

    return theTemplate(project);
  };

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

  projectView.index = function(projects) {
    $('#projects').show().siblings().hide();

    $('#projectDisplay').children().remove();
    projects.forEach(function(a) {
      $('#projectDisplay').append(render(a));
    });

    projectView.fillFilters();
    projectView.handleFilter();
    projectView.hamburgerToggle();
    projectView.moreLink();
        // DONE: Replace setTeasers with just the truncation logic, if needed:
    // if ($('#articles article').length > 1) {
    //   $('.article-body *:nth-of-type(n+2)').hide();
    // }
  };

  // projectView.renderIndex = function() {
  //   Project.all.forEach(function(obj) {
  //     $('#projectDisplay').append(obj.toHtml());
  //   });
  //
  //   $('#totalProjects').text(Project.all.length);
  //   $('#wordCount').text(Project.totalNumAboutWords());
  //
  //   var template = Handlebars.compile($('#statTemplate').html());
  //
  //   Project.numWordsInAbout().forEach(function(ele) {
  //     $('#statList').append(template(ele));
  //   });
  //
  //   projectView.fillFilters();
  //   projectView.handleFilter();
  //   projectView.hamburgerToggle();
  //   projectView.moreLink();
  // };

  module.projectView = projectView;

})(window);
