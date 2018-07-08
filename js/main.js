var jumbotronName = new Vivus('name-jumbotron', {
  type: 'sync',
  duration: 150,
  animTimingFunction: Vivus.EASE_OUT
}, animateSubtitles);

function animateSubtitles() {
  console.log("HI");
  $("#subtitles").show("fade", 600, function() {
    $("footer").show("fade", 200);
  });
}