

document.addEventListener("DOMContentLoaded", function() {
    console.log("badger");

    var surveyDiv = document.querySelector("#surveyResult");
    var surveyValue = surveyDiv.innerText;

    var baseURL = "https://m.me/1779324532358727?ref=";
    var fullURL =  baseURL + surveyValue;

    var mMeLink = document.createElement("a");
    mMeLink.innerText = "Click Here";
    mMeLink.setAttribute("href", fullURL);
    document.body.appendChild(mMeLink);

});
