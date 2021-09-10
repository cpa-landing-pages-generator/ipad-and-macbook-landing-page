$(".KON").fadeOut(1500);
$(".S3").fadeOut(1500);
setTimeout(function() {

  if (POOR) {
    $("#IP-PREVIEW").removeClass("w-75").addClass("w-50");
  }

  $("#IP-PREVIEW").attr("src", "img/" + CHOSEN + "/" + COLOR + ".jpg");
  $("#COR").text("Your " + NNN);
  $("#SCOLOR").text(NICECOLOR);
  $("#SCAPACITY").html(CHOSENCAPACITY + "<small>GB</small>");
  $(".S4").fadeIn(1500);
  $(".S5").fadeIn(1500);
  fitty("#S-COLOR");
  fitty("#S-CAPA");
  //fitty capacity color
  fitty("#COR");
  setTimeout(function() {
    $("#TYPE").fadeIn(1500);
  }, 2000)
}, 2000)