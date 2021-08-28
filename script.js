var submitbtn = document.getElementById('submitbtn')
var userInputText = document.getElementById('userTextInput').value
submitbtn.addEventListener('click',filterResults)

var baseUrl = `https://www.loc.gov/? +${maps}&q=Iceland&fo=json`



function filterResults(baseUrl) {
    fetch(baseUrl)
   .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
}

    console.log(userInputText)
    
filterResults(baseUrl)