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

function globalInitialize()
{
	document.body.addEventListener("touchstart", () => {}, { passive: true });
}

function indexInitialize()
{
	globalInitialize();
}

function videoInitalize()
{
	globalInitialize();
	adjustVolume();
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
		try 
		{
            video.volume = volume;
        } 
        catch(e) 
        {
            video.muted = true; 
        }
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