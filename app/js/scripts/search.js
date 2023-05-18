export function search() {
    // search
    const searchBtn = document.querySelector('.search-btn');
    const searchBlock = document.querySelector('.search-block');
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navigation');

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchBlock.classList.toggle('_active');
        searchBtn.classList.toggle('_active');
        document.body.style.overflow = searchBlock.classList.contains('_active') ? 'hidden' : '';

        if (menu.classList.contains('_active')) {
            menu.classList.remove('_active');
            menuBtn.classList.remove('_active');
        }
    });
}