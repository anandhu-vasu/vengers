function showMembers()
{
    document.querySelector(".cards").classList.toggle("hide");
    document.querySelector(".show-members-btn").classList.toggle("noanim");
}


function typeWriterStart(txt)
{
	var txtlen=txt.length,i=0;
	function typeWriter()
	{
        if (i < txtlen) {
            //S(".tagline").E[0].innerHTML+=txt.charAt(i);
            document.querySelector('.tagline').innerHTML = txt.substr(0, i + 1);
            for (var j = 0; j < txtlen - i + 1; j++)
                document.querySelector('.tagline').innerHTML += "&nbsp;";
            i++;
            setTimeout(typeWriter, 50);
        }
        else {
            document.querySelector('.intro').style.opacity = 0;
            document.querySelector('.logo').classList.add('logomini')
            document.querySelector('.show-members-btn').classList.add("bounce")
        }
	}
	setTimeout(typeWriter,1000);
}

window.onload=typeWriterStart("Striking the Impossible...")