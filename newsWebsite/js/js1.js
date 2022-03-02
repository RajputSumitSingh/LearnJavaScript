console.log("hello world");
let myAPI = "4cb15ee9e4354069b090ea5ce5caf80f";
let source = "bbc-news";

//grab the news  container
let newsAccordian = document.getElementById('newsAccordian');


//create the ajax get request
const xhr = new XMLHttpRequest();

xhr.open('get', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${myAPI}`, true);

xhr.onload = function () {
  if (this.status == 200) {

    let json = JSON.parse(this.responseText);
    articles = json.articles;
    
    newsHtml = "";
    articles.forEach(function(element,index) {

      // console.log(element);
      let news1 = `<div class="card noteCards">
                        <div class="card-header" id="heading${index}">
                          <h2 class="mb-2">
                            <button class="btn btn-link" style="text-decoration: none;" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                              ${element["title"]}
                            </button>
                          </h2>
                        </div>

                        <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                          <div class="card-body">
                          
                          <img sizes="8px" style=" max-width: 100%;" src="${element["urlToImage"]}" alt="image" width="400" height="200">
                          <br><br>
                     <span class = "description"> ${element["description"]}</span><a href="${element["url"]}" style="text-decoration: none;" target="_blank">more...</a>
                          </div>
                        </div>
                        </div> <br><br>`;
                        

                        newsHtml += news1;
      
    });
    newsAccordian.innerHTML = newsHtml;
  } else {
    console.log("some errror occured");
  }
}

xhr.send();

//searching items

//for searching the item
let searchItem = document.getElementById('searchItem');
searchItem.addEventListener('input',function(){

  let input = searchItem.value;
  // console.log(input);

  let noteCards = document.getElementsByClassName('noteCards');
  Array.from(noteCards).forEach(function(element){
    let buttonText = element.getElementsByTagName('button')[0].innerText;
    let discription = element.getElementsByClassName('description')[0].innerText;
    console.log(discription.innerText);
    if(buttonText.includes(input) || discription.includes(input)){
      element.style.display = "block";
      

    }else{
      element.style.display = "none";

    }
  });
});



