function changeBackgroundColor(color){
    let section = document.getElementById('information');
    section.style.backgroundColor = color;
}

document.getElementById('information').addEventListener('click', () => changeBackgroundColor("#2CA02C"));
document.getElementById('home').addEventListener('click', () => changeBackgroundColor("#FF7F0E"));

document.getElementById('contact').addEventListener('click', () => changeBackgroundColor("#9467BD"));

