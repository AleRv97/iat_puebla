define(['pipAPI', 'https://alerv97.github.io/iat_puebla/iat/template_main.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Mexicanos', //Will appear in the data.
			title : {
				media : {word : 'Mexicanos'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'JJCorona.png'},  
    			{image : 'silvanaestrada.png'}, 
    			{image : 'yalitza-aparicio.png'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Europeos', //Will appear in the data.
			title : {
				media : {word : 'Europeos'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'brady.png'},  
    			{image : 'emma.png'}, 
    			{image : 'taylor.png'}			
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://alerv97.github.io/iat_puebla/iat/imagenes/'
		} 
	});
});
