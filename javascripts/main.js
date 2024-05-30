document.querySelectorAll('.color-scheme-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.documentElement.setAttribute('data-scheme', this.dataset.scheme);
    });
});
