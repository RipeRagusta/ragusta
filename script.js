window.addEventListener("mousemove", logoOne);
window.addEventListener("click", removePhoto);

function expandPhoto(number)
{
	displayedTimer = true; 
	document.getElementById("expanded").style.display = "block";
	setTimeout(() => displayedTiming(), 50);
}

function displayedTiming()
{
	displayedTimer = false;
}

function removePhoto()
{	
	if(displayedTimer == false)
	{
		document.getElementById("expanded").style.display = "none";
	}
}

function logoOne(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) 
		|| (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)) 
		|| window.innerWidth >= 968)
	{
    	var x = window.innerWidth / 2;
		var mouseX = event.clientX;

		var logo = document.querySelector("#expanded");
		var referenceY = logo.getBoundingClientRect();

		var y = referenceY.top + (referenceY.height / 2);
		var mouseY = event.clientY;
		var atanPositionX;
		var atanPositionY;

		if(mouseX <= x)
		{
			atanPositionX = x - mouseX;
		}

		if(mouseX > x)
		{
			atanPositionX = mouseX - x;
		}

		if(mouseY <= y)
		{
			atanPositionY = y - mouseY;
		}

		if(mouseY > y)
		{
			atanPositionY = mouseY - y;
		}

		var angle = Math.atan2(atanPositionY, atanPositionX) * 180 / Math.PI;
		var realAngle;

		if(mouseX > x && mouseY <= y)
		{
			realAngle = 90 - angle;
		}
		if(mouseX > x && mouseY > y)
		{
			realAngle = 90 + angle;
		}
		if(mouseX <= x && mouseY > y)
		{
			realAngle = 180 + (90 - angle);
		}
		if(mouseX <= x && mouseY <= y)
		{
			realAngle = 270 + angle;
		}

		if(realAngle > 337.5 && realAngle <=360 || realAngle <=22.5)
		{
			document.getElementById("expanded").style.transform = "translate(-50%, -50%) perspective(3000px) rotateX(15deg)";
		}
		if(realAngle > 22.5 && realAngle <= 67.5)
		{
			document.getElementById("expanded").style.transform = "translate(-50%, -50%) perspective(3000px) rotateY(10deg) rotateX(10deg)";
		}
		if(realAngle > 67.5 && realAngle <= 112.5)
		{
			document.getElementById("expanded").style.transform = "translate(-50%, -50%) perspective(3000px) rotateY(15deg)";
		}
		if(realAngle > 112.5 && realAngle <= 157.5)
		{
			document.getElementById("expanded").style.transform = "translate(-50%, -50%) perspective(3000px) rotateY(10deg) rotateX(-10deg)";
		}
		if(realAngle > 157.5 && realAngle <= 202.5)
		{
			document.getElementById("expanded").style.transform = "translate(-50%, -50%) perspective(3000px) rotateX(-15deg)";
		}
		if(realAngle > 202.5 && realAngle <= 247.5)
		{
			document.getElementById("expanded").style.transform = "translate(-50%, -50%) perspective(3000px) rotateY(-10deg) rotateX(-10deg)";
		}
		if(realAngle > 247.5 && realAngle <= 292.5)
		{
			document.getElementById("expanded").style.transform = "translate(-50%, -50%) perspective(3000px) rotateY(-15deg)";
		}
		if(realAngle > 292.5 && realAngle <= 337.5)
		{
			document.getElementById("expanded").style.transform = "translate(-50%, -50%) perspective(3000px) rotateY(-10deg) rotateX(10deg)";
		}
    }
	else
	{
		document.getElementById("expanded").style.transform = "translate(-50%, -50%) perspective(3000px)";
	}

}

function preview(number)
{
	document.getElementById("image-" + number).src = "weenwao gif.GIF";
}

function reset(number)
{
	document.getElementById("image-19").src = "maxresdefault.jpg";
}
