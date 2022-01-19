const dropArea = document.querySelector(".area"),
    icon = document.querySelector(".icon"),
    image = document.querySelector(".icon i"),
    header = document.querySelector(".area header")

let file;

dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    icon.classList.add("active")
})

dropArea.addEventListener("dragleave", (event) => {
    icon.classList.remove("active")
})

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    let imagesTypes = ["image/jpeg", "image/jpg", "image/png"]
    if(imagesTypes.includes(file.type)) {
        let fileReader = new FileReader()
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}" alt="your image">`;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file)
    }else{
        header.innerText = file.name
        icon.classList.remove("active")
        image.setAttribute("class", "icon fas fa-check")
    }
})