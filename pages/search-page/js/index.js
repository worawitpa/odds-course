let data = [];
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
    axios.post("http://172.28.7.125:3000/class_master/list",{}, {
        headers: {
          'Content-Type': 'application/json'
        }
        // other configuration there
      })
      .then(function (response) {
        data = response.data
        renderResultsList(data, keyword)
        loadSuggession(data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    ;
    renderResultsList(data, keyword)
    if(keyword){
        idKeyword.innerHTML = keyword;
        inputSearch.value = keyword;
        autoRun()
        renderResultsList(data, keyword)
    }else{
        idKeyword.innerHTML = inputSearch.value
        autoRun()
        defaultRun()
        
    }
    // datalistOptions
    $(clearBtn).on('click',() =>{
        inputSearch.value = ''
    })

    $(searchBtn).on('click',() =>{
        console.log("searchBtn: ");
        renderResultsList(data, inputSearch.value)
        idKeyword.innerHTML = inputSearch.value
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
            <option  value="${item.class_name}">
        `
    });
}

function renderMap(params) {
    
    idResultsList.innerHTML += `
        <div class="col-md-6">
            <div class="card">
                <img 
                src="${params.class_picture}" 
                class="card-img-top" 
                height="150px" 
                style="object-fit: cover;"
                alt="..."
                >
                <div class="class-card">
                    <h5 class="card-title">${params.class_name}</h5>
                    <p class="card-text" style="overflow: hidden;
                    text-overflow: ellipsis; height: 100px;">${params.class_description}.</p>
                    <p class="card-list-course-footer d-flex">
                    <p class="card-list-course-footer d-flex">
                    <span class="stars-rate flex-grow-1">
                        ${'<i class="bi bi-star-fill stars-rate"></i>'.repeat(Math.floor(params.rate))}
                    </span>
                    <span class="price">
                        <strong>${params.price}฿</strong>
                    </span>
                </p>
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
        .filter(itemFil => (itemFil.class_name || '').includes(keywordParam || ''))
        .map(renderMap)

        count.innerHTML = String(res.length);
    }
}

function clearSearchBox() {
    
}