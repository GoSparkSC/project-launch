var ctx = document.getElementById('gender-chart').getContext('2d');
$(document).foundation();
let data = {
  datasets: [{
    label: "2017",
    data: [
      25, 75
    ],
    backgroundColor: ['rgba(237, 49, 51, 0.7)', 'rgba(251, 159, 83, 0.7)']
  }, {
    label: "2018",
    data: [
      30, 70
    ],
    backgroundColor: ['rgba(237, 49, 51, 0.7)', 'rgba(251, 159, 83, 0.7)']
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ['Male', 'Female']
};

$('.carousel').carousel({
  interval: 1500
})




var ethinicity_chart_do = document.getElementById('ethnicity-chart').getContext('2d');
Chart.defaults.global.defaultFontSize = 14;
let data_ethnicity = {
  datasets: [{
    label: "2017",
    data: [
      20, 80
    ],
    backgroundColor: ['rgba(23, 16, 67, 0.7)', 'rgba(193, 241, 248, 0.7)']
  }, {
    label: "2018",
    data: [
      30, 70
    ],
    backgroundColor: ['rgba(23, 16, 67, 0.7)', 'rgba(193, 241, 248, 0.7)']
  }],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ['Afr. Amer.', 'Hispanic']
};
var myPieChart = null;
var ethnicity_pie_chart = null;

$(document).ready(function() {
  $('.toggle-button').click((obj) => {

    obj = $(obj.target);
    if (obj.hasClass("toggle")) {
      obj.addClass("toggle-active");
      obj.removeClass("toggle");
      if (obj[0].id == "2017") {
        addData(ethnicity_pie_chart, "2017", [30, 70])
        addData(myPieChart, "2017", [30, 70])
      }

      if (obj[0].id == "2018") {
        addData(ethnicity_pie_chart, "2018", [30, 70])
        addData(myPieChart, "2018", [30, 70])
      }

    } else {
      obj.addClass("toggle");
      obj.removeClass("toggle-active");

      if (obj[0].id == "2017") {
        removeData(ethnicity_pie_chart, "2017")
        removeData(myPieChart, "2017")
      }

      if (obj[0].id == "2018") {
        removeData(ethnicity_pie_chart, "2018")
        removeData(myPieChart, "2018")
      }

    }

    ethnicity_pie_chart.update();
  });

  // function changeData(chart, data) {
  //   chart.data.datasets[0].data = data
  //   chart.update();
  // }

  function addData(chart, label, data) {
    chart.data.datasets.forEach((dataset) => {
      if (dataset.label == label)
        dataset.data = data
    })
    chart.update();
  }

  function removeData(chart, label) {
    chart.data.datasets.forEach((dataset) => {
      if (dataset.label == label)
        dataset.data = [0, 0]
    });
    chart.update();
  }

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
          options: {
            legend: {
              display: true,

              labels: {
                fontFamily: 'Avenir'
              }
            },

          },

        });
      }, 250);
    } else {}
  });

});





//Courtesy of: https://www.w3schools.com/howto/howto_js_sticky_header.asp
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  stickNavBar()
};

// Get the header
var header = document.getElementById("navbarWrapper");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavBar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function() {
  $("#x-icon").click(function() {
    $("#sidebar").css("visibility", "hidden");
    // $("body", "html").css("overflow-y", "scroll");
  });

  $("#vertical-nav-list").click(function() {
    $("#sidebar").css("visibility", "hidden");
    // $("body", "html").css("overflow-y", "scroll");
  });

  $("#hamburger").click(function() {
    $("#sidebar").css("visibility", "visible");

    $("body", "html").css("overflow-y", "hidden");

  });
});
document.getElementById("sidebar")
