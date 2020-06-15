var KEYCODE_ESC = 27;
if (document.body.classList.contains("page-body-index")) {
    var writeUsOpen = document.querySelector(".button-write-us");
    var writeUs = document.querySelector(".popup-write-us-form");
    var writeUsClose = writeUs.querySelector(".button-popup-close");
    var writeUsForm = writeUs.querySelector(".write-us-form");
    var writeUsName = writeUsForm.querySelector(".form-name");
    var writeUsEmail = writeUsForm.querySelector(".form-email");

    var isStorageSupport = true;
    var storage;

    try {
        storage = localStorage.getItem("technomart-write-name");
    } catch (err) {
        isStorageSupport = false;
    }

    writeUsOpen.addEventListener("click", function(evt) {
        evt.preventDefault();
        writeUs.classList.add("popup-write-us-open");
        if (storage) {
            writeUsName.value = storage;
            writeUsEmail.focus();
        } else {

            writeUsName.focus();
        }
    })

    writeUsClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        writeUs.classList.remove("popup-write-us-open");
        writeUs.classList.remove("popup-error");
    })

    writeUsForm.addEventListener("submit", function(evt) {
        if (!writeUsName.value || !writeUsEmail.value) {
            evt.preventDefault();
            writeUs.classList.remove("popup-error");
            writeUs.offsetWidth = writeUs.offsetWidth;
            writeUs.classList.add("popup-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("technomart-write-name", writeUsName.value);
            }
        }
    })

    window.addEventListener("keydown", function(evt) {
        if ((evt.keyCode === KEYCODE_ESC) && writeUs.classList.contains("popup-write-us-open")) {
            evt.preventDefault();
            writeUs.classList.remove("popup-write-us-open");
            writeUs.classList.remove("popup-error");
        }
    })

    var inCart = document.querySelector(".popup-in-cart")
    var inCartOpen = document.querySelectorAll(".btn-buy")
    var inCartClose = inCart.querySelector(".button-popup-close")
    var inCartContinue = inCart.querySelector(".button-continue")

    for (inCartOpenElement of inCartOpen) {
        inCartOpenElement.addEventListener("click", function(evt) {
            evt.preventDefault();
            inCart.classList.add("popup-in-cart-open");
        })
    }
    inCartClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        inCart.classList.remove("popup-in-cart-open");
    })
    inCartContinue.addEventListener("click", function(evt) {
        evt.preventDefault();
        inCart.classList.remove("popup-in-cart-open");
    })

    window.addEventListener("keyup", function(evt) {
        if ((evt.keyCode === KEYCODE_ESC) && inCart.classList.contains("popup-in-cart-open")) {
            evt.preventDefault();
            inCart.classList.remove("popup-in-cart-open");
        }
    })

    var mapFullOpen = document.querySelector(".map-full")
    var mapFull = document.querySelector(".popup-map-full")
    var mapFullClose = mapFull.querySelector(".button-popup-close")

    mapFullOpen.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapFull.classList.add("popup-open")
    })
    mapFullClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapFull.classList.remove("popup-open")
    })

    window.addEventListener("keyup", function(evt) {
        if ((evt.keyCode === KEYCODE_ESC) && mapFull.classList.contains("popup-open")) {
            evt.preventDefault();
            mapFull.classList.remove("popup-open");
        }
    })

    //Слайдер только для двух слайдов

    var promoSlider = document.querySelector(".offers-promo");
    var nextCard = promoSlider.querySelector(".slider-next");
    var previousCard = promoSlider.querySelector(".slider-previous");
    var sliderCards = promoSlider.querySelectorAll(".slider-card");
    var sliderInputs = promoSlider.querySelectorAll(".slider-input");

    nextCard.addEventListener("click", function(evt) {
        evt.preventDefault();
        for (sliderCard of sliderCards) {
            sliderCard.classList.toggle("slider-card-current");
        }
        for (sliderInput of sliderInputs) {
            sliderInput.classList.toggle("slider-current");
        }
        if (promoSlider.classList.contains("offers-promo-first")) {
            promoSlider.classList.remove("offers-promo-first");
            promoSlider.classList.add("offers-promo-second");
        } else {
            promoSlider.classList.remove("offers-promo-second");
            promoSlider.classList.add("offers-promo-first");
        }
    })
    previousCard.addEventListener("click", function(evt) {
        evt.preventDefault();
        for (sliderCard of sliderCards) {
            sliderCard.classList.toggle("slider-card-current");
        }
        for (sliderInput of sliderInputs) {
            sliderInput.classList.toggle("slider-current");
        }
        if (promoSlider.classList.contains("offers-promo-first")) {
            promoSlider.classList.remove("offers-promo-first");
            promoSlider.classList.add("offers-promo-second");
        } else {
            promoSlider.classList.remove("offers-promo-second");
            promoSlider.classList.add("offers-promo-first");
        }
    })

    //Слайдер. номер кнопки должен соответствовать номеру карточки
    var serviceSlider = document.querySelector(".service-slider")
    var serviceButtons = serviceSlider.querySelectorAll(".service-item")
    var serviceCards = serviceSlider.querySelectorAll(".service-card")

    for (let i = 0; i < serviceButtons.length; i++) {
        serviceButtons[i].addEventListener("click", function(evt) {
            evt.preventDefault();
            let activeButtom = serviceSlider.querySelector(".service-item-active");
            activeButtom.classList.remove("service-item-active");
            serviceButtons[i].classList.add("service-item-active");

            let activeCard = serviceSlider.querySelector(".service-card-active");
            activeCard.classList.remove("service-card-active");
            serviceCards[i].classList.add("service-card-active");
        })
    }
}




if (document.body.classList.contains("page-body-catalog")) {
    var inCart = document.querySelector(".popup-in-cart")
    var inCartOpen = document.querySelectorAll(".btn-buy")
    var inCartClose = inCart.querySelector(".button-popup-close")
    var inCartContinue = inCart.querySelector(".button-continue")

    for (inCartOpenElement of inCartOpen) {
        inCartOpenElement.addEventListener("click", function(evt) {
            evt.preventDefault();
            inCart.classList.add("popup-in-cart-open");
        })
    }
    inCartClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        inCart.classList.remove("popup-in-cart-open");
    })
    inCartContinue.addEventListener("click", function(evt) {
        evt.preventDefault();
        inCart.classList.remove("popup-in-cart-open");
    })

    window.addEventListener("keyup", function(evt) {
        if ((evt.keyCode === KEYCODE_ESC) && inCart.classList.contains("popup-in-cart-open")) {
            evt.preventDefault();
            inCart.classList.remove("popup-in-cart-open");
        }
    })
}