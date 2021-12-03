let status = 0
function search() {
    const request = document.getElementById('input').value
    const response = document.querySelectorAll(request)
    if(status === 0) {
        for(let item of response) {
            item.style.display = "block";
        }
        status = 1
    }else{
        for(let item of response) {
            item.style.display = "none";
        }
        status = 0
    }
}