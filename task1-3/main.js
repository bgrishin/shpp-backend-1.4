let status = 0
function display () {
    if(status === 0) {
        const blocks = document.getElementsByClassName('block')
        for(let item of blocks) {
            item.style.display = "none"
        }
        status = 1
    }else{
        const blocks = document.getElementsByClassName('block')
        for(let item of blocks) {
            item.style.display = "block"
        }
        status = 0
    }
}