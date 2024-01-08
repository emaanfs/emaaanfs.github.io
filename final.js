let inputbox = document.querySelectorAll('.inputBox');

window.onscroll = () => {
    inputbox.forEach(box => {
        let top = window.scrollY;
        let offset = box.offsetTop - 150;
        let height =box.offsetHeight;

        if (top >= offset && top < offset + height ) {
            box.classList.add('show-animate');
        }
        else {
            box.classList.remove('show-animate');
        }
    })
}