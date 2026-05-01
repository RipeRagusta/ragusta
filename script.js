function preview(number)
{
	var consitstent = false;
	consitstent = true;

	element = document.getElementById("image-" + number);

	element.addEventListener("mouseout", () => 
	{
  		consitstent = false;
	});

	setTimeout(() => 
	{
		if(consitstent == true)
		{
			document.getElementById("image-" + number).src = "./assets/gifs/gif-" + number + ".GIF";
		}
	}, 500);

	element.addEventListener("mouseout", () => 
	{
		document.getElementById("image-" + number).src = "./assets/images/image-" + number + ".jpg";
	});
}

function indexInitialize()
{
	
}

function videoInitalize()
{
	adjustVolume();
}

function styleInitialize()
{
	let video = document.querySelector("video");

	if(video)
	{
		let logo = document.getElementById("logo")

		if(logo)
		{
			let logoRect = logo.getBoundingClientRect();
			video.style.maxHeight = `calc(100svh - (var(--sizer) * 7) - ${logoRect.height}px)`;
		}
	}
}

function adjustVolume()
{
	let volume = 0.25;

	if(checkStorage())
	{
		if((localStorage.getItem("UserVolumePreference")) !== null)
        {
            volume = localStorage.getItem("UserVolumePreference");
        }
	}

	let video = document.querySelector("video");

	if(video)
	{
		video.volume = volume;
	}

	video.addEventListener("volumechange", () => 
	{
		if(checkStorage())
		{
	        localStorage.setItem("UserVolumePreference", video.volume);
	    }
    });
}

function checkStorage()
{
    var test = "test";

    try 
    {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } 
    catch(e)
    {
        return false;
    }
}