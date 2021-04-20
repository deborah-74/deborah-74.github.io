var scrollY = 0;
var distance = 40;
var speed = 24;
var play1 = document.getElementById("play1");
var play2 = document.getElementById("play2");
var play3 = document.getElementById("play3");

var cinema = new Audio();
cinema.src = "cinema.mp3";

function autoScrollTo(div) {
  // console.log("yes");
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(div).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+div+'\')',24);
	if(yPos > bodyHeight){
		clearTimeout(animator);
    // console.log("bottom of page");
	} else {
    // console.log("scroll to");
    // console.log(currentY);
    // console.log(targetY);

		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
        // console.log("done");
      }

       else if(currentY > targetY+distance) {
        scrollY = currentY-distance;
		    window.scroll(0, scrollY);
      }

      else {
        clearTimeout(animator);
      }

	}
}

window.addEventListener("scroll", muteOnScrollH);
window.addEventListener("scroll", muteOnScrollC);
window.addEventListener("scroll", muteOnScrollR);
window.addEventListener("scroll", muteOtherVids);
play1.addEventListener("click", playVids);
play2.addEventListener("click", playVids);
play3.addEventListener("click", playVids);

document.getElementById("horrorfilm").addEventListener('timeupdate', makeVisible);

document.getElementById("hEnd").addEventListener('click', choiceH);

document.getElementById("rEnd").addEventListener('click', choiceR);
document.getElementById("cEnd").addEventListener('click', choiceC);
document.getElementById("horrorfilm").addEventListener('mouseover', pauseAppear);
document.getElementById("horrorfilm").addEventListener("mouseleave", pauseVanish);
document.getElementById("comedyfilm").addEventListener('mouseover', pauseAppear);
document.getElementById("comedyfilm").addEventListener("mouseleave", pauseVanish);
document.getElementById("romancefilm").addEventListener('mouseover', pauseAppear);
document.getElementById("romancefilm").addEventListener("mouseleave", pauseVanish);


document.getElementById("horrorfilm").addEventListener("mouseleave", playVanish);

document.getElementById("comedyfilm").addEventListener("mouseleave", playVanish);

document.getElementById("romancefilm").addEventListener("mouseleave", playVanish);

document.getElementById("horrorfilm").addEventListener("click", pauseAll);
document.getElementById("comedyfilm").addEventListener("click", pauseAll);
document.getElementById("romancefilm").addEventListener("click", pauseAll);






// function for the eventlistener
function muteOnScrollH() {
  var horrorTop = document.getElementById("horrorfilm").offsetTop;

    if (document.documentElement.scrollTop > horrorTop) {
        document.getElementById("horrorfilm").volume = 0.0;
        // console.log("yes");
      }
else {
  document.getElementById("horrorfilm").volume = 1.0;
  // console.log("no");
}
}

function muteOnScrollC() {

  var comedyTop = document.getElementById("comedyfilm").offsetTop;

    if (document.documentElement.scrollTop > comedyTop) {
        document.getElementById("comedyfilm").volume = 0.0;
        // console.log("yes");
      }
else {
  document.getElementById("comedyfilm").volume = 1.0;
}
}

function muteOnScrollR() {

  var romanceTop = document.getElementById("romancefilm").offsetTop;

    if (document.documentElement.scrollTop > romanceTop) {
        document.getElementById("romancefilm").volume = 0.0;
        // console.log("yes");
      }
else {
  document.getElementById("romancefilm").volume = 1.0;
}
}


function muteOtherVids() {
  var thumbnail = document.getElementById("thumbnail").offsetTop;
  var horrorTop = document.getElementById("horrorfilm").offsetTop;
  var comedyTop = document.getElementById("comedyfilm").offsetTop;
  var romanceTop = document.getElementById("romancefilm").offsetTop;

  if (document.getElementById("horrorfilm").volume == 1.0) {
    document.getElementById("comedyfilm").volume = 0.0;
    document.getElementById("romancefilm").volume = 0.0;
    // console.log("y tho");
  }

  if (document.getElementById("comedyfilm").volume == 1.0) {
    document.getElementById("horrorfilm").volume = 0.0;
    document.getElementById("romancefilm").volume = 0.0;
  }

  if (document.getElementById("romancefilm").volume == 1.0) {
    document.getElementById("comedyfilm").volume = 0.0;
    document.getElementById("horrorfilm").volume = 0.0;
  }

  if (document.documentElement.scrollTop < thumbnail) {
    document.getElementById("comedyfilm").volume = 0.0;
    document.getElementById("horrorfilm").volume = 0.0;
    document.getElementById("romancefilm").volume = 0.0;
  }
  }

	function playVids() {
		document.getElementById("horrorfilm").play();
		document.getElementById("comedyfilm").play();
		document.getElementById("romancefilm").play();
		document.getElementById("play1").style.visibility = 'hidden';
		document.getElementById("play2").style.visibility = 'hidden';
		document.getElementById("play3").style.visibility = 'hidden';
	}
var isVisible = false;

	function makeVisible() {
		var elem = document.fullscreenElement;
if (document.getElementById("horrorfilm").currentTime > 207 && document.getElementById("romancefilm").currentTime > 207 && document.getElementById("comedyfilm").currentTime > 207 && isVisible == false) {
	document.getElementById("ending").style.visibility = 'visible';
	document.getElementById("comedyfilm").pause();
	document.getElementById("romancefilm").pause();
	document.getElementById("horrorfilm").pause();
	isVisible = true;

}
	}

	function choiceH() {
		document.getElementById("ending").style.visibility = 'hidden';
		document.getElementById("hEnd").style.visibility = 'hidden';
		document.getElementById("rEnd").style.visibility = 'hidden';
		document.getElementById("cEnd").style.visibility = 'hidden';
		document.getElementById("horrorfilm").requestFullscreen();
		document.getElementById("comedyfilm").pause();
		document.getElementById("romancefilm").pause();
		document.getElementById("horrorfilm").play();
		console.log("horror");
	}

	function choiceC() {
		document.getElementById("ending").style.visibility = 'hidden';
		document.getElementById("hEnd").style.visibility = 'hidden';
		document.getElementById("rEnd").style.visibility = 'hidden';
		document.getElementById("cEnd").style.visibility = 'hidden';
		document.getElementById("comedyfilm").requestFullscreen();
		document.getElementById("comedyfilm").play();
		document.getElementById("romancefilm").pause();
		document.getElementById("horrorfilm").pause();
		console.log("comedy");
	}

	function choiceR() {
		document.getElementById("ending").style.visibility = 'hidden';
		document.getElementById("hEnd").style.visibility = 'hidden';
		document.getElementById("rEnd").style.visibility = 'hidden';
		document.getElementById("cEnd").style.visibility = 'hidden';
		document.getElementById("romancefilm").requestFullscreen();
		document.getElementById("comedyfilm").pause();
		document.getElementById("romancefilm").play();
		document.getElementById("horrorfilm").pause();
		console.log("romance");
	}


	function pauseAppear() {
		if (!document.getElementById("horrorfilm").paused) {

				document.getElementById("pause1").style.visibility = 'visible';
				document.getElementById("pause2").style.visibility = 'visible';
				document.getElementById("pause3").style.visibility = 'visible';

				document.getElementById("play1").style.visibility = 'hidden';
				document.getElementById("play2").style.visibility = 'hidden';
				document.getElementById("play3").style.visibility = 'hidden';
		}

		if (document.getElementById("horrorfilm").paused) {
			document.getElementById("play1").style.visibility = 'visible';
			document.getElementById("play2").style.visibility = 'visible';
			document.getElementById("play3").style.visibility = 'visible';

			document.getElementById("pause1").style.visibility = 'hidden';
			document.getElementById("pause2").style.visibility = 'hidden';
			document.getElementById("pause3").style.visibility = 'hidden';
		}
	}

	function pauseVanish() {


				document.getElementById("pause1").style.visibility = 'hidden';
				document.getElementById("pause2").style.visibility = 'hidden';
				document.getElementById("pause3").style.visibility = 'hidden';

	}

	function pauseAll() {
if (!document.getElementById("horrorfilm").paused){
		document.getElementById("comedyfilm").pause();
		document.getElementById("romancefilm").pause();
		document.getElementById("horrorfilm").pause();

	}
	else if (document.getElementById("horrorfilm").paused){
		document.getElementById("comedyfilm").play();
		document.getElementById("romancefilm").play();
		document.getElementById("horrorfilm").play();
	}
}

	function playVanish() {


			document.getElementById("play1").style.visibility = 'hidden';
			document.getElementById("play2").style.visibility = 'hidden';
			document.getElementById("play3").style.visibility = 'hidden';

	}

	function playBloopers() {
		document.getElementById("bloopervid").play();
	}
