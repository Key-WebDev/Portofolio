document.querySelectorAll('.header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
          e.preventDefault();

                              const targetId = this.getAttribute('href');
          const target = document.querySelector(targetId);
          const headerHeight = document.querySelector('.header').offsetHeight;

                              const offsetTop =
                                      target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;

                              window.scrollTo({
                                      top: offsetTop,
                                      behavior: 'smooth'
                              });
    });
});
