document.onload = function() {
    console.log("started")
    alert("started");
    callServer()
};

function callServer() {
    var http = new XMLHttpRequest();
    var url = 'https://ijgf82g4o9.execute-api.us-west-2.amazonaws.com/api';
    var body = '{"api_definition_url": "http://petstore.swagger.io/v2/swagger.json"}';
    http.open('POST', url, true);
    http.onreadystatechange = function() {
        alert(http.responseText);
    }
    http.send(body)
}