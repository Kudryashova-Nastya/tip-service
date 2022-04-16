// toTopButton
var mybutton = document.getElementById("button-up");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// fullpage scroll
new fullpage('#fullpage', {
    autoScrolling: true,
    loopBottom: true,
    loopTop: false,
    lockAnchors: false,
    animateAnchor: true,
    anchors: ['block1', 'block2', 'block3', 'block4']
});

fullpage_api.setAllowScrolling(true);

function jump() {
    let top = document.getElementById('transfer-money').offsetTop; //Getting Y of target element
    window.scrollTo(0, top);                        //Go there directly or some transition
    // window.scrollTo(0,document.body.scrollHeight);
}