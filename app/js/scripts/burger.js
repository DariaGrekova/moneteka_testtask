export function burger() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navigation');
    const closeBtn = document.querySelector('.close-menu-btn');
    const searchBtn = document.querySelector('.search-btn');
    const searchBlock = document.querySelector('.search-block');

    if (menuBtn) {

        menuBtn.addEventListener('click', function () {
            menuBtn.classList.add('_active');
            menu.classList.add('_active');
            document.body.style.overflow = menu.classList.contains('_active') ? 'hidden' : '';

            if (searchBlock.classList.contains('_active')) {
                searchBlock.classList.remove('_active');
                searchBtn.classList.remove('_active');
            }
        });

        closeBtn.addEventListener('click', function () {
            menuBtn.classList.remove('_active');
            menu.classList.remove('_active');
            document.body.style.overflow = menu.classList.contains('_active') ? 'hidden' : '';
        });

        window.addEventListener('resize', function () {
            if (menu.classList.contains('_active')) {
                menuBtn.classList.remove('_active');
                menu.classList.remove('_active');
                document.body.style.overflow = '';
            }
        });
    }
}