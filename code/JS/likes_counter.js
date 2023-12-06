// const like = document.getElementsByClassName('like')[0];

const likes = document.getElementsByClassName('like');

function liked_notliked() {

    console.log('ok');

    if (elem.getAttribute('src') === 'images/not_liked.svg') {
        elem.setAttribute('src', 'images/liked.svg');

    }
    else if (elem.getAttribute('src') === 'images/liked.svg') {
        elem.setAttribute('src', 'images/not_liked.svg');
    }

}

// while (true) {
//     for (l in likes) {
//         l.addEventListener('click', liked_notliked)
//     }
// }


likes[0].addEventListener('click', liked_notliked);

