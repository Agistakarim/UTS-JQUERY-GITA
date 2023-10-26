function lampu (sw) {
    let pic;
    if (sw = 1){
        pic = "image/lampuhidup.gif";
    } else if (sw = 2){
        pic = "Image/giphy.gif";
    } else {
        pic = "image/lampumati.gif";
    }
    document.getElementById("lampimage"),src = pic;
}