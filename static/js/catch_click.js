$('document').ready(function(){	
	$('#showButton').click(function(){

		    $.ajax({
	        url: '/get_tweets/',

	        dataType: 'json',

	        success: function (data) {
				        var step;
				        
				        if(data.b_val >= data.total_count){
				        	alert("No tweets are available");
				        }
				        else{

						for (step = 0; step < 5; step++) {
						  // Runs 5 times, with values of step 0 through 4.

						  	        	var data1 =
			                                               '<div class="feed-element">' + '\n' +
			                                                    '<div class="media-body ">' + '\n' +
			                                                        
			                                                        '<strong>'+data.p_name[step]+'</strong> <br>' + '\n' +
			                                                        '<small class="text-muted">Yesterday 5:20 pm - 12.06.2014</small>' + '\n' +
			                                                        '<div class="well">' + '\n' + data.tweet[step] 
			                                                        '</div>' + '\n' +
			                                                        '<div class="pull-right">' + '\n' +

			                                                    '</div>' + '\n' +
			                                                '</div>';
				        	$('#feed1').append(data1);
						  
						}
					}

				            //alert(data.tweet);
			}
	      });



	 });
	function code()
	{

		    $.ajax({
	        url: '/get_tweets/',
	        data: {
          		'on_load': 'first'
        	},

	        dataType: 'json',

	        success: function (data) {
				        var step;
						for (step = 0; step < 5; step++) {
						  // Runs 5 times, with values of step 0 through 4.

						  	        	var data1 =
			                                               '<div class="feed-element">' + '\n' +
			                                               		'<div class="media-body ">' + '\n' +
			                                               			'<strong>'+data.p_name[step]+'</strong> <br>' + '\n' +
			                                                        '<small class="text-muted">'+data.tweet_date_timing[step]+'  '+data.tweet_time[step] +'</small>' + '\n' +
			                                                        '<div class="well">' + '\n' + data.tweet[step] +'</div>' + '\n' +
			                                                        
			                                                    '</div>' + '\n' +
			                                                '</div>';
				        	$('#feed1').append(data1);
						  
						}
				            //alert(data.tweet);
			}
	      });


	}
	code();
});

