const imgSelect = (files) => {
    let file = files[0];
    let reader = new FileReader(); // lectura de etiqueta file
    
    reader.onload = function (e) {
    let output = document.getElementById("fileOutput"); 
    fileOutput.style.backgroundImage = "url('" + e.target.result + "')";
    };
    reader.readAsDataURL(file);
};