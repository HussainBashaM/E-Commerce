/* =========================================
   SHOPSPHERE PRODUCTS PAGE
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       ELEMENTS
    ===================================== */

    const productsGrid =
        document.getElementById("productsGrid");

    const products =
        [...document.querySelectorAll(".shop-product-card")];

    const searchInput =
        document.getElementById("productSearch");

    const categoryFilters =
        document.querySelectorAll(".category-filter");

    const minPrice =
        document.getElementById("minPrice");

    const maxPrice =
        document.getElementById("maxPrice");

    const ratingFilters =
        document.querySelectorAll(
            'input[name="rating"]'
        );

    const discountFilter =
        document.getElementById("discountFilter");

    const sortProducts =
        document.getElementById("sortProducts");

    const showingCount =
        document.getElementById("showingCount");

    const emptyState =
        document.getElementById("productsEmpty");

    const clearFilters =
        document.getElementById("clearFilters");

    const emptyClearBtn =
        document.getElementById("emptyClearBtn");

    const applyFilters =
        document.getElementById("applyFilters");

    const mobileFilterBtn =
        document.getElementById("mobileFilterBtn");

    const filterSidebar =
        document.getElementById("filterSidebar");


    /* =====================================
       CART / WISHLIST
    ===================================== */

    let cartCount =
        Number(localStorage.getItem("shopSphereCart")) || 0;

    let wishlistCount =
        Number(localStorage.getItem("shopSphereWishlist")) || 0;


    const cartCountElement =
        document.getElementById("cartCount");

    const wishlistCountElement =
        document.getElementById("wishlistCount");


    function updateCounters() {

        cartCountElement.textContent =
            cartCount;

        wishlistCountElement.textContent =
            wishlistCount;


        cartCountElement.style.display =
            cartCount > 0 ? "grid" : "none";

        wishlistCountElement.style.display =
            wishlistCount > 0 ? "grid" : "none";

    }


    updateCounters();



    /* =====================================
       TOAST
    ===================================== */

    const toast =
        document.getElementById("toast");

    const toastTitle =
        document.getElementById("toastTitle");

    const toastMessage =
        document.getElementById("toastMessage");

    let toastTimer;


    function showToast(title, message) {

        toastTitle.textContent =
            title;

        toastMessage.textContent =
            message;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer =
            setTimeout(() => {

                toast.classList.remove("show");

            }, 3000);

    }


    document
        .getElementById("closeToast")
        .addEventListener("click", () => {

            toast.classList.remove("show");

        });



    /* =====================================
       FILTER PRODUCTS
    ===================================== */

    function filterProducts() {

        const searchTerm =
            searchInput.value
                .trim()
                .toLowerCase();


        const selectedCategories =
            [...categoryFilters]
                .filter(input => input.checked)
                .map(input => input.value);


        const minimum =
            Number(minPrice.value) || 0;


        const maximum =
            Number(maxPrice.value) || Infinity;


        const selectedRating =
            [...ratingFilters]
                .find(input => input.checked);


        const minimumRating =
            selectedRating
                ? Number(selectedRating.value)
                : 0;


        const saleOnly =
            discountFilter.checked;


        let visibleProducts = [];


        products.forEach(product => {

            const name =
                product.dataset.name.toLowerCase();


            const category =
                product.dataset.category.toLowerCase();


            const price =
                Number(product.dataset.price);


            const rating =
                Number(product.dataset.rating);


            const discount =
                product.dataset.discount === "true";


            /* Search */

            const matchesSearch =
                name.includes(searchTerm) ||
                category.includes(searchTerm);


            /* Category */

            const matchesCategory =
                selectedCategories.length === 0 ||
                selectedCategories.includes(category);


            /* Price */

            const matchesPrice =
                price >= minimum &&
                price <= maximum;


            /* Rating */

            const matchesRating =
                rating >= minimumRating;


            /* Discount */

            const matchesDiscount =
                !saleOnly || discount;


            const shouldShow =
                matchesSearch &&
                matchesCategory &&
                matchesPrice &&
                matchesRating &&
                matchesDiscount;


            if (shouldShow) {

                product.style.display = "";

                visibleProducts.push(product);

            } else {

                product.style.display = "none";

            }

        });


        /* Sort */

        sortVisibleProducts(
            visibleProducts
        );


        /* Counter */

        showingCount.textContent =
            visibleProducts.length;


        /* Empty */

        if (visibleProducts.length === 0) {

            emptyState.style.display =
                "block";

            productsGrid.style.display =
                "none";

        } else {

            emptyState.style.display =
                "none";

            productsGrid.style.display =
                "grid";

        }

    }



    /* =====================================
       SORT
    ===================================== */

    function sortVisibleProducts(visibleProducts) {

        const sortValue =
            sortProducts.value;


        visibleProducts.sort((a, b) => {

            const priceA =
                Number(a.dataset.price);

            const priceB =
                Number(b.dataset.price);


            const ratingA =
                Number(a.dataset.rating);

            const ratingB =
                Number(b.dataset.rating);


            const nameA =
                a.dataset.name.toLowerCase();

            const nameB =
                b.dataset.name.toLowerCase();


            switch (sortValue) {

                case "price-low":

                    return priceA - priceB;


                case "price-high":

                    return priceB - priceA;


                case "rating":

                    return ratingB - ratingA;


                case "name":

                    return nameA.localeCompare(
                        nameB
                    );


                default:

                    return 0;

            }

        });


        visibleProducts.forEach(product => {

            productsGrid.appendChild(product);

        });

    }



    /* =====================================
       SEARCH
    ===================================== */

    searchInput.addEventListener(
        "input",
        filterProducts
    );



    /* =====================================
       CATEGORY FILTER
    ===================================== */

    categoryFilters.forEach(input => {

        input.addEventListener(
            "change",
            filterProducts
        );

    });



    /* =====================================
       PRICE FILTER
    ===================================== */

    minPrice.addEventListener(
        "input",
        filterProducts
    );


    maxPrice.addEventListener(
        "input",
        filterProducts
    );



    /* =====================================
       RATING FILTER
    ===================================== */

    ratingFilters.forEach(input => {

        input.addEventListener(
            "change",
            filterProducts
        );

    });



    /* =====================================
       DISCOUNT FILTER
    ===================================== */

    discountFilter.addEventListener(
        "change",
        filterProducts
    );



    /* =====================================
       SORT
    ===================================== */

    sortProducts.addEventListener(
        "change",
        filterProducts
    );



    /* =====================================
       CLEAR FILTERS
    ===================================== */

    function resetFilters() {

        searchInput.value = "";

        categoryFilters.forEach(input => {

            input.checked = false;

        });


        ratingFilters.forEach(input => {

            input.checked = false;

        });


        minPrice.value = "";

        maxPrice.value = "";

        discountFilter.checked = false;

        sortProducts.value =
            "default";


        filterProducts();

    }


    clearFilters.addEventListener(
        "click",
        resetFilters
    );


    emptyClearBtn.addEventListener(
        "click",
        resetFilters
    );


    applyFilters.addEventListener(
        "click",
        () => {

            filterProducts();

            filterSidebar.classList.remove(
                "show"
            );

        }
    );



    /* =====================================
       MOBILE FILTER
    ===================================== */

    mobileFilterBtn.addEventListener(
        "click",
        () => {

            filterSidebar.classList.toggle(
                "show"
            );

        }
    );



    /* =====================================
       ADD TO CART
    ===================================== */

    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const productName =
                        button.dataset.product;


                    cartCount++;


                    localStorage.setItem(
                        "shopSphereCart",
                        cartCount
                    );


                    updateCounters();


                    showToast(
                        "Added to cart",
                        `${productName} added successfully.`
                    );


                    const originalHTML =
                        button.innerHTML;


                    button.innerHTML =
                        '<i class="fa-solid fa-check"></i>';


                    button.style.background =
                        "#2e9b62";


                    setTimeout(() => {

                        button.innerHTML =
                            originalHTML;

                        button.style.background =
                            "";

                    }, 1000);

                }
            );

        });



    /* =====================================
       WISHLIST
    ===================================== */

    document
        .querySelectorAll(".wishlist-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const liked =
                        button.classList.contains(
                            "liked"
                        );


                    if (liked) {

                        button.classList.remove(
                            "liked"
                        );


                        button.innerHTML =
                            '<i class="fa-regular fa-heart"></i>';


                        wishlistCount--;


                        showToast(
                            "Removed",
                            "Product removed from wishlist."
                        );

                    } else {

                        button.classList.add(
                            "liked"
                        );


                        button.innerHTML =
                            '<i class="fa-solid fa-heart"></i>';


                        wishlistCount++;


                        showToast(
                            "Wishlist",
                            "Product added to wishlist."
                        );

                    }


                    localStorage.setItem(
                        "shopSphereWishlist",
                        wishlistCount
                    );


                    updateCounters();

                }
            );

        });



    /* =====================================
       QUICK VIEW
    ===================================== */

    document
        .querySelectorAll(".quick-view")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    const card =
                        button.closest(
                            ".shop-product-card"
                        );


                    const name =
                        card.dataset.name;


                    const price =
                        card.querySelector(
                            ".price strong"
                        ).textContent;


                    showToast(
                        "Quick View",
                        `${name} — ${price}`
                    );

                }
            );

        });



    /* =====================================
       CART
    ===================================== */

    document
        .getElementById("cartButton")
        .addEventListener(
            "click",
            () => {

                if (cartCount === 0) {

                    showToast(
                        "Cart is empty",
                        "Add some products first."
                    );

                } else {

                    showToast(
                        "Shopping Cart",
                        `You have ${cartCount} item(s).`
                    );

                }

            }
        );



    /* =====================================
       LOGIN
    ===================================== */

    document
        .getElementById("loginButton")
        .addEventListener(
            "click",
            () => {

                showToast(
                    "Login",
                    "Login page will be added soon."
                );

            }
        );



    /* =====================================
       MOBILE MENU
    ===================================== */

    const mobileMenuBtn =
        document.getElementById(
            "mobileMenuBtn"
        );


    const mobileMenu =
        document.getElementById(
            "mobileMenu"
        );


    mobileMenuBtn.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "show"
            );


            const icon =
                mobileMenuBtn.querySelector(
                    "i"
                );


            if (
                mobileMenu.classList.contains(
                    "show"
                )
            ) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            } else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );



    /* =====================================
       MOBILE LOGIN
    ===================================== */

    document
        .getElementById("mobileLogin")
        .addEventListener(
            "click",
            () => {

                showToast(
                    "Login",
                    "Login page will be added soon."
                );

                mobileMenu.classList.remove(
                    "show"
                );

            }
        );



    /* =====================================
       INITIAL FILTER
    ===================================== */

    filterProducts();


    console.log(
        "ShopSphere Products page initialized."
    );

});
/* =====================================
   OPEN PRODUCT DETAILS
===================================== */

document
    .querySelectorAll(".shop-product-card")
    .forEach(card => {

        card.addEventListener("click", event => {

            /*
             * Don't navigate when the user
             * clicks an action button.
             */

            if (
                event.target.closest(".add-cart") ||
                event.target.closest(".wishlist-btn") ||
                event.target.closest(".quick-view")
            ) {
                return;
            }


            const productId =
                card.dataset.id;


            if (productId) {

                window.location.href =
                    `product.html?id=${productId}`;

            }

        });

    });
