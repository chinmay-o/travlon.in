// $('html, body').animate({
//   scrollTop: $("#goldRate-content").offset().top - 240
// }, 1000);

$(".nav-link-scroll").click(function() {

  var linkID = $(this).attr("id");
  linkID = linkID.split("-")[0];
  $('html, body').animate({
    scrollTop: $("#"+ linkID +"-content").offset().top - 60
  }, 1000);
});

// $('html, body').animate({
//   scrollTop: $("#"+ linkID +"-content").offset().top - 240
// }, 1000);
