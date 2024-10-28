
// Sayfa aşağı kaydığında butonu göster
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var topButton = document.getElementById("topButton");
    
    // Sayfa 20px aşağı inerse buton görünür hale gelsin
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// Butona tıklanınca sayfanın en üstüne çık
function scrollToTop() {
    document.body.scrollTop = 0; // Safari için
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE ve Opera için
}