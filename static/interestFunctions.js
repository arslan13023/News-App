$('document').ready(function(){

	var selected = 0;
	function selectedInterest(image, id, check)
	{
		$(image).click(function(){
				if($(id).hasClass('select'))
				{
					$(id).addClass('hover08');
					$(id).removeClass('select');
					$('#sports-circle2').css('z-index', '0');
					selected--;
				}
				else
				{
					$(id).removeClass('hover08');
					$(id).addClass('select');
					$(check).css('z-index','3');
					$('#sports-circle2').css('z-index', '3');
					selected++;
				}
			}
		);
	}

	function hoverImage(id, image)
	{
		$( id ).mouseenter(function(){
		     $(image).css('z-index','3'); 
		     $(id).removeClass('hover08');
		});

		$( id ).mouseleave(function(){
			if($(id).hasClass('select') == false)
			{
				$(image).css('z-index','0');
			    	$(id).addClass('hover08');
			}
		});

	}

	function allEffects(mainDiv, selectedCircle, image, label)
	{
		hoverImage(mainDiv,selectedCircle);

		selectedInterest(image,mainDiv,selectedCircle);
		selectedInterest(selectedCircle,mainDiv,selectedCircle);
		selectedInterest(label,mainDiv,selectedCircle);
	}

	allEffects(document.getElementById('sports-image1'),document.getElementById('image1-circle2'),document.getElementById('image1'),document.getElementById('Cricket'));
	allEffects('#sports-image2', '#image2-circle2', '#image2', '#Badminton');
	allEffects('#sports-image3', '#image3-circle2', '#image3', '#Football');
	allEffects('#sports-image4', '#image4-circle2', '#image4', '#Tennis');
	allEffects('#sports-image5', '#image5-circle2', '#image5', '#Weather');
	allEffects('#sports-image6', '#image6-circle2', '#image6', '#Buisness');
	allEffects('#sports-image7', '#image7-circle2', '#image7', '#Electronics');
	allEffects('#sports-image8', '#image8-circle2', '#image8', '#History');
	allEffects('#sports-image9', '#image9-circle2', '#image9', '#Fashion');
	allEffects('#sports-image10', '#image10-circle2', '#image10', '#Finance');
	allEffects('#sports-image11', '#image11-circle2', '#image11', '#Dramas');
	allEffects('#sports-image12', '#image12-circle2', '#image12', '#Politics');
	allEffects('#sports-image13', '#image13-circle2', '#image13', '#Education');
	allEffects('#sports-image14', '#image14-circle2', '#image14', '#Health');
	allEffects('#sports-image15', '#image15-circle2', '#image15', '#Movies');
	
	$('#continueButton').click(function(){
		if(selected == 0)
		{
			alert('Select any interest to continue');
		}
		else if(selected > 0)
		{ 
			 $('#manual_close_1').click();
		}
	});
});