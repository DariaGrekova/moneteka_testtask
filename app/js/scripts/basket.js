export function basket() {
    // basket
    const addToBasketBtns = document.querySelectorAll('.add-to-basket');
    let counter = document.querySelector('.counter');

    if (addToBasketBtns) {
        addToBasketBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                addToBasket();
            })
        })

        const addToBasket = function () {
            let counterValue = Number(counter.textContent)
            counterValue += 1;
            counter.textContent = counterValue;
        }
    }
}