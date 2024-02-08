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
const idKeyword = document.querySelector("#id-keyword");
// const idResultsList = $("#id-results-list");

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('keyword');
    if(keyword){
        idKeyword.text = keyword;
        autoRun()
    }else{
        idKeyword.text = inputSearch.value
        defaultRun()
    }
    // datalistOptions
    $(clearBtn).on('click',() =>{
        inputSearch.value = ''
    })

});

function name(params) {
    
}

function autoRun() {
    console.log('autoRun: ');
}

function defaultRun(){
    renderResultsList(data);
    loadSuggession(data);
}

function loadSuggession(params){
    params.map(item => {
        datalistOptions.innerHTML += `
            <option value="${item.title}">
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
                        <span class="stars-rate flex-grow-1">
                            ${'<i class="bi bi-star-fill stars-rate"></i>'.repeat(Math.floor(params.rate))}
                        </span>
                        <span class="price">
                            <strong>${params.price}฿</strong>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    `
}

function renderResultsList(params, keywordParam) {
    if(params){
        const res = params
        .filter(itemFil => (itemFil.tltle || '').includes(keywordParam || ''))
        .map(renderMap)
    }
}

function clearSearchBox() {
    
}

