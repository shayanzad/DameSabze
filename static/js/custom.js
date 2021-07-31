jQuery(
  (function($) {
    "use strict";
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 50) {
        $(".main-nav").addClass("menu-shrink");
      } else {
        $(".main-nav").removeClass("menu-shrink");
      }
    });
    jQuery(".mean-menu").meanmenu({
      meanScreenWidth: "991"
    });
    $(".odometer").appear(function(e) {
      var odo = $(".odometer");
      odo.each(function() {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
    $(".popup-youtube").magnificPopup({
      disableOn: 320,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    $(".review-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      rtl: true,
      navText: [
        "<i class='bx bx-right-arrow-alt'></i>",
        "<i class='bx bx-left-arrow-alt'></i>"
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
    });
    $("select").niceSelect();
    $(".accordion > li:eq(0) a")
      .addClass("active")
      .next()
      .slideDown();

    let getDaysId = document.getElementById("days");
    if (getDaysId !== null) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      let countDown = new Date("January 30, 2022 00:00:00").getTime();
      setInterval(function() {
        let now = new Date().getTime();
        let distance = countDown - now;
        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
      }, second);
    }
    $(".newsletter-form")
      .validator()
      .on("submit", function(event) {
        if (event.isDefaultPrevented()) {
          formErrorSub();
          submitMSGSub(false, "لطفا ایمیل خود را به درستی وارد کنید.");
        } else {
          event.preventDefault();
        }
      });

    function callbackFunction(resp) {
      if (resp.result === "success") {
        formSuccessSub();
      } else {
        formErrorSub();
      }
    }

    function formSuccessSub() {
      $(".newsletter-form")[0].reset();
      submitMSGSub(true, "از اشتراک شما متشکریم!");
      setTimeout(function() {
        $("#validator-newsletter").addClass("hide");
      }, 4000);
    }

    function formErrorSub() {
      $(".newsletter-form").addClass("animated shake");
      setTimeout(function() {
        $(".newsletter-form").removeClass("animated shake");
      }, 1000);
    }

    function submitMSGSub(valid, msg) {
      if (valid) {
        var msgClasses = "validation-success";
      } else {
        var msgClasses = "validation-danger";
      }
      $("#validator-newsletter")
        .removeClass()
        .addClass(msgClasses)
        .text(msg);
    }
    $(".newsletter-form").ajaxChimp({
      url:
        "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
      callback: callbackFunction
    });

    $("body").append(
      '<div id="toTop" class="back-to-top-btn"><i class="bx bxs-up-arrow-alt"></i></div>'
    );
    $(window).on("scroll", function() {
      if ($(this).scrollTop() != 0) {
        $("#toTop").fadeIn();
      } else {
        $("#toTop").fadeOut();
      }
    });
    $("#toTop").on("click", function() {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        900
      );
      return false;
    });
  })(jQuery)
);
