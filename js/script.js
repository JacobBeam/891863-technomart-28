if (document.querySelector("body").classList.contains("page-body-index")) {
    var writeUsOpen = document.querySelector(".button-write-us");
    var writeUs = document.querySelector(".popup-write-us-form");
    var writeUsClose = writeUs.querySelector(".button-popup-close");
    var writeUsForm = writeUs.querySelector(".write-us-form");
    var writeUsName = writeUsForm.querySelector(".form-name");
    var writeUsEmail = writeUsForm.querySelector(".form-email");

    var isStorageSupport = true;
    var storage;

    try {
        storage = localStorage.getItem("name");
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
                localStorage.setItem("name", loginLogin.value);
            }
        }
    })

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (writeUs.classList.contains("popup-write-us-open")) {
                evt.preventDefault();
                writeUs.classList.remove("popup-write-us-open");
                writeUs.classList.remove("popup-error");
            }
        }
    })
}
if (document.querySelector("body").classList.contains("page-body-catalog")) {
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

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (inCart.classList.contains("popup-in-cart-open")) {
                evt.preventDefault();
                inCart.classList.remove("popup-in-cart-open");
            }
        }
    })
}