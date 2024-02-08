let data = [
    {
        id: "1",
        title: "Test title1",
        detail: "Test detail1",
        rate: 5,
        price: 1999,
    },
    {
        id: "2",
        title: "Test title2",
        detail: "Test detail2",
        rate: 3,
        price: 500,
    },
    {
        id: "3",
        title: "Test title3",
        detail: "Test detail3",
        rate: 1,
        price: 300,
    },
];
const CONSTANT = {
    stage: "MOCK",
    key: {
        searchFieldName: "title",
        priceFieldName: "price"
    }
}
const idResultsList = document.querySelector("#id-results-list");
const datalistOptions = document.querySelector("#datalistOptions");
const inputSearch = document.querySelector("#input-search");
const clearBtn = document.querySelector("#clear-btn");
const searchBtn = document.querySelector("#search-btn");
const idKeyword = document.querySelector("#id-keyword");
const count = document.querySelector("#count");
// const idResultsList = $("#id-results-list");

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('search');
    if(keyword){
        idKeyword.innerHTML = keyword;
        inputSearch.value = keyword;
        autoRun()
        renderResultsList(data, keyword)
    }else{
        idKeyword.text = inputSearch.value
        defaultRun()
        
    }
    // datalistOptions
    $(clearBtn).on('click',() =>{
        inputSearch.value = ''
    })

    $(searchBtn).on('click',() =>{
        console.log("searchBtn: ");
        renderResultsList(data, inputSearch.value)
    })

});

function name(params) {
    
}

function autoRun() {
    console.log('autoRun: ');
    loadSuggession(data);
}

function defaultRun(){
    renderResultsList(data);
    loadSuggession(data);
}

function loadSuggession(params){
    params.map(item => {
        datalistOptions.innerHTML += `
            <option  value="${item.title}">
        `
    });
}

function renderMap(params) {
    
    idResultsList.innerHTML += `
        <div class="col-md-4">
            <div class="card">
                <img 
                src="./assets/default-img.png" 
                class="card-img-top" 
                height="150px" 
                style="object-fit: cover;"
                alt="..."
                >
                <div class="card-body">
                    <h5 class="card-title">${params.title}</h5>
                    <p class="card-text">${params.detail}.</p>
                    <p class="card-list-course-footer d-flex">
                  
                    </p>
                </div>
            </div>
        </div>
    `
}

function renderResultsList(params, keywordParam) {
    if(params){
        idResultsList.innerHTML = ``;
        const res = params
        .filter(itemFil => (itemFil.title || '').includes(keywordParam || ''))
        .map(renderMap)

        count.innerHTML = String(res.length);
    }
}

function clearSearchBox() {
    
}