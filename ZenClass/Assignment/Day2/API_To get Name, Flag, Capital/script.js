// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

request.onload = function() {
// Begin accessing JSON data here
var data = JSON.parse(this.response)

for(let i =0; i<data.length; i++)
{
    var a = data[i].name;
    var b = data[i].capital;
    var c = data[i].flag;
    console.log(i,a,b,c)
}

}

// Send request
request.send()
