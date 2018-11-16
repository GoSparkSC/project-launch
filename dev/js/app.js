var ctx = document.getElementById('gender-chart').getContext('2d');
$(document).foundation();
let data = {
  datasets: [
    {
      data: [25, 75]
    }
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ['Male', 'Female']
};

$('.carousel').carousel({interval: 1500})

var ethinicity_chart_do = document.getElementById('ethnicity-chart').getContext('2d');

let data_ethnicity = {
  datasets: [
    {
      data: [20, 80]
    }
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ['African American', 'Hispanic']
};
var myPieChart = null;
var ethnicity_pie_chart = null;

$(document).ready(function() {
  $('.toggle-button').click((obj) => {

    obj = $(obj.target);
    if (obj.hasClass("toggle")) {
      obj.addClass("toggle-active");
      obj.removeClass("toggle");

    } else {
      obj.addClass("toggle");
      obj.removeClass("toggle-active");

    }
  });

  $.fn.isInViewport = function() {
    //console.log($(this))
    if ($(this).length > 0) {
      console.log("here")
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    }
  };

  $(window).on('resize scroll', function() {
    if ($(".charts-information").isInViewport() && !myPieChart) {

      myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: Chart.defaults.pie
      });
      setTimeout(function() {
        ethnicity_pie_chart = new Chart(ethinicity_chart_do, {
          type: 'pie',
          data: data_ethnicity,
          options: Chart.defaults.pie
        });
      }, 250);
    } else {}
  });

});
