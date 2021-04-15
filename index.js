// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("Button").style.display = "block";
    } else {
        document.getElementById("Button").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; //after click
    document.documentElement.scrollTop = 0;
}
