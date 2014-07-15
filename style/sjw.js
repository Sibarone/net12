<!--JavaScript 部分-->
$(document).ready(function() {
  //滚动条事件开始
  var vtop;
  var boxhigh = $(".box").height();
  var imghigh = $(".box3").height();
  var leadhigh = $("div.lead").height();
  $(window).scroll(function() {
    vtop = $(window).scrollTop()
    if (vtop >= 0 && vtop < boxhigh) {
      $("div.lead").css({
        "position": "relative",
        "top": "82.2%"
      });
      $("li.c1").addClass("focus-part1");
      $("li.c2").removeClass("focus-part2");
      $("li.c3").removeClass("focus-part3");
      $("li.c5").removeClass("focus-part5");
      $("li.c4").removeClass("focus-part4");
    } else
    if (vtop >= boxhigh && vtop < (boxhigh * 3)) {
      $("div.lead").css({
        "position": "fixed",
        "top": "0px"
      });
      $("li.c2").addClass("focus-part2");
      $("li.c1").removeClass("focus-part1");
      $("li.c3").removeClass("focus-part3");
      $("li.c4").removeClass("focus-part4");
      $("li.c5").removeClass("focus-part5");
    } else
    if (vtop >= (boxhigh * 3) && vtop < (boxhigh * 5)) {
      $("div.lead").css({
        "position": "fixed",
        "top": "0px"
      });
      $("li.c3").addClass("focus-part3");
      $("li.c1").removeClass("focus-part1");
      $("li.c2").removeClass("focus-part2");
      $("li.c4").removeClass("focus-part4");
      $("li.c5").removeClass("focus-part5");
    } else
    if (vtop >= (boxhigh * 5) && vtop < (boxhigh * 8)) {
      $("div.lead").css({
        "position": "fixed",
        "top": "0px"
      });
      $("li.c4").addClass("focus-part4");
      $("li.c1").removeClass("focus-part1");
      $("li.c2").removeClass("focus-part2");
      $("li.c3").removeClass("focus-part3");
      $("li.c5").removeClass("focus-part5");
    } else {
      $("div.lead").css({
        "position": "fixed",
        "top": "0px"
      });
      $("li.c5").addClass("focus-part5");
      $("li.c1").removeClass("focus-part1");
      $("li.c2").removeClass("focus-part2");
      $("li.c3").removeClass("focus-part3");
      $("li.c4").removeClass("focus-part4");

    }
  }); //滚动条事件结束

  $(".c1").click(function() { //导航栏开始
    $("body").animate({
      scrollTop: 0
    }, 1000);
    $("li.c1").addClass("focus-part1");
  });
  $(".c2").click(function() {
    $("body").animate({
      scrollTop: $("#n2").offset().top
    }, 1000);
    $("li.c2").addClass("focus-part2");
  });
  $(".c3").click(function() {
    $("body").animate({
      scrollTop: $("#n4").offset().top
    }, 1000);
    $("li.c3").addClass("focus-part3");
  });
  $(".c4").click(function() {
    $("body").animate({
      scrollTop: $("#n6").offset().top
    }, 1000);
    $("li.c4").addClass("focus-part4");
    $(".jidian").removeClass("zhengchang");
    $(".bt").fadeIn();
    $(".flip").fadeOut();
    $(".panel").fadeOut();
  });
  $(".c5").click(function() {
    $("body").animate({
      scrollTop: $("#n8").offset().top
    }, 1000);
    $("li.c5").addClass("focus-part5");
  });
  //导航栏结束
});
//图片库开始
$(document).ready(function() {
  $(".arrowright").click(function() {
    $(".box-1").removeClass("left").addClass("center");
    $(".box-2").removeClass("center").addClass("right");
    $(".box-3").removeClass("right").addClass("none");
    $(".box-4").removeClass("none").addClass("left");
    $(".left").addClass("box-1").removeClass("box-4");
    $(".center").addClass("box-2").removeClass("box-1");
    $(".right").addClass("box-3").removeClass("box-2");
    $(".none").addClass("box-4").removeClass("box-3");
  });
  $(".arrowleft").click(function() {
    $(".box-1").removeClass("left").addClass("none");
    $(".box-2").removeClass("center").addClass("left");
    $(".box-3").removeClass("right").addClass("center");
    $(".box-4").removeClass("none").addClass("right");
    $(".left").addClass("box-1").removeClass("box-2");
    $(".center").addClass("box-2").removeClass("box-3");
    $(".right").addClass("box-3").removeClass("box-4");
    $(".none").addClass("box-4").removeClass("box-1");
  });
  //图片库结束
  //学院之美按钮开始
  $("#b1").click(function() {
    $("#i1").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b2").click(function() {
    $("#i2").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b3").click(function() {
    $("#i3").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b4").click(function() {
    $("#i4").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b5").click(function() {
    $("#i18").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b6").click(function() {
    $("#i7").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b7").click(function() {
    $("#i6").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b8").click(function() {
    $("#i8").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b9").click(function() {
    $("#i9").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b10").click(function() {
    $("#i10").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b11").click(function() {
    $("#i11").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b12").click(function() {
    $("#i12").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b13").click(function() {
    $("#i13").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b14").click(function() {
    $("#i14").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b15").click(function() {
    $("#i15").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b16").click(function() {
    $("#i16").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b17").click(function() {
    $("#i17").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $(".bt").fadeOut();
    $("div.lead").css('top', '-100px');
    $(".flip").fadeIn();
  });
  $("#b18").click(function() {
    $("body").animate({
      scrollTop: $("#n8").offset().top
    }, 1000);
    $("li.c5").addClass("focus-part5");
  });
  $("#t1").click(function() {
    $("#i1").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t2").click(function() {
    $("#i2").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t3").click(function() {
    $("#i3").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t4").click(function() {
    $("#i4").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t5").click(function() {
    $("#i18").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t6").click(function() {
    $("#i7").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t7").click(function() {
    $("#i6").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t8").click(function() {
    $("#i8").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t9").click(function() {
    $("#i9").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t10").click(function() {
    $("#i10").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t11").click(function() {
    $("#i11").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t12").click(function() {
    $("#i12").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t13").click(function() {
    $("#i13").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t14").click(function() {
    $("#i14").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t15").click(function() {
    $("#i15").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t16").click(function() {
    $("#i16").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t17").click(function() {
    $("#i17").addClass("zhengchang").siblings("img").removeClass("zhengchang");
    $("div.lead").css('top', '-100px');
    $(".panel").hide();
  });
  $("#t18").click(function() {
    $("body").animate({
      scrollTop: $("#n6").offset().top
    }, 1000);
    $("li.c4").addClass("focus-part4");
    $(".jidian").removeClass("zhengchang");
    $(".bt").fadeIn(2000);
    $(".flip").hide();
    $(".panel").hide();
    $("div.lead").css('top', '0');
  });
  $(".flip").click(function() {
    $(".panel").slideToggle("slow");
  });
  //学院之美按钮结束
  //制作团队部分开始
  $(".girl").mouseover(function() {
    $("#it1").fadeIn();
  });
  $(".girl").mouseout(function() {
    $("#it1").fadeOut();
  });
  $(".boy").mouseover(function() {
    $("#it2").fadeIn();
  });
  $(".boy").mouseout(function() {
    $("#it2").fadeOut();
  }); //制作团队部分结束
});