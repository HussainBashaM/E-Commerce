/* =========================================
   SHOPSPHERE - FRONTEND JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       VARIABLES
    ===================================== */

    let cartCount = 0;
    let wishlistCount = 0;

    const cartCountElement =
        document.getElementById("cartCount");

    const wishlistCountElement =
        document.getElementById("wishlistCount");

    const searchInput =
        document.getElementById("searchInput");

    const products =
        document.querySelectorAll(".product-card");

    const emptyState =
        document.getElementById("emptyState");

    const toast =
        document.getElementById("toast");

    const toastTitle =
        document.getElementById("toastTitle");

    const toastMessage =
        document.getElementById("toastMessage");


    /* =====================================
       UPDATE CART COUNT
    ===================================== */

    function updateCartCount() {

        cartCountElement.textContent = cartCount;

        if (cartCount > 0) {
            cartCountElement.style.display = "grid";
        } else {
            cartCountElement.style.display = "none";
        }
    }


    /* =====================================
       UPDATE WISHLIST COUNT
    ===================================== */

    function updateWishlistCount() {

        wishlistCountElement.textContent = wishlistCount;

        if (wishlistCount > 0) {
            wishlistCountElement.style.display = "grid";
        } else {
            wishlistCountElement.style.display = "none";
        }
    }


    updateCartCount();
    updateWishlistCount();


    /* =====================================
       TOAST NOTIFICATION
    ===================================== */

    let toastTimer;

    function showToast(title, message) {

        toastTitle.textContent = title;
        toastMessage.textContent = message;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }


    document
        .getElementById("closeToast")
        .addEventListener("click", () => {

            toast.classList.remove("show");

        });


    /* =====================================
       ADD TO CART
    ===================================== */

    const addCartButtons =
        document.querySelectorAll(".add-cart");

    addCartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productName =
                button.dataset.product;

            cartCount++;

            updateCartCount();

            showToast(
                "Added to cart",
                `${productName} was added successfully.`
            );

            /* Button animation */

            const originalHTML =
                button.innerHTML;

            button.innerHTML =
                '<i class="fa-solid fa-check"></i>';

            button.style.background =
                "#2e9b62";

            setTimeout(() => {

                button.innerHTML =
                    originalHTML;

                button.style.background = "";

            }, 1000);

        });

    });


    /* =====================================
       WISHLIST
    ===================================== */

    const wishlistButtons =
        document.querySelectorAll(".wishlist-btn");

    wishlistButtons.forEach(button => {

        button.addEventListener("click", () => {

            const isLiked =
                button.classList.contains("liked");

            if (isLiked) {

                button.classList.remove("liked");

                button.innerHTML =
                    '<i class="fa-regular fa-heart"></i>';

                wishlistCount--;

                showToast(
                    "Removed from wishlist",
                    "Product removed from your wishlist."
                );

            } else {

                button.classList.add("liked");

                button.innerHTML =
                    '<i class="fa-solid fa-heart"></i>';

                wishlistCount++;

                showToast(
                    "Added to wishlist",
                    "Product saved to your wishlist."
                );

            }

            updateWishlistCount();

        });

    });


    /* =====================================
       PRODUCT FILTER
    ===================================== */

    const filterButtons =
        document.querySelectorAll(".tab-btn");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter =
                button.dataset.filter;

            let visibleProducts = 0;

            products.forEach(product => {

                const category =
                    product.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    product.style.display = "";

                    visibleProducts++;

                } else {

                    product.style.display = "none";

                }

            });


            if (visibleProducts === 0) {

                emptyState.style.display = "block";

            } else {

                emptyState.style.display = "none";

            }

        });

    });


    /* =====================================
       SEARCH
    ===================================== */

    searchInput.addEventListener("input", () => {

        const searchTerm =
            searchInput.value
                .trim()
                .toLowerCase();

        let visibleProducts = 0;

        products.forEach(product => {

            const productName =
                product.dataset.name.toLowerCase();

            const productCategory =
                product.dataset.category.toLowerCase();

            if (
                productName.includes(searchTerm) ||
                productCategory.includes(searchTerm)
            ) {

                product.style.display = "";

                visibleProducts++;

            } else {

                product.style.display = "none";

            }

        });


        if (visibleProducts === 0) {

            emptyState.style.display = "block";

        } else {

            emptyState.style.display = "none";

        }


        /* Reset category filter */

        if (searchTerm.length > 0) {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

        } else {

            filterButtons.forEach(btn => {

                if (btn.dataset.filter === "all") {
                    btn.classList.add("active");
                }

            });

        }

    });


    /* =====================================
       CATEGORY CARDS
    ===================================== */

    const categoryCards =
        document.querySelectorAll(".category-card");

    categoryCards.forEach(card => {

        card.addEventListener("click", () => {

            const category =
                card.dataset.category.toLowerCase();

            let filter = "all";

            if (category === "fashion") {
                filter = "fashion";
            }

            if (category === "electronics") {
                filter = "electronics";
            }

            if (category === "accessories") {
                filter = "accessories";
            }

            if (category === "shoes") {
                filter = "fashion";
            }

            if (category === "home") {
                showToast(
                    "Coming Soon",
                    "Home & Living products will be available soon."
                );

                return;
            }


            const targetButton =
                document.querySelector(
                    `.tab-btn[data-filter="${filter}"]`
                );

            if (targetButton) {

                targetButton.click();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

        });

    });


    /* =====================================
       QUICK VIEW
    ===================================== */

    const quickViewButtons =
        document.querySelectorAll(".quick-view");

    quickViewButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.stopPropagation();

            const card =
                button.closest(".product-card");

            const productName =
                card.dataset.name;

            const price =
                card.querySelector(".price strong")
                    .textContent;

            showToast(
                "Quick View",
                `${productName} — ${price}`
            );

        });

    });


    /* =====================================
       CART BUTTON
    ===================================== */

    document
        .getElementById("cartButton")
        .addEventListener("click", () => {

            if (cartCount === 0) {

                showToast(
                    "Your cart is empty",
                    "Add some products to get started."
                );

            } else {

                showToast(
                    "Shopping Cart",
                    `You have ${cartCount} item(s) in your cart.`
                );

            }

        });


    /* =====================================
       LOGIN BUTTON
    ===================================== */

    document
        .getElementById("loginButton")
        .addEventListener("click", () => {

            showToast(
                "Login",
                "Login page will be added in the next phase."
            );

        });


    /* =====================================
       MOBILE MENU
    ===================================== */

    const mobileMenuButton =
        document.getElementById("mobileMenuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    mobileMenuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("show");

        const icon =
            mobileMenuButton.querySelector("i");

        if (mobileMenu.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close mobile menu after navigation */

    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("show");

                const icon =
                    mobileMenuButton.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });


    /* =====================================
       MOBILE LOGIN
    ===================================== */

    document
        .getElementById("mobileLogin")
        .addEventListener("click", () => {

            showToast(
                "Login",
                "Login page will be added in the next phase."
            );

            mobileMenu.classList.remove("show");

        });


    /* =====================================
       NEWSLETTER
    ===================================== */

    const newsletterForm =
        document.getElementById("newsletterForm");

    newsletterForm.addEventListener("submit", event => {

        event.preventDefault();

        const email =
            document.getElementById("emailInput").value.trim();

        if (!email) {
            return;
        }

        showToast(
            "Subscription successful",
            "Thanks for subscribing to ShopSphere!"
        );

        newsletterForm.reset();

    });


    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const navLinks =
        document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });


    /* =====================================
       SCROLL NAVIGATION
    ===================================== */

    const sections =
        document.querySelectorAll("main section[id]");

    window.addEventListener("scroll", () => {

        const scrollPosition =
            window.scrollY + 150;

        sections.forEach(section => {

            const top =
                section.offsetTop;

            const height =
                section.offsetHeight;

            const id =
                section.getAttribute("id");

            if (
                scrollPosition >= top &&
                scrollPosition < top + height
            ) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") === `#${id}`
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    });


    /* =====================================
       INITIAL STATE
    ===================================== */

    console.log(
        "ShopSphere frontend initialized successfully."
    );

});
