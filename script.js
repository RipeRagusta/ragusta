function preview(number)
{
	if(window.matchMedia("(hover: hover)").matches)
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
	let muted = true;

	if(checkStorage())
	{
		if((localStorage.getItem("UserVolumePreference")) !== null)
        {
            volume = Number(localStorage.getItem("UserVolumePreference"));
        }

        if((localStorage.getItem("UserMutePreference")) !== null)
        {
            muted = JSON.parse(localStorage.getItem("UserMutePreference"));
        }
	}
	else
	{
		muted = false;
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
            console.log("error setting volume");
        }

        video.muted = muted; 
	}

	video.addEventListener("volumechange", () => 
	{
		if(checkStorage())
		{
	        localStorage.setItem("UserVolumePreference", video.volume);
	    }

	    if(video.muted || video.volume === 0)
	    {
	    	localStorage.setItem("UserMutePreference", "true");
	    }
	    else
	    {
	    	localStorage.setItem("UserMutePreference", "false");
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