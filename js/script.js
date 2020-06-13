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
                localStorage.setItem("technomart-write-name", loginLogin.value);
            }
        }
    })

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === KEYCODE_ESC) {
            if (writeUs.classList.contains("popup-write-us-open")) {
                evt.preventDefault();
                writeUs.classList.remove("popup-write-us-open");
                writeUs.classList.remove("popup-error");
            }
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
        if (evt.keyCode === KEYCODE_ESC) {
            if (inCart.classList.contains("popup-in-cart-open")) {
                evt.preventDefault();
                inCart.classList.remove("popup-in-cart-open");
            }
        }
    })

    var mapFullOpen = document.querySelector(".map-full")
    var mapFull = document.querySelector(".popup-map-full")
    var mapFullClose = mapFull.querySelector(".button-popup-close")

    mapFullOpen.addEventListener("click", function(evt) {
        evt.preventDefault();
        console.log("click")
        mapFull.classList.add("popup-open")
    })
    mapFullClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapFull.classList.remove("popup-open")
    })

    window.addEventListener("keyup", function(evt) {
        if (evt.keyCode === KEYCODE_ESC) {
            evt.preventDefault();
            if (mapFull.classList.contains("popup-open")) {
                mapFull.classList.remove("popup-open");
            }
        }
    })



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
        if (evt.keyCode === KEYCODE_ESC) {
            evt.preventDefault();
            if (inCart.classList.contains("popup-in-cart-open")) {
                inCart.classList.remove("popup-in-cart-open");
            }
        }
    })
}