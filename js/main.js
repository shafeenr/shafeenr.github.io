var jumbotronName = new Vivus('name-jumbotron', {
  type: 'sync',
  duration: 125,
  pathTimingFunction: Vivus.EASE_IN,
  animTimingFunction: Vivus.EASE_OUT
}, animateSubtitles);

function animateSubtitles() {
  $("#subtitles").show("fade", 600, function() {
    $("footer").show("fade", 200);
  });
}