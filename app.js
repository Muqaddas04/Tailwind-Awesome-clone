//fetch("https://jsonplaceholder.typicode.com/posts")
//.then((response) => response.json())
//.then((json) => showPosts(json));

//ОБЫЧНАЯ ФУНКЦИЯ
// async function getData() {
// let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//data = await responce.json()
//};
//СТРЕЛОЧНАЯ ФУНКЦИЯ
//const getData = async () => {
//let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//data = await response.json();
//};

//function showPosts(posts) {
//mainCards.innerHTML = posts
//.map((post) => {
//return `<div class="w-[30%]">
//<div class="bg-gray-400 h-52 rounded-lg"></div>
//<p class="font-bold text-xl mt-2>${item.title}></p>
//<p class="text-gray-400 text-sm mt-2">
//${item.body}
//</p>
//</div>
//`;
//})
//.join("");
//}

//function showSearchPosts(posts) {
//data.map((item) => {
//if (item.title.includes(search.value)) {
//console.log(true);
//} else{
//console.log(false)
//}
//});
//}

const mainCards = document.querySelector("#main-cards");
const search = document.querySelector("#search");
const searchButton = document.querySelector("#searchButton");
getData();

let data;

searchBtn.addEventListener("click", showSearchPosts);

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await responce.json();
  showPosts(data); //без showposts функция будет работать но не будет отображаться
}

function showSearchPosts() {
  let results = data.filter((item) => {
    if (item.title.includes(search.value)) {
      return item;
    }
  });
  showPosts(results);
}

function showSearchPosts(posts) {
  let result = data.filter((item) => {
    if (item.title.includes(search.value)) {
      return item;
    }
  });

  mainCards.innerHTML = posts
    .map((post) => {
      return `<div class="w-[30%]">
    <div class="bg-gray-400 h-52 rounded-lg"></div>
        <p class="font-bold text-xl mt-2>${item.title}></p>
        <p class="text-gray-400 text-sm mt-2">
        ${item.body}
        </p> 
        </div>
`;
    })
    .join("");
}
