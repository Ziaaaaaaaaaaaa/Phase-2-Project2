var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}




$(document).ready(function () {
    var currentIndex = 0;
    function showSlide(index) {
      $(".interiorImg").hide();
      $(".interiorImg:eq(" + index + ")").fadeIn();
      $(".indicator").removeClass("active");
      $(".indicator:eq(" + index + ")").addClass("active");
    }
    function nextSlide() {
      currentIndex = (currentIndex + 1) % $(".interiorImg").length;
      showSlide(currentIndex);
    }
    showSlide(currentIndex);
    var intervalId = setInterval(function () {
      nextSlide();
    }, 6000);
    $(".next").on("click", function () {
      clearInterval(intervalId);
      nextSlide();
    });
    $(".autoplay-indicators .indicator").on("click", function () {
      clearInterval(intervalId);
      currentIndex = $(this).index();
      showSlide(currentIndex);
    });
  });