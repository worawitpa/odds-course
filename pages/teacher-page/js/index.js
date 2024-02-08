$(document).ready(function() {
    // callAPI()
    calltest()
});

function callAPI(){
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
        // handle success
        console.log(response)
    })
}

function calltest(){
    console.log('test')
}