(function() {
  "use strict";

  //Init Icons & Polyfills
  feather.replace();
  svg4everybody();

  //Scroll top
  $("#top").on("click", function() {
    return $("body,html").stop().animate({
      scrollTop: 0
    }, 800);
  });

  //Label Animation
  $(document).find("input, textarea").each(function() {

    $(this).on("focus", function() {
      $(this).closest(".input-field").addClass("active");
    });

    $(this).on("blur", function() {
      $(document).find("input, textarea").each(function() {
        if ($(this).val().length == 0) {
          $(this).closest(".input-field").removeClass("active");
        }
      });
    });

    if ($(this).val()) {
      $(this).closest(".input-field").addClass("active");
    }
  });

  // Feature slider
  $(".feature-slider__container").slick({
    dots: true,
    adaptiveHeight: true
  });

  // Quote slider
  $(".quote-slider__container").slick({
    adaptiveHeight: true
  });

  // Tabs
  $(".tabs__controls").each(function(){
    var $active, $content, $links = $(this).find("a");

    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass("active");

    $content = $($active[0].hash);

    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      $active.removeClass('active');
      $content.hide();

      $active = $(this);
      $content = $(this.hash);

      $active.addClass('active');
      $content.show();

      e.preventDefault();
    });
  });

  // Local scroll
  $(".hero").localScroll({
    duration: 800
  });

})();
