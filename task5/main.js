let status = 0
function yellowblock() {
    if(status === 0) {
        document.getElementById('text').style.display = "inline"
        status = 1
    }else{
        document.getElementById('text').style.display = "none"
        document.getElementById('block').style.display = "none"
    }
}