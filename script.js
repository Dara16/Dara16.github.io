let h2 = document.createElement('h2')
h2.textContent = "Full Stack Software Engineer"

document.querySelector('body').appendChild(h2)

const searchInput = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");

function alertInputBox() {
    alert(searchInput.value)
}

searchButton.addEventListener('click', alertInputBox)

/*function addingEventListener() {
    const input = document.getElementById('home');

    function clickAlert() {
      alert('Welcome to my Website!');
    }
    
    input.addEventListener('click', clickAlert); */



const about = document.getElementsByClassName("card card-1");
function scrollToTop() {
    elmnt.scrollIntoView(true);

}
about.addEventListener('click', scrollToTop)
    

