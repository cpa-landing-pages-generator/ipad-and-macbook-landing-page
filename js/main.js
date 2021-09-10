var CHOSEN;
var CHOSEN2;
var CHOSENPROCESSOR; //MACBOOK AIR
var NICEPROCESSOR; //MACBOOK AIR
var CHOSENDISPLAY; //IPAD PRO
var NICEDISPLAY; //IPAD PRO
var NICECONNECTIVITY; //IPAD PRO
var CHOSENMEMORY; //MACBOOK AIR RAM
var CHOSENCONNECTIVITY; //IPAD PRO CONNECTIVITY
var COLOR;
var CAPA;
var CHOSENCAPACITY;
var IMAGELINK;
var NICECOLOR;
var NNN;
var POOR;
var CHOOSEX;

function IP(xD) {
  CHOSEN = xD;
  console.log(CHOSEN)
  $(".IPHONE-2").not("." + xD).removeClass("IP-SELECTED");
  $("." + xD).addClass("IP-SELECTED");
  $(".CON").removeAttr("disabled");
}

function PROC(xD) {

  switch (xD) {
    case "i3":
      NICEPROCESSOR = "Intel Core i3"
      break;
    case "i5":
      NICEPROCESSOR = "Intel Core i5"
      break;
    case "i7":
      NICEPROCESSOR = "Intel Core i7"
      break;
}

  CHOSENPROCESSOR = xD;
  $(".IPHONE-2").not("." + xD).removeClass("IP-SELECTED");
  $("." + xD).addClass("IP-SELECTED");
  $(".CON-PROCESSOR").removeAttr("disabled");
}

function MEMO(xD) {
  CHOSENMEMORY = xD;
  $(".IPHONE-2").not("." + xD).removeClass("IP-SELECTED");
  $("." + xD).addClass("IP-SELECTED");
  $(".CON-MEMORY").removeAttr("disabled");
}

function DISP(xD) {

  switch (xD) {
    case "D11":
      NICEDISPLAY = "11-inch display"
      break;
    case "D129":
      NICEDISPLAY = "12.9-inch display"
      break;
}

  CHOSENDISPLAY = xD;
  $(".IPHONE-2").not("." + xD).removeClass("IP-SELECTED");
  $("." + xD).addClass("IP-SELECTED");
  $(".CON-DISPLAY").removeAttr("disabled");
}

function CONN(xD) {

  switch (xD) {
    case "WIFI":
      NICECONNECTIVITY = "Wi-Fi"
      break;
    case "WIFI-C":
      NICECONNECTIVITY = "Wi-Fi + Cellular"
      break;
}

  CHOSENCONNECTIVITY = xD;
  $(".IPHONE-2").not("." + xD).removeClass("IP-SELECTED");
  $("." + xD).addClass("IP-SELECTED");
  $(".CON-CONNECTIVITY").removeAttr("disabled");
}

//FUNKCJE CONDISP i CONPROC

function CONDISP() {
  $(".CHOOSEDISPLAY").fadeOut(1500);
  $(".SCREENCHOOSING").fadeOut(1500);
  //pokaz wybranie wifi/wifi+cellular

  setTimeout(function() {
    $(".CHOOSECONNECTIVITY").fadeIn(1500);
    $(".CONNECTIVITY").fadeIn(1500);
  }, 1500)

}

function CONPROC() {
  $(".CHOOSEPROCESSOR").fadeOut(1500);
  $(".PROCESSORCHOOSING").fadeOut(1500);
  //pokaz wybranie RAMu

  setTimeout(function() {
    $(".CHOOSEMEMORY").fadeIn(1500);
    $(".MEMORY").fadeIn(1500);
  }, 1500)
}

//FUNKCJE CONMEM i CONCONN

function CONMEM() {
  $(".CHOOSEMEMORY").fadeOut(1500);
  $(".MEMORY").fadeOut(1500);

  setTimeout(function() {
    POJEMNOSC("MBAIR");
  }, 1500)

}

function CONCONN() {
  $(".CHOOSECONNECTIVITY").fadeOut(1500);
  $(".CONNECTIVITY").fadeOut(1500);

  setTimeout(function() {
    POJEMNOSC("IPADPRO");
  }, 1500)

}

function POJEMNOSC(AAA) {
  $(".CPCP").fadeIn(1500);
  $("#CAPACITY").fadeIn(1500);
  $("#CAPACITY-" + AAA).fadeIn(1500).css("display", "flex");
  $("#FINISH").fadeIn(1500);
}

function CON() {

  switch (CHOSEN) {

    case "MBAIR":
      NNN = "MacBook Air";
      CHOOSEX = ".CHOOSEPROCESSOR";
      //pokaz wybranie procesora CUSTOM [V]
      //pokaz wybranie RAMu [V]
      //pokaz wybranie pojemnosci
      //pokaz wybranie koloru
      break;
    case "IPADPRO":
      NNN = "iPad Pro";
      CHOOSEX = ".CHOOSEDISPLAY";
      //pokaz wybranie ekranu CUSTOM [V]
      //pokaz wybranie wifi/wifi+cellular
      //pokaz wybranie pojemnosci
      //pokaz wybranie koloru
      break;
  }

  $("#CONFIGURE").text("Configure your " + NNN);

  $("#FLI").css("min-height", "100vh");
  $(".S1").fadeOut(1500, function() {
    setTimeout(function() {

      $(".CFCF").not(".CHOOSEFINISH").fadeIn(1500);
      fitty("#CONFIGURE");

      setTimeout(function() {
        $(CHOOSEX).fadeIn(1500);
        $(".CONFIGURE" + CHOSEN).fadeIn(1500).css("display", "flex");
      }, 1500)

    }, 750)
  }) 

}

function IPC(Dx) {

  $(".CCCP")[0].scrollIntoView()


  COLOR = Dx;
  console.log(COLOR);
  $(".IP-COLOR").not(".IPC-" + Dx).removeClass("IP-SELECTED");
  $(".IPC-" + Dx).addClass("IP-SELECTED");

  $("#SUMM").removeAttr("disabled");


  switch (COLOR) {
          case "MBAIR-SPACE":
            NICECOLOR = "Space Grey"
            break;
          case "MBAIR-GOLD":
            NICECOLOR = "Gold"
            break;
          case "MBAIR-SILVER":
            NICECOLOR = "Silver"
            break;
          case "IPAD-SPACE":
            NICECOLOR = "Space Grey";
            break;
          case "IPAD-SILVER":
            NICECOLOR = "Silver";
            break;
  }


}

function SCAPA(XD) {

  if (XD > 10) {
    CHOSENCAPACITY = XD + "<small>GB</small>";
  } else {
    CHOSENCAPACITY = XD + "<small>TB</small>";
  }
  console.log(CHOSENCAPACITY);
  $(".IP-CAPACITY").not(".CAPA-" + XD).removeClass("IP-SELECTED");
  $(".CAPA-" + XD).addClass("IP-SELECTED");

  $("#FINISH").removeAttr("disabled");

}

function FINISH() {

  $(".CACA").fadeOut(1500);

  setTimeout(function() {

    $(".CFCF").not(".CHOOSEFINISH").fadeIn(1500);

      $(".CHOOSEFINISH").fadeIn(1500);
      $(".COLORS" + CHOSEN).fadeIn(1500).css("display", "flex");
      $(".COLORS").fadeIn(1500).css("display", "flex");

  }, 1500)

}

function TYPE() {
  $(".S5").fadeOut(1500);
  $(".S6").fadeOut(1500, function() {
    $(".S7").fadeIn(1500);
  });
}

function SUMM() {
  $(".KON").fadeOut(1500);
  $(".COCA").fadeOut(1500);
  $(".S3").fadeOut(1500);

  setTimeout(function() {

    if (POOR) {
      $("#IP-PREVIEW").removeClass("w-75").addClass("w-50");
    }


    var CUSTOM1, CUSTOM2;

    if (CHOSEN == "MBAIR") {
      //procek i ram

        CUSTOM1 = "Processor: <strong>" + NICEPROCESSOR + "</strong>";
        CUSTOM2 = "Memory: <strong>" + CHOSENMEMORY + "</strong>";

        IMAGELINK = COLOR + ".jpg";

    } else {
      //ekran i cellular


        IMAGELINK = CHOSENDISPLAY + "-" + COLOR + ".png";

        CUSTOM1 = "Display: <strong>" + NICEDISPLAY + "</strong>";
        CUSTOM2 = "Connectivity: <strong>" + NICECONNECTIVITY + "</strong>";

        $("#IP-PREVIEW").removeClass("w-75").addClass("w-60");

    }

    $("#KURWA").html(NNN);
    $("#IP-PREVIEW").attr("src", IMAGELINK);
    $("#COR").text("Your " + NNN);
    $("#SCOLOR").text(NICECOLOR);
    $("#SCAPACITY").html(CHOSENCAPACITY);
    $("#S-CUSTOM1").html(CUSTOM1);
    $("#S-CUSTOM2").html(CUSTOM2);
    $(".S4").fadeIn(1500);
    $(".S5").fadeIn(1500);
    fitty("#S-COLOR", {maxSize: 25});
    fitty("#S-CAPA", {maxSize: 25});
    fitty("#S-CUSTOM1", {maxSize: 25});
    fitty("#S-CUSTOM2", {maxSize: 25});
    //fitty capacity color
    fitty("#COR");
    setTimeout(function() {
      $("#TYPE").fadeIn(1500);
    }, 3000)
  }, 2000)

}

function LAST() {

  var SMAIL = $("#EMAIL").val();

  if (SMAIL == "") {
    alert("Type in your Email address.")
  } else {

    call_locker();
  }
}

$(function() {


  if ($(window).height() > 600) {

    POOR = false;

    fitty(".FFF");
    setTimeout(function() {
      fitty(".FFF");
    }, 50)
    setTimeout(function() {
      $("#FLI").css("min-height", "100vh");
      $("#FLI").fadeTo(1500, 1);
    }, 100)

  } else {

    POOR = true;

    fitty(".FFF");
    setTimeout(function() {
      fitty(".FFF");
    }, 50)
    setTimeout(function() {
      $("#FLI").css("min-height", "100vh");
      $("#FLI").fadeTo(1500, 1);
    }, 100)

  }

});
