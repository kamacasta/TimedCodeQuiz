// universal variables
const topQuizScores = document.querySelector('.topQuizScores');
const removeScores = document.querySelector('.removeScores');
const returnIndex = document.querySelector('.return');
const deleteBtn = document.querySelector('#delete');
const initalsScore= document.querySelector('initials');

// Event listner(s) listening for click to return to index.html
returnIndex.addEventListener('click', index => {
    // window.location will change send the quizer from scoreboard.html to index.html
    window.location.replace('./index.html');
});
function scoreboard() {
    var p = document.createElement('p');
    p.appendChild(document.createTextNode("- " + initalsScore + " - " + topQuizScores))
    list.appendChild(p);
}

deleteBtn.addEventListener('click', index => {
    topQuizScores.innerHTML = "";
    localStorage.clear();
})