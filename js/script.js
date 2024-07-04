const icon = document.querySelector('.floating-message i');
const message = document.querySelector('.floating-message p');

icon.addEventListener('mouseover', () => {
    message.style.display = 'block';
});

icon.addEventListener('mouseout', () => {
    message.style.display = 'none';
});


document.querySelectorAll('.copy-address').forEach(copyButton => {
    copyButton.addEventListener('click', function () {
        const address = this.closest('.qr-box').querySelector('.bchain-address b').innerText;
        navigator.clipboard.writeText(address).then(() => {
            this.innerHTML = 'Copied <i class="bx bx-check"></i>';
            this.classList.add('copied');
            setTimeout(() => {
                this.innerHTML = 'Copy wallet address <i class="bx bx-copy"></i>';
                this.classList.remove('copied');
            }, 2000);
        }).catch(error => {
            console.error('Error copying text: ', error);
        });
    });
});


document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const targetId = this.hash.substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});
