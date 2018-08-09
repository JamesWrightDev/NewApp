//API KEY 380ab818f47142c6a0b58b098c8a2c02
let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=380ab818f47142c6a0b58b098c8a2c02';


const buttons = document.getElementById('buttons');
const articleContainer = document.getElementById('articles');




buttons.addEventListener('click', function(e) {

    let query = null;

    if (e.target.tagName == 'BUTTON') {
        if (e.target.innerHTML == 'World News') {
            query = 'q=world&'
            console.log(e.target)
        } else if (e.target.innerHTML == 'Movies') {
            query = 'q=movies&'

        } else if (e.target.innerHTML == 'Tech') {
            query = 'q=tech&'

        } else if (e.target.innerHTML == 'Gaming') {
            query = 'q=games&'

        }

    }



    let url = 'https://newsapi.org/v2/top-headlines?' +
        query +
        'apiKey=380ab818f47142c6a0b58b098c8a2c02';

    console.log(url)

    beginFetch(url)


})




//a is URL
const beginFetch = (a) => {

    var req = new Request(a);


    fetch(req)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);

            while (articleContainer.firstChild) {
                articleContainer.removeChild(articleContainer.firstChild);
            }
            for (let i = 0; i < 20; i++) {

                let articles = data.articles;
                let articleAuthor = articles[i].author;
                let articleTitle = articles[i].title;
                let articleURL = articles[i].url;
                let articleImgURL = articles[i].urlToImage;


                //Create Rows


                //Create Columns
                col = articleContainer.appendChild(document.createElement('div'));
                col.className = "col-lg-9 text-center"

                //Create Headline 
                headline = col.appendChild(document.createElement('h4'));
                headline.className = "article--title";
                headline.textContent = articleTitle;

                //Create Image
                image = col.appendChild(document.createElement('img'));
                image.className = "article--image";
                image.src = articleImgURL;

                console.log('Fetch Run with URL' + url)

            }
        });
}

beginFetch(url);






