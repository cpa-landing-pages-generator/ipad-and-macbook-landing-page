$("#FLI").css("min-height", "100vh");
  $(".S1").fadeOut(1500, function() {
    setTimeout(function() {

      $(".CFCF").not(".CHOOSEFINISH").fadeIn(1500);
      fitty("#CONFIGURE");

      setTimeout(function() {
        $(".CHOOSEFINISH").fadeIn(1500);
        $(".CONFIGURE" + CHOSEN).fadeIn(1500).css("display", "flex");
      }, 1500)

    }, 750)
  }) 