var submitbtn = document.getElementById('submitbtn')
submitbtn.addEventListener('click',filterResults)

var baseUrl = https://www.loc.gov/search/



function filterResults() {
    
    fetch()
        .then(function (response) {
          if (response.ok) {
             .then response.json();
          }
    
          return response.json();
        })
    
}