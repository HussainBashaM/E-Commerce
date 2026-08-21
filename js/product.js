/* =========================================
   SHOPSPHERE PRODUCT DETAILS
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       PRODUCT DATABASE
    ===================================== */

    const productDatabase = {

        "wireless-headphones": {
            name: "Wireless Headphones",
            category: "Electronics",
            categoryKey: "electronics",
            price: 2999,
            oldPrice: 3999,
            rating: 4.5,
            reviews: 128,
            discount: 25,
            icon: "fa-headphones",
            description:
                "Enjoy powerful sound, comfortable design and long-lasting battery life with these premium wireless headphones.",
            longDescription:
                "These wireless headphones are designed for an immersive listening experience. They combine comfortable ear cushions, powerful audio and a modern design that makes them perfect for music, gaming, travel and everyday use."
        },

        "premium-cotton-hoodie": {
            name: "Premium Cotton Hoodie",
            category: "Fashion",
            categoryKey: "fashion",
            price: 1599,
            oldPrice: 1999,
            rating: 5,
            reviews: 94,
            discount: 20,
            icon: "fa-shirt",
            description:
                "A soft premium cotton hoodie designed for everyday comfort and effortless style.",
            longDescription:
                "Made for everyday wear, this premium cotton hoodie combines a comfortable fit with a clean modern design. It is ideal for casual outings, college and relaxed weekends."
        },

        "smart-watch-pro": {
            name: "Smart Watch Pro",
            category: "Electronics",
            categoryKey: "electronics",
            price: 4899,
            oldPrice: 6999,
            rating: 4,
            reviews: 76,
            discount: 30,
            icon: "fa-clock",
            description:
                "Track your everyday activity, notifications and workouts with a stylish smart watch.",
            longDescription:
                "Smart Watch Pro brings useful technology to your wrist with a modern display, activity tracking and everyday smart features."
        },

        "classic-sneakers": {
            name: "Classic Sneakers",
            category: "Fashion",
            categoryKey: "fashion",
            price: 2549,
            oldPrice: 2999,
            rating: 4.5,
            reviews: 215,
            discount: 15,
            icon: "fa-shoe-prints",
            description:
                "Classic everyday sneakers designed for comfort, durability and modern style.",
            longDescription:
                "These versatile sneakers are designed to complement everyday outfits while providing comfortable support throughout the day."
        },

        "minimalist-sunglasses": {
            name: "Minimalist Sunglasses",
            category: "Accessories",
            categoryKey: "accessories",
            price: 1799,
            oldPrice: 2199,
            rating: 4,
            reviews: 63,
            discount: 18,
            icon: "fa-glasses",
            description:
                "Minimalist sunglasses with a clean design for everyday style.",
            longDescription:
                "A simple and modern pair of sunglasses designed to complement a wide range of everyday outfits."
        },

        "leather-backpack": {
            name: "Leather Backpack",
            category: "Accessories",
            categoryKey: "accessories",
            price: 2299,
            oldPrice: 2949,
            rating: 5,
            reviews: 142,
            discount: 22,
            icon: "fa-briefcase",
            description:
                "A premium backpack combining practical storage with a sophisticated look.",
            longDescription:
                "Designed for college, work and everyday travel, this backpack provides useful storage while maintaining a clean premium appearance."
        },

        "modern-table-lamp": {
            name: "Modern Table Lamp",
            category: "Home & Living",
            categoryKey: "home",
            price: 1299,
            oldPrice: null,
            rating: 4,
            reviews: 52,
            discount: 0,
            icon: "fa-lightbulb",
            description:
                "A modern table lamp that adds warmth and style to your room.",
            longDescription:
                "This modern table lamp is designed to provide comfortable lighting while adding a stylish decorative element to your workspace or bedroom."
        },

        "portable-bluetooth-speaker": {
            name: "Portable Bluetooth Speaker",
            category: "Electronics",
            categoryKey: "electronics",
            price: 1999,
            oldPrice: null,
            rating: 5,
            reviews: 187,
            discount: 0,
            icon: "fa-volume-high",
            description:
                "Compact Bluetooth speaker delivering powerful sound wherever you go.",
            longDescription:
                "Take your music anywhere with this compact Bluetooth speaker. Its portable design makes it ideal for travel, rooms, outdoor gatherings and everyday listening."
        },

        "classic-denim-jacket": {
            name: "Classic Denim Jacket",
            category: "Fashion",
            categoryKey: "fashion",
            price: 2199,
            oldPrice: 2499,
            rating: 4.5,
            reviews: 81,
            discount: 12,
            icon: "fa-shirt",
            description:
                "A timeless denim jacket designed for casual everyday outfits.",
            longDescription:
                "This classic denim jacket combines a timeless silhouette with comfortable everyday wear. Pair it with jeans, trousers or casual outfits."
        },

        "premium-leather-wallet": {
            name: "Premium Leather Wallet",
            category: "Accessories",
            categoryKey: "accessories",
            price: 999,
            oldPrice: null,
            rating: 4,
            reviews: 48,
            discount: 0,
            icon: "fa-wallet",
            description:
                "A compact premium wallet designed to keep your essentials organized.",
            longDescription:
                "A practical leather wallet with a clean minimalist appearance and enough space for everyday cards and cash."
        },

        "mechanical-keyboard": {
            name: "Mechanical Keyboard",
            category: "Electronics",
            categoryKey: "electronics",
            price: 3499,
            oldPrice: 4199,
            rating: 5,
            reviews: 104,
            discount: 17,
            icon: "fa-keyboard",
            description:
                "A responsive mechanical keyboard designed for productivity and gaming.",
            longDescription:
                "Enjoy a satisfying typing experience with this mechanical keyboard. Its responsive keys and durable construction make it suitable for work, programming and gaming."
        },

        "minimalist-t-shirt": {
            name: "Minimalist T-Shirt",
            category: "Fashion",
            categoryKey: "fashion",
            price: 799,
            oldPrice: null,
            rating: 4,
            reviews: 119,
            discount: 0,
            icon: "fa-shirt",
            description:
                "A clean minimalist T-shirt designed for everyday comfort.",
            longDescription:
                "A versatile everyday T-shirt featuring a simple design and comfortable fit that works well with jeans, trousers and casual outfits."
        }

    };



    /* =====================================
       GET PRODUCT ID FROM URL
    ===================================== */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const productId =
        urlParams.get("id");


    const product =
        productDatabase[productId]
        || productDatabase["wireless-headphones"];



    /* =====================================
       ELEMENTS
    ===================================== */

    const productName =
        document.getElementById("productName");

    const productCategory =
        document.getElementById("productCategory");

    const productPrice =
        document.getElementById("productPrice");

    const productOldPrice =
        document.getElementById("productOldPrice");

    const productSave =
        document.getElementById("productSave");

    const productDiscount =
        document.getElementById("productDiscount");

    const productDescription =
        document.getElementById("productDescription");

    const longDescription =
        document.getElementById("longDescription");

    const productRating =
        document.getElementById("productRating");

    const productStars =
        document.getElementById("productStars");

    const breadcrumbProduct =
        document.getElementById("breadcrumbProduct");

    const mainProductImage =
        document.getElementById("mainProductImage");

    const quantityElement =
        document.getElementById("quantity");



    /* =====================================
       FORMAT PRICE
    ===================================== */

    function formatPrice(price) {

        return "₹" +
            price.toLocaleString("en-IN");

    }



    /* =====================================
       LOAD PRODUCT
    ===================================== */

    function loadProduct() {

        document.title =
            `ShopSphere | ${product.name}`;


        productName.textContent =
            product.name;


        productCategory.textContent =
            product.category;


        breadcrumbProduct.textContent =
            product.name;


        productPrice.textContent =
            formatPrice(product.price);


        productDescription.textContent =
            product.description;


        longDescription.textContent =
            product.longDescription;


        productRating.textContent =
            product.rating;


        /* Stars */

        productStars.textContent =
            createStars(product.rating);


        /* Reviews */

        const reviewLink =
            document.querySelector(
                ".product-rating-row a"
            );


        reviewLink.textContent =
            `${product.reviews} Reviews`;


        /* Old Price */

        if (product.oldPrice) {

            productOldPrice.textContent =
                formatPrice(product.oldPrice);

            productOldPrice.style.display =
                "inline";

        } else {

            productOldPrice.style.display =
                "none";

        }


        /* Discount */

        if (product.discount > 0) {

            productDiscount.textContent =
                `-${product.discount}%`;

            productDiscount.style.display =
                "block";

        } else {

            productDiscount.style.display =
                "none";

        }


        /* Saving */

        if (product.oldPrice) {

            const saving =
                product.oldPrice -
                product.price;


            productSave.textContent =
                `Save ${formatPrice(saving)}`;

            productSave.style.display =
                "inline";

        } else {

            productSave.style.display =
                "none";

        }


        /* Product Icon */

        mainProductImage.innerHTML =
            `<i class="fa-solid ${product.icon}"></i>`;


        mainProductImage.className =
            `main-product-placeholder ${product.categoryKey}`;

    }



    /* =====================================
       CREATE STARS
    ===================================== */

    function createStars(rating) {

        let stars = "";

        for (let i = 1; i <= 5; i++) {

            if (rating >= i) {

                stars += "★";

            } else if (rating >= i - 0.5) {

                stars += "★";

            } else {

                stars += "☆";

            }

        }

        return stars;

    }



    /* =====================================
       QUANTITY
    ===================================== */

    let quantity = 1;


    document
        .getElementById("increaseQuantity")
        .addEventListener(
            "click",
            () => {

                if (quantity < 10) {

                    quantity++;

                    quantityElement.textContent =
                        quantity;

                }

            }
        );


    document
        .getElementById("decreaseQuantity")
        .addEventListener(
            "click",
            () => {

                if (quantity > 1) {

                    quantity--;

                    quantityElement.textContent =
                        quantity;

                }

            }
        );



    /* =====================================
       COLOR SELECTION
    ===================================== */

    document
        .querySelectorAll(".color-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".color-btn")
                        .forEach(btn => {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    document.getElementById(
                        "selectedColor"
                    ).textContent =
                        button.dataset.color;

                }
            );

        });



    /* =====================================
       SIZE SELECTION
    ===================================== */

    document
        .querySelectorAll(".size-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".size-btn")
                        .forEach(btn => {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    document.getElementById(
                        "selectedSize"
                    ).textContent =
                        button.dataset.size;

                }
            );

        });



    /* =====================================
       CART
    ===================================== */

    let cartCount =
        Number(
            localStorage.getItem(
                "shopSphereCart"
            )
        ) || 0;


    let cartItems =
        JSON.parse(
            localStorage.getItem(
                "shopSphereCartItems"
            )
        ) || [];


    const cartCountElement =
        document.getElementById(
            "cartCount"
        );


    function updateCartCounter() {

        cartCountElement.textContent =
            cartCount;

        cartCountElement.style.display =
            cartCount > 0
                ? "grid"
                : "none";

    }


    updateCartCounter();



    /* =====================================
       ADD TO CART
    ===================================== */

    document
        .getElementById("addToCart")
        .addEventListener(
            "click",
            () => {

                const selectedColor =
                    document.getElementById(
                        "selectedColor"
                    ).textContent;


                const selectedSize =
                    document.getElementById(
                        "selectedSize"
                    ).textContent;


                const cartProduct = {

                    id: productId || "wireless-headphones",

                    name: product.name,

                    price: product.price,

                    quantity: quantity,

                    color: selectedColor,

                    size: selectedSize

                };


                cartItems.push(
                    cartProduct
                );


                cartCount += quantity;


                localStorage.setItem(
                    "shopSphereCart",
                    cartCount
                );


                localStorage.setItem(
                    "shopSphereCartItems",
                    JSON.stringify(
                        cartItems
                    )
                );


                updateCartCounter();


                showToast(
                    "Added to cart",
                    `${quantity} × ${product.name} added to your cart.`
                );

            }
        );



    /* =====================================
       BUY NOW
    ===================================== */

    document
        .getElementById("buyNow")
        .addEventListener(
            "click",
            () => {

                const selectedColor =
                    document.getElementById(
                        "selectedColor"
                    ).textContent;


                const selectedSize =
                    document.getElementById(
                        "selectedSize"
                    ).textContent;


                const buyProduct = {

                    id: productId,

                    name: product.name,

                    price: product.price,

                    quantity: quantity,

                    color: selectedColor,

                    size: selectedSize

                };


                localStorage.setItem(
                    "shopSphereBuyNow",
                    JSON.stringify(
                        buyProduct
                    )
                );


                window.location.href =
                    "cart.html";

            }
        );



    /* =====================================
       WISHLIST
    ===================================== */

    let wishlist =
        JSON.parse(
            localStorage.getItem(
                "shopSphereWishlistItems"
            )
        ) || [];


    let wishlistCount =
        Number(
            localStorage.getItem(
                "shopSphereWishlist"
            )
        ) || 0;


    const wishlistCountElement =
        document.getElementById(
            "wishlistCount"
        );


    const galleryWishlist =
        document.getElementById(
            "galleryWishlist"
        );


    function updateWishlistCounter() {

        wishlistCountElement.textContent =
            wishlistCount;

        wishlistCountElement.style.display =
            wishlistCount > 0
                ? "grid"
                : "none";

    }


    updateWishlistCounter();


    if (
        wishlist.some(
            item => item.id === productId
        )
    ) {

        galleryWishlist.classList.add(
            "liked"
        );

        galleryWishlist.innerHTML =
            '<i class="fa-solid fa-heart"></i>';

    }



    galleryWishlist.addEventListener(
        "click",
        () => {

            const existingIndex =
                wishlist.findIndex(
                    item => item.id === productId
                );


            if (existingIndex !== -1) {

                wishlist.splice(
                    existingIndex,
                    1
                );


                wishlistCount =
                    Math.max(
                        0,
                        wishlistCount - 1
                    );


                galleryWishlist.classList.remove(
                    "liked"
                );


                galleryWishlist.innerHTML =
                    '<i class="fa-regular fa-heart"></i>';


                showToast(
                    "Wishlist",
                    "Product removed from wishlist."
                );

            } else {

                wishlist.push({

                    id: productId,

                    name: product.name,

                    price: product.price

                });


                wishlistCount++;


                galleryWishlist.classList.add(
                    "liked"
                );


                galleryWishlist.innerHTML =
                    '<i class="fa-solid fa-heart"></i>';


                showToast(
                    "Wishlist",
                    "Product added to wishlist."
                );

            }


            localStorage.setItem(
                "shopSphereWishlistItems",
                JSON.stringify(
                    wishlist
                )
            );


            localStorage.setItem(
                "shopSphereWishlist",
                wishlistCount
            );


            updateWishlistCounter();

        }
    );



    /* =====================================
       TABS
    ===================================== */

    const tabs =
        document.querySelectorAll(
            ".info-tab"
        );


    const tabContents =
        document.querySelectorAll(
            ".tab-content"
        );


    tabs.forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                const target =
                    tab.dataset.tab;


                tabs.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                tabContents.forEach(content => {

                    content.classList.remove(
                        "active"
                    );

                });


                tab.classList.add(
                    "active"
                );


                document
                    .getElementById(target)
                    .classList.add("active");

            }
        );

    });



    /* =====================================
       RELATED PRODUCTS
    ===================================== */

    function loadRelatedProducts() {

        const relatedContainer =
            document.getElementById(
                "relatedProducts"
            );


        const related =
            Object.entries(productDatabase)
                .filter(
                    ([id, item]) =>
                        id !== productId &&
                        item.categoryKey ===
                        product.categoryKey
                )
                .slice(0, 4);


        relatedContainer.innerHTML =
            related.map(
                ([id, item]) => {

                    return `

                        <article
                            class="related-card"
                            data-id="${id}">

                            <div
                                class="related-image">

                                <i class="fa-solid ${item.icon}"></i>

                            </div>


                            <div class="related-info">

                                <span class="related-category">
                                    ${item.category}
                                </span>

                                <h3>
                                    ${item.name}
                                </h3>

                                <div class="related-price">
                                    ${formatPrice(item.price)}
                                </div>

                            </div>

                        </article>

                    `;

                }
            ).join("");


        document
            .querySelectorAll(".related-card")
            .forEach(card => {

                card.addEventListener(
                    "click",
                    () => {

                        window.location.href =
                            `product.html?id=${card.dataset.id}`;

                    }
                );

            });

    }



    /* =====================================
       TOAST
    ===================================== */

    const toast =
        document.getElementById(
            "toast"
        );


    const toastTitle =
        document.getElementById(
            "toastTitle"
        );


    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    let toastTimer;


    function showToast(
        title,
        message
    ) {

        toastTitle.textContent =
            title;

        toastMessage.textContent =
            message;

        toast.classList.add(
            "show"
        );


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                () => {

                    toast.classList.remove(
                        "show"
                    );

                },
                3000
            );

    }


    document
        .getElementById("closeToast")
        .addEventListener(
            "click",
            () => {

                toast.classList.remove(
                    "show"
                );

            }
        );



    /* =====================================
       HEADER CART
    ===================================== */

    document
        .getElementById("cartButton")
        .addEventListener(
            "click",
            () => {

                window.location.href =
                    "cart.html";

            }
        );



    /* =====================================
       SEARCH
    ===================================== */

    document
        .getElementById("productSearch")
        .addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {

                    const search =
                        event.target.value
                            .trim();


                    if (search) {

                        window.location.href =
                            `products.html?search=${encodeURIComponent(search)}`;

                    } else {

                        window.location.href =
                            "products.html";

                    }

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


            icon.classList.toggle(
                "fa-bars"
            );


            icon.classList.toggle(
                "fa-xmark"
            );

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

            }
        );



    /* =====================================
       INITIALIZE
    ===================================== */

    loadProduct();

    loadRelatedProducts();

});
