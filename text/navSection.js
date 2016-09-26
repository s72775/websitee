//Navigation Funktion for mobile Devices
//the three Bars in the top right corner)

function navigation() {
    var sOS = document.getElementById("showOnSmall");
	var sB = document.getElementById("showSmallBlack");
    if (sOS.className.indexOf("w3-show") == -1)
	/*OPEN*/{
        sOS.className += " w3-show";
		sOS.style.display = "block";
		sB.style.display = "block";
    } else
	/*CLOSE*/{
        sOS.className = sOS.className.replace(" w3-show", "");
		sOS.style.display = "none";
		sB.style.display= "none";
    }
}



//Navigation Content
var links = '<li><a href="#aboutme" onclick="navigation()">About Me</a></li>' +
			'<li><a href="#amerika" onclick="navigation()">My Trip To Amerika</a></li>' +
			'<li><a href="#" onclick="navigation()">Link moin</a></li>';

var impressum = '<a href="http://www.myflo.de/pages/impressum.html">Impressum</a>';
