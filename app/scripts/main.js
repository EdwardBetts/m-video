$(".get-code").click(function(){
	$(".full.prepage").slideUp();
	$("body").addClass("on");
});

$(".scratch").wScratchPad({
  size        : 50,          // The size of the brush/scratch.
  bg          : "#cdcdcd",  // Background (image path or hex color).
  fg          : "images/scratch-bg.png",  // Foreground (image path or hex color).
  realtime    : true,       // Calculates percentage in realitime.
  scratchDown : null,       // Set scratchDown callback.
  scratchUp   : null,       // Set scratchUp callback.
  scratchMove : null,       // Set scratcMove callback.
  cursor      : "pointer" // Set cursor.
});

$(".scratch").on("mouseDown", function(){
  $(".action-help").fadeOut();
});