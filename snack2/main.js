const containerElement = document.getElementById('container');

let N = parseInt(prompt('quanti quadrati vuoi?'));

for (let i ; i <= N ; i++) {
    containerElement.innerHTML += "<div class='box'>" + i + "</div>";

}