function preview(number)
{
	var consitstent = false;
	consitstent = true;

	element = document.getElementById("image-" + number);

	element.addEventListener('mouseout', () => 
	{
  		consitstent = false;
	});

	setTimeout(() => 
	{
		if(consitstent == true)
		{
			document.getElementById("image-" + number).src = "./gif-" + number + ".GIF";
		}
	}, 500);

	element.addEventListener('mouseout', () => 
	{
		document.getElementById("image-" + number).src = "./image-" + number + ".jpg";
	});
}
