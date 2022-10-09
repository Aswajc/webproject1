const smileface = document.querySelector('.smile')
const scaryface = document.querySelector('.scary')

smileface.addEventListener('click',() => {
    if(scaryface.classList.contains('scary')) {
        scaryface.classList.add('active');
        smileface.classList.remove('active')
    }
});

scaryface.addEventListener('click',() => {
    if(smileface.classList.contains('smile')) {
        smileface.classList.add('active');
        scaryface.classList.remove('active')
    }
});