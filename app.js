//API KEY 380ab818f47142c6a0b58b098c8a2c02

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=380ab818f47142c6a0b58b098c8a2c02';

const articleContainer = document.getElementById('articles');

var req = new Request(url);
fetch(req)
    .then(function(response) {return response.json()})
    .then(function(data){
    	console.log(data);

    	for(let i = 0; i < 20; i++){

    	let articles = data.articles;
    	let articleAuthor = articles[i].author;
    	let articleTitle = articles[i].title;
    	let articleURL = articles[i].url;
    	let articleImgURL = articles[i].urlToImage;

		//Create Rows
		option = articleContainer.appendChild(document.createElement("div"));
		option.className =  "grid__row";
		
		//Create Columns
		col = option.appendChild(document.createElement('div'));
		col.className = "grid__col--7 theme__colors centered"

		//Create Headline 
		headline = col.appendChild(document.createElement('h4'));
		headline.className = "article--title";
		headline.textContent = articleTitle;

		//Create Image

		image = col.appendChild(document.createElement('img'));
		image.className = "article--image";
		image.src = articleImgURL;

		//hello



	
 
 	   }
    });

// const func = () =>{

// 	for(let i= 0; i < 20; i++){

// 	//Create Rows
// 	option = articleContainer.appendChild(document.createElement("div"));
// 	option.className =  "grid__row";
	
// 	//Create Columns
// 	col = option.appendChild(document.createElement('div'));
// 	col.className = "grid__col--7 theme__colors centered"

// 	//Create Headline 
// 	headline = col.appendChild(document.createElement('h4'));



// 	}
// }

// func();
