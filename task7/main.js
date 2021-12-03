function show() {
    document.getElementById('block').style.display = "block"
}

function hide() {
    document.getElementById('block').style.display = "none"
}

function check() {
    if(document.getElementById('input').value !== '') {
        hide()
    }else{
        show()
    }
}