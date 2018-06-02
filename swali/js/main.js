window.onload = function(event) {
    console.log("onload")
    document.getElementById("submitButton").addEventListener("click", function() {
        console.log("apiLink: " + apiLink)
        var apiLink = document.getElementById("apiPathInput").value
        callServer(apiLink)
    })
};

function callServer(apiLink) {
    console.log("apiLink: " + apiLink)
    var http = new XMLHttpRequest();
    var url = 'https://ijgf82g4o9.execute-api.us-west-2.amazonaws.com/api';
    var body = '{"api_definition_url": "' + apiLink + '"}';
    http.open('POST', url, true);
    http.onreadystatechange = function() {
        if (http.readyState === 4) {
            // alert("" + http.status + " " + http.responseText);
            document.getElementById("result").innerText = http.responseText
        }
    }
    http.send(body)
}
