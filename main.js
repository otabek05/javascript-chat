let harf1 = document.getElementById('harf1')
let harf2 = document.getElementById('harf2')
let chat1 = document.querySelector('.forA')
let chat2 = document.querySelector('.forB')
let kirish1 = document.getElementById('sub1')
let kirish2 = document.getElementById('sub2')

kirish1.addEventListener('click', e => {
    let newcha = document.createElement('div')
    if(harf1.value==='' && harf1.value==null ) return;
    newcha.innerHTML = 'Mr.A' + ': ' + harf1.value + '<br>';
    chat1.appendChild(newcha)
    harf1.value = " "
})
kirish2.addEventListener('click', e => {
    let newcha = document.createElement('span')
    newcha.innerHTML = 'Mr. B:' + ' ' + harf2.value + "<br>"
    chat1.appendChild(newcha)
    harf2.value = " "
})
harf1.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        let newcha = document.createElement('div')
        newcha.innerHTML = 'Mr.A' + ': ' + harf1.value + '<br>';
        chat1.appendChild(newcha)
        harf1.value = " "
    }
})
harf2.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        let newcha = document.createElement('span')
        newcha.innerHTML = 'Mr. B:' + ' ' + harf2.value + "<br>"
        chat1.appendChild(newcha)
        harf2.value = " "
    }
})