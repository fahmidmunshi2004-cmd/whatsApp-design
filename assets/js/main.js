(function ($) {
    "use strict";

    // *********************************************** //
    // 1:Common js
    // 2:Smooth Scroll js
    // 3:Date js
    // 4:Back To Top js
    // 5:Password js
    // 6:Mobile Menu js
    // 7:Offcanvas js
    // 8:Popup js
    // 9:Wow js
    // 10:Isotop js
    // *********************************************** //

    // data color 
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    // data bg img 
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")
    })

    // data border color
    $("[data-border-color]").each(function () {
        $(this).css("border-color", $(this).attr("data-border-color"))
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    //profile offcanvas
    $(".profile-side-bar").on('click', function () {
        $(".rs-profile-offcanvas").addClass("rs-profile-offcanvas-open");
        $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
    });
    $(".tp-offcanvas-close,.tp-offcanvas-overlay").on('click', function () {
        $(".rs-profile-offcanvas").removeClass("rs-profile-offcanvas-open");
        $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
    });


    // --- dropdoen-icon --- //
    document.querySelectorAll('.tp-megamenu-list ul li.has-dropdown > a,.tp-megamenu-list-2 ul li.has-dropdown > a').forEach(function (anchor) {
        const icon = document.createElement('span');
        icon.innerHTML = '<i class="fal fa-angle-right"></i>';
        anchor.appendChild(icon);
    });

    //  Smooth Scroll Js //
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
    // if ($('#smooth-wrapper').length && $('#smooth-content').length) {
    //     ScrollSmoother.create({
    //         smooth: 1.35,
    //         effects: true,
    //         smoothTouch: .1,
    //         ignoreMobileResize: false
    //     })
    // }


    // Overlay
    const overlay = document.querySelector(".tp-offcanvas-overlay");

    // --- Offer Modal --- //
    const offerModal = document.getElementById("offerModal");
    const offerBtns = document.querySelectorAll(".makeOfferBtn");
    const closeOffer = document.getElementById("closeOffer");

    offerBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            offerModal.style.display = "block";
            overlay?.classList.add("tp-offcanvas-overlay-open");
        });
    });
    closeOffer?.addEventListener("click", () => {
        offerModal.style.display = "none";
        overlay?.classList.remove("tp-offcanvas-overlay-open");
    });

    // --- Verified Modal --- //
    const verifiedModal = document.getElementById("verifiedModal");
    const verifiedBtns = document.querySelectorAll(".verifiedBtn");
    const closeVerified = document.getElementById("closeVerified");

    verifiedBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            verifiedModal.style.display = "block";
            overlay?.classList.add("tp-offcanvas-overlay-open");
        });
    });
    closeVerified?.addEventListener("click", () => {
        verifiedModal.style.display = "none";
        overlay?.classList.remove("tp-offcanvas-overlay-open");
    });

    // --- Payment Modal --- //
    const paymentModal = document.getElementById("paymentModal");
    const openPayment = document.getElementById("openPayment");
    const closePayment = document.getElementById("closePayment");
    const cancelPayment = paymentModal?.querySelector(".rs-payment-method-cancel-btn");

    openPayment?.addEventListener("click", () => {
        paymentModal.style.display = "flex";
        overlay?.classList.add("tp-offcanvas-overlay-open");
    });
    closePayment?.addEventListener("click", () => {
        paymentModal.style.display = "none";
        overlay?.classList.remove("tp-offcanvas-overlay-open");
    });
    cancelPayment?.addEventListener("click", () => {
        paymentModal.style.display = "none";
        overlay?.classList.remove("tp-offcanvas-overlay-open");
    });
    paymentModal?.addEventListener("click", e => {
        if (e.target === paymentModal) {
            paymentModal.style.display = "none";
            overlay?.classList.remove("tp-offcanvas-overlay-open");
        }
    });

    // --- Add Balance Modal --- //
    const addBalanceModal = document.getElementById("addBalanceModal");
    const addBalanceBtns = document.querySelectorAll(".rs-wallet-balance-add");
    const closeAddBalance = document.getElementById("closeAddBalance");
    const cancelAddBalance = document.getElementById("cancelAddBalance");

    addBalanceBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            addBalanceModal.style.display = "block";
            overlay?.classList.add("tp-offcanvas-overlay-open");
        });
    });

    closeAddBalance?.addEventListener("click", () => {
        addBalanceModal.style.display = "none";
        overlay?.classList.remove("tp-offcanvas-overlay-open");
    });

    cancelAddBalance?.addEventListener("click", () => {
        addBalanceModal.style.display = "none";
        overlay?.classList.remove("tp-offcanvas-overlay-open");
    });



    // --- Report Seller Modal --- //
    const reportModal = document.getElementById("reportModal");
    const reportBtns = document.querySelectorAll(".reportSellerBtn");
    const closeReport = document.getElementById("closeReport");
    const cancelReport = document.getElementById("cancelReport");

    // ✅ চেক করো modal টা আসলেই আছে কিনা
    if (reportModal && overlay) {
        // Modal open
        reportBtns.forEach(btn => {
            btn?.addEventListener("click", () => {
                reportModal.style.display = "block";
                overlay.classList.add("tp-offcanvas-overlay-open");
            });
        });

        // Modal close
        closeReport?.addEventListener("click", () => {
            reportModal.style.display = "none";
            overlay.classList.remove("tp-offcanvas-overlay-open");
        });

        cancelReport?.addEventListener("click", () => {
            reportModal.style.display = "none";
            overlay.classList.remove("tp-offcanvas-overlay-open");
        });

        // Overlay click → modal close
        overlay.addEventListener("click", () => {
            reportModal.style.display = "none";
            overlay.classList.remove("tp-offcanvas-overlay-open");
        });
    }


    //=================  successModal  ===================//

    const successModal = document.getElementById("successModal");
    const errorModal = document.getElementById("errorModal");
    const autoPaySwitch = document.getElementById("autoPaySwitch");
    const switchLabel = document.querySelector(".rs-checkout-autopay-switch label");
    function openModal(modal) {
        if (!modal) return;
        modal.style.display = "flex";
        overlay.classList.add("tp-offcanvas-overlay-open");
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.style.display = "none";
        overlay.classList.remove("tp-offcanvas-overlay-open");
    }
    document.querySelectorAll(".rs-payment-popup-close, .actionBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            closeModal(successModal);
            closeModal(errorModal);
        });
    });
    overlay?.addEventListener("click", e => {
        if (e.target === overlay) {
            closeModal(successModal);
            closeModal(errorModal);
        }
    });
    const proceedBtns = document.querySelectorAll(".rs-payment-proceed");

    proceedBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const inputs = document.querySelectorAll(".rs-checkout-form-input");
            let hasError = false;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.classList.add("error");
                    hasError = true;
                } else {
                    input.classList.remove("error");
                }
            });

            if (!autoPaySwitch.checked) {
                switchLabel.classList.add("error");
                hasError = true;
            } else {
                switchLabel.classList.remove("error");
            }

            if (hasError) {
                openModal(errorModal);
            } else {
                openModal(successModal);
            }
        });
    });
    document.querySelector(".rs-payment-cancel")?.addEventListener("click", () => {
        openModal(errorModal);
    });


    // --- Sold Out Modal --- //
    const soldOutModal = document.getElementById("soldOutModal");
    const soldOutBtns = document.querySelectorAll(".soldOutBtn");
    const closeSoldOut = document.getElementById("closeSoldOut");
    const cancelSoldOut = document.getElementById("cancelSoldOut");
    soldOutBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            soldOutModal.style.display = "flex";
            overlay?.classList.add("tp-offcanvas-overlay-open");
        });
    });
    closeSoldOut?.addEventListener("click", () => {
        soldOutModal.style.display = "none";
        overlay?.classList.remove("tp-offcanvas-overlay-open");
    });
    cancelSoldOut?.addEventListener("click", () => {
        soldOutModal.style.display = "none";
        overlay?.classList.remove("tp-offcanvas-overlay-open");
    });

    soldOutModal?.addEventListener("click", e => {
        if (e.target === soldOutModal) {
            soldOutModal.style.display = "none";
            overlay?.classList.remove("tp-offcanvas-overlay-open");
        }
    });

    // --- Give Review Modal --- //
    const reviewModal = document.getElementById("reviewModal");
    const openReviewBtn = document.getElementById("openReviewModal");
    const closeReviewBtn = document.getElementById("closeReviewModal");

    if (reviewModal && overlay) {
        openReviewBtn?.addEventListener("click", () => {
            reviewModal.style.display = "block";
            overlay.classList.add("tp-offcanvas-overlay-open");
        });

        closeReviewBtn?.addEventListener("click", () => {
            reviewModal.style.display = "none";
            overlay.classList.remove("tp-offcanvas-overlay-open");
        });

        overlay.addEventListener("click", () => {
            reviewModal.style.display = "none";
            overlay.classList.remove("tp-offcanvas-overlay-open");
        });
    }


    // --- Overlay click --- //
    overlay?.addEventListener("click", () => {
        offerModal?.style && (offerModal.style.display = "none");
        verifiedModal?.style && (verifiedModal.style.display = "none");
        paymentModal?.style && (paymentModal.style.display = "none");
        addBalanceModal?.style && (addBalanceModal.style.display = "none");
        soldOutModal?.style && (soldOutModal.style.display = "none");
        reviewModal?.style && (reviewModal.style.display = "none");
        reportModal?.style && (reportModal.style.display = "none");
        overlay?.classList.remove("tp-offcanvas-overlay-open");
    });



    // --- Overlay click closes all modals safely --- //
    window.onclick = function (e) {
        if (e.target === overlay) {
            if (offerModal) offerModal.style.display = "none";
            if (verifiedModal) verifiedModal.style.display = "none";
            overlay?.classList.remove("tp-offcanvas-overlay-open");
        }
    };

    //================ fix btn ================//
    const pages = document.querySelectorAll(".my-page");
    const fixBtn = document.querySelector(".fix-btn");

    function toggleFixBtn() {
        const checkoutActive = document.querySelector(".my-page.checkout.active");
        if (!fixBtn) return;

        if (checkoutActive) {
            fixBtn.style.display = "block";
        } else {
            fixBtn.style.display = "none";
        }
    }
    toggleFixBtn();
    pages.forEach(page => {
        const observer = new MutationObserver(toggleFixBtn);
        observer.observe(page, { attributes: true, attributeFilter: ['class'] });
    });


    //=================== date ===================//
    const expDateInput = document.getElementById("expDate");
    const calendarIcon = document.getElementById("calendarIcon");

    if (expDateInput && calendarIcon) {
        const fp = flatpickr(expDateInput, {
            dateFormat: "d/m/Y",
            allowInput: true
        });

        calendarIcon.addEventListener("click", () => {
            fp.open();
        });
    }
    const soldDateInput = document.getElementById("soldDate");
    const soldDateIcon = document.getElementById("soldDateIcon");

    if (soldDateInput && soldDateIcon) {
        const fp2 = flatpickr(soldDateInput, {
            dateFormat: "d/m/Y",
            allowInput: true
        });

        soldDateIcon.addEventListener("click", () => {
            fp2.open();
        });
    }

    //-- backToTop --//
    let windowHeight = 0;
    let documentHeight = 0;
    function updateDimensions() {
        windowHeight = window.innerHeight;
        documentHeight = document.documentElement.scrollHeight - windowHeight;
    }
    updateDimensions();
    $(window).on('resize', updateDimensions);

    let $box = $(".scrollToTop");
    if ($box.length) {
        let $water = $box.find(".water");

        $(window).on('scroll', function () {
            let scrollPosition = $(window).scrollTop();
            let percent = Math.min(
                Math.floor((scrollPosition / documentHeight) * 100),
                100
            );

            $water.css("transform", "translate(0," + (100 - percent) + "%)");

            if (scrollPosition >= 200) {
                $box.fadeIn();
            } else {
                $box.fadeOut();
            }
        });

        // Scroll to top
        $box.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 'smooth');
        });
    }

    //password show
    document.addEventListener("DOMContentLoaded", function () {
        const passwordInput = document.getElementById("passwordInput");
        const togglePassword = document.getElementById("togglePassword");
        if (passwordInput && togglePassword) {
            togglePassword.addEventListener("click", function () {
                const isHidden = passwordInput.type === "password";
                if (isHidden) {
                    passwordInput.type = "text";
                    togglePassword.classList.remove("fa-eye-slash");
                    togglePassword.classList.add("fa-eye");
                } else {
                    passwordInput.type = "password";
                    togglePassword.classList.remove("fa-eye");
                    togglePassword.classList.add("fa-eye-slash");
                }
            });
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        const passwordInputs = document.querySelectorAll(".passwordInput");
        const togglePasswords = document.querySelectorAll(".togglePassword");

        togglePasswords.forEach((toggle, index) => {
            toggle.addEventListener("click", () => {
                const input = passwordInputs[index];
                input.type = (input.type === "password") ? "text" : "password";
            });
        });
    });

    //mobile-menu
    $(document).ready(function () {
        let tpOffcanvasMenu = $('.tp-offcanvas-menu > nav');
        tpOffcanvasMenu.empty();
        let tpMenuHTML = $('.rs-header-main-menu nav.tp-mobile-menu-active > ul').first().clone();
        tpOffcanvasMenu.append(tpMenuHTML);
        tpOffcanvasMenu.find('li').each(function () {
            if ($(this).find('.tp-megamenu-wrapper,.tp-megamenu-wrapper-2').length) {
                $(this).addClass('has-dropdown');
                if ($(this).children('.tp-sidemenu-close').length === 0) {
                    $(this).append('<button class="tp-sidemenu-close"><i class="fas fa-chevron-right"></i></button>');
                }
            }
        });
        tpOffcanvasMenu.on('click', 'li.has-dropdown > a, li.has-dropdown > button.tp-sidemenu-close', function (e) {
            e.preventDefault();
            let parentLi = $(this).closest('li');
            let subMenu = parentLi.children('.tp-megamenu-wrapper,.tp-megamenu-wrapper-2');

            if (parentLi.hasClass('active')) {
                subMenu.slideUp();
                parentLi.removeClass('active');
            } else {
                parentLi.siblings('.active').removeClass('active').children('.tp-megamenu-wrapper,.tp-megamenu-wrapper-2').slideUp();
                parentLi.addClass('active');
                subMenu.slideDown();
            }
        });
    });



    //offcanvas
    $(".rs-offcanvas-btn").on('click', function () {
        $(".tp-offcanvas-area").addClass("tp-offcanvas-area-open");
        $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
    });
    $(".tp-offcanvas-close,.tp-offcanvas-overlay").on('click', function () {
        $(".tp-offcanvas-area").removeClass("tp-offcanvas-area-open");
        $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
    });

    //list-view
    $(document).ready(function () {
        $(".rs-product-list-view-2").hide();
        $(".rs-product-menu__icon-1").on("click", function () {
            $(".rs-product-menu__icon-1, .rs-product-menu__icon-2").removeClass("active");
            $(this).addClass("active");

            $(".rs-product-list-view-1").fadeOut(350, function () {
                $(".rs-product-list-view-2").fadeIn(350, function () {
                    $('.grid').isotope('layout');
                });
            });
        });
        $(".rs-product-menu__icon-2").on("click", function () {
            $(".rs-product-menu__icon-1, .rs-product-menu__icon-2").removeClass("active");
            $(this).addClass("active");

            $(".rs-product-list-view-2").fadeOut(350, function () {
                $(".rs-product-list-view-1").fadeIn(350, function () {
                    $('.grid').isotope('layout');
                });
            });
        });
    });


    // profile lang toggle
    $('.rs-profile-language').on('click', function (e) {
        e.stopPropagation();
        $(this).find('.rs-profile-lang-menu').toggleClass('open');
    });
    $(document).on('click', function () {
        $('.rs-profile-lang-menu').removeClass('open');
    });

    // active toggle //
    $(document).ready(function () {
        $(".rs-profile-side-bar-list-items, .rs-product-head-top-button").on("click", function () {
            $(".rs-profile-side-bar-list-items, .rs-product-head-top-button").removeClass("active");
            $(this).addClass("active");
        });
    });


    // Filter offcanvas toggle //
    $(document).ready(function () {
        function initOffcanvasFilter() {
            if ($(window).width() < 1200) {
                let filterHTML = $('.rs-product-filter-area').clone();
                filterHTML.find('#progress').attr('id', 'progress-mobile');
                filterHTML.find('#minVal').attr('id', 'minVal-mobile');
                filterHTML.find('#maxVal').attr('id', 'maxVal-mobile');
                filterHTML.find('.min-range').addClass('min-range-mobile');
                filterHTML.find('.max-range').addClass('max-range-mobile');

                let offcanvasFilter = $('.rs-filter-offcanvas .rs-filter-inner');
                offcanvasFilter.html(filterHTML);
                $(".rs-filter-open-btn").on("click.offcanvas", function () {
                    $(".rs-filter-offcanvas").addClass("open");
                    $(".rs-filter-overlay").addClass("show");
                });
                $(".rs-filter-close, .rs-filter-overlay").on("click.offcanvas", function () {
                    $(".rs-filter-offcanvas").removeClass("open");
                    $(".rs-filter-overlay").removeClass("show");
                });
                $('.tp-sidemenu-close').on("click.offcanvas", function () {
                    $(this).toggleClass('active');
                });
                const minRange = document.querySelector(".min-range-mobile");
                const maxRange = document.querySelector(".max-range-mobile");
                const progress = document.getElementById("progress-mobile");
                const minValText = document.getElementById("minVal-mobile");
                const maxValText = document.getElementById("maxVal-mobile");

                if (minRange && maxRange && progress && minValText && maxValText) {
                    const minGap = 500;
                    function updateSlider(e) {
                        let minVal = parseInt(minRange.value);
                        let maxVal = parseInt(maxRange.value);
                        if (maxVal - minVal <= minGap) {
                            if (e.target.classList.contains("min-range-mobile")) {
                                minRange.value = maxVal - minGap;
                            } else {
                                maxRange.value = minVal + minGap;
                            }
                        }
                        progress.style.left = (minRange.value / minRange.max) * 100 + "%";
                        progress.style.right = 100 - (maxRange.value / maxRange.max) * 100 + "%";
                        minValText.textContent = minRange.value;
                        maxValText.textContent = maxRange.value;
                    }
                    minRange.addEventListener("input", updateSlider);
                    maxRange.addEventListener("input", updateSlider);
                    updateSlider({ target: minRange });
                }

            } else {
                $(".rs-filter-open-btn, .rs-filter-close, .rs-filter-overlay, .tp-sidemenu-close").off(".offcanvas");
                $(".rs-filter-offcanvas .rs-filter-inner").empty();
            }
        }
        initOffcanvasFilter();
        $(window).resize(function () {
            initOffcanvasFilter();
        });

    });

    //active
    $('.tp-sidemenu-close').click(function () {
        $(this).toggleClass('active');
    });

    //more-option
    $('.rs-more-option').on('click', function (e) {
        e.stopPropagation();
        $('.rs-more-option').not(this).removeClass('active');

        $(this).toggleClass('active');
    });
    $(document).on('click', function () {
        $('.rs-more-option').removeClass('active');
    });




    // sidiebar show 
    $(document).ready(function () {
        $(".rs-profile-side-bar-list-items").on("click", function () {
            $(".rs-profile-side-bar-list-items").removeClass("active");
            $(this).addClass("active");
        });
        $('.rs-profile-side-bar-list-items, .rs-Promote-add-btn, .rs-promote-btn, .my-adds-btn, .my-adds-btn-2, .rs-product-head-top-button').on('click', function (e) {
            e.preventDefault();
            const target = $(this).data('target');
            $('.my-page').stop(true, true).fadeOut(200).removeClass('active');
            $('.' + target).stop(true, true).fadeIn(300).addClass('active');
            if ($(this).hasClass('rs-profile-side-bar-list-items')) {
                $('.rs-profile-side-bar-list-items').removeClass('active');
                $(this).addClass('active');
            }
        });
    });


    //love
    const loveItems = document.querySelectorAll(".rs-product-thumb-love");
    loveItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
            const icon = item.querySelector(".love-icon");
            icon.classList.toggle("active");
        });
    });

    //================ star ===============//
    const stars = document.querySelectorAll('#starRating i');
    const ratingValue = document.getElementById('ratingValue');
    let currentRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            if (currentRating === value) {
                currentRating = 0;
                ratingValue.value = 0;
                stars.forEach(s => {
                    s.classList.remove('fal');
                    s.classList.add('fas', 'active');
                });
                return;
            }
            currentRating = value;
            ratingValue.value = value;
            stars.forEach((s, index) => {
                if (index < value) {
                    s.classList.remove('fal');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('fal');
                }
            });
        });
    });

    //dropdown
    document.addEventListener("DOMContentLoaded", function () {
        const dropdownLinks = document.querySelectorAll(".rs-product-price-dropdown a");
        const mainButton = document.querySelector(".rs-product-price-menu > ul > li > a");

        dropdownLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                if (this.textContent.trim() === "Price - Low to High" || this.textContent.trim() === "Price - High to Low") {
                    mainButton.childNodes[0].nodeValue = this.textContent + " ";
                }
            });
        });
    });

    //product-name-slide
    var swiper = new Swiper(".rs-product-name-slide", {
        slidesPerView: 6.9,
        spaceBetween: 16,
        loop: true,
        navigation: {
            nextEl: ".rs-product-button-next",
            prevEl: ".rs-product-button-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 5.3,
                spaceBetween: 12,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },
            1: {
                slidesPerView: 3,
            }
        }
    });

    // product-slide
    var swiper = new Swiper(".rs-product-slide", {
        slidesPerView: 1.2,
        spaceBetween: 16,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            441: { slidesPerView: 1.3 },
            475: { slidesPerView: 1.4 },
            511: { slidesPerView: 1.6 },
            576: { slidesPerView: 1.7, spaceBetween: 20 },
            620: { slidesPerView: 1.8, spaceBetween: 20 },
        }
    });



    //product-slide-2
    var swiper = new Swiper(".rs-product-slide-2", {
        slidesPerView: 4,
        spaceBetween: 16,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".rs-product-button-next-2",
            prevEl: ".rs-product-button-prev-2",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            451: {
                slidesPerView: 1.5,
                spaceBetween: 12,
            },
            370: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });


    //details-slide
    var swiper = new Swiper(".rs-details-slide", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4.2,
        freeMode: true,
        watchSlidesProgress: true,
        initialSlide: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4.2,
            },
            992: {
                slidesPerView: 6.2,
            },
            768: {
                slidesPerView: 5.2,
            },
            576: {
                slidesPerView: 7.2,
            },
        }
    });
    var swiper2 = new Swiper(".rs-details-slide-2", {
        loop: true,
        spaceBetween: 10,
        initialSlide: 1,
        thumbs: {
            swiper: swiper,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    var swiper = new Swiper(".rs-related-slide", {
        slidesPerView: 1.08,
        spaceBetween: 16,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".rs-product-button-next-2",
            prevEl: ".rs-product-button-prev-2",
        },
    });

    //wallet-slide
    document.addEventListener("DOMContentLoaded", () => {
        const walletBox = document.querySelector('.rs-wallet-box, .rs-category-wrapper');
        if (walletBox) {
            walletBox.addEventListener('wheel', (e) => {
                const maxScrollLeft = walletBox.scrollWidth - walletBox.clientWidth;
                const maxScrollTop = walletBox.scrollHeight - walletBox.clientHeight;
                const scrollLeftBefore = walletBox.scrollLeft;
                const scrollTopBefore = walletBox.scrollTop;
                walletBox.scrollLeft += e.deltaY;
                walletBox.scrollTop += e.deltaX;
                const scrollLeftAfter = walletBox.scrollLeft;
                const scrollTopAfter = walletBox.scrollTop;
                if (
                    (scrollLeftAfter !== scrollLeftBefore && scrollLeftAfter < maxScrollLeft) ||
                    (scrollTopAfter !== scrollTopBefore && scrollTopAfter < maxScrollTop)
                ) {
                    e.preventDefault();
                }
            });
            let isDown = false;
            let startX, startY, scrollLeft, scrollTop;
            const startDragging = (e) => {
                isDown = true;
                walletBox.classList.add('dragging');
                startX = e.pageX || e.touches[0].pageX;
                startY = e.pageY || e.touches[0].pageY;
                scrollLeft = walletBox.scrollLeft;
                scrollTop = walletBox.scrollTop;
            };

            const stopDragging = () => {
                isDown = false;
                walletBox.classList.remove('dragging');
            };

            const moveDragging = (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX || e.touches[0].pageX;
                const y = e.pageY || e.touches[0].pageY;
                const walkX = (x - startX);
                const walkY = (y - startY);
                walletBox.scrollLeft = scrollLeft - walkX;
                walletBox.scrollTop = scrollTop - walkY;
            };

            walletBox.addEventListener('mousedown', startDragging);
            walletBox.addEventListener('mouseleave', stopDragging);
            walletBox.addEventListener('mouseup', stopDragging);
            walletBox.addEventListener('mousemove', moveDragging);
            walletBox.addEventListener('touchstart', startDragging);
            walletBox.addEventListener('touchend', stopDragging);
            walletBox.addEventListener('touchmove', moveDragging);
        }
    });


    // Verified OTP
    (function () {
        const offerModal = document.getElementById('offerModal');
        if (!offerModal) return;
        const closeBtn = document.getElementById('closeBtn');
        const submitPhone = document.getElementById('submitPhone');
        const phoneStep = document.getElementById('phoneStep');
        const otpStep = document.getElementById('otpStep');
        const timerEl = document.getElementById('timer');
        const phoneInput = document.getElementById('phoneInput');
        const phoneError = document.getElementById('phoneError');
        const otpBoxes = document.querySelectorAll('.otp-box');
        const submitOTP = document.getElementById('submitOTP');

        let countdown;

        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                offerModal.style.display = 'none';
                clearInterval(countdown);
            });
        }
        if (submitPhone && phoneInput && phoneStep && otpStep && timerEl) {
            submitPhone.addEventListener('click', () => {
                const phone = phoneInput.value.trim();

                if (phone === "") {
                    phoneInput.style.border = "1px solid #DD5454";
                    if (phoneError) phoneError.style.display = "block";
                    return;
                } else {
                    phoneInput.style.border = "";
                    if (phoneError) phoneError.style.display = "none";
                }

                // Show OTP step
                phoneStep.style.display = 'none';
                otpStep.style.display = 'block';
                startCountdown(59);
            });
        }
        function startCountdown(seconds) {
            let timeLeft = seconds;
            if (!timerEl) return;

            timerEl.textContent = `Resend code in ${formatTime(timeLeft)} sec`;

            countdown = setInterval(() => {
                timeLeft--;
                if (timeLeft > 0) {
                    timerEl.textContent = `Resend code in ${formatTime(timeLeft)} sec`;
                } else {
                    clearInterval(countdown);
                    timerEl.textContent = "Resend code now";
                }
            }, 1000);
        }
        function formatTime(seconds) {
            const m = String(Math.floor(seconds / 60)).padStart(2, '0');
            const s = String(seconds % 60).padStart(2, '0');
            return `${m}:${s}`;
        }
        if (otpBoxes.length > 0) {
            otpBoxes.forEach((box, index) => {
                box.addEventListener('input', () => {
                    if (box.value.length === 1 && index < otpBoxes.length - 1) {
                        otpBoxes[index + 1].focus();
                    }
                });

                box.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace' && box.value === '' && index > 0) {
                        otpBoxes[index - 1].focus();
                    }
                });
            });
        }
        if (submitOTP && otpBoxes.length > 0) {
            submitOTP.addEventListener('click', () => {
                let allFilled = true;

                otpBoxes.forEach(box => {
                    if (box.value.trim() === "") {
                        box.style.border = "1px solid #DD5454";
                        allFilled = false;
                    } else {
                        box.style.border = "";
                    }
                });

                if (!allFilled) return;
                alert("OTP Verified!");
            });
        }
    })();


    //category
    const category = document.getElementById("category");
    const subcategory = document.getElementById("subcategory");

    if (category && subcategory) {
        const data = {
            electronics: ["Mobile", "Laptop", "Camera"],
            fashion: ["Shirt", "Shoes", "Watch"],
            grocery: ["Rice", "Oil", "Vegetables"]
        };

        category.addEventListener("change", function () {
            const value = this.value;
            subcategory.innerHTML = `<option value="">Select Product Subcategory</option>`;

            if (data[value]) {
                data[value].forEach(item => {
                    let opt = document.createElement("option");
                    opt.value = item.toLowerCase();
                    opt.textContent = item;
                    subcategory.appendChild(opt);
                });
            }
        });
    }


    //post-ad-active
    (function () {
        const tabs = document.querySelectorAll(".step-tab");
        const panes = document.querySelectorAll(".step-pane");
        let currentStep = 0;
        function renderStep(index) {
            tabs.forEach((t, i) => {
                t.classList.remove("active", "completed");
                if (i < index) t.classList.add("completed");
                else if (i === index) t.classList.add("active");
            });
            panes.forEach(p => p.classList.remove("active"));
            if (panes[index]) panes[index].classList.add("active");
            currentStep = index;
        }
        function validateStep(index) {
            const activePane = panes[index];
            if (!activePane) return true;
            let valid = true;
            activePane.querySelectorAll("input, select, textarea").forEach(el => {
                let h4s = el.closest(".rs-post-cta-contant")?.querySelectorAll("h4.rs-post-cta-title-2") || [];
                let labelSpan = null;
                h4s.forEach(h4 => {
                    if (h4.querySelector("span")) {
                        if (h4.textContent.toLowerCase().includes("category") && el.id === "category") {
                            labelSpan = h4.querySelector("span");
                        } else if (h4.textContent.toLowerCase().includes("subcategory") && el.id === "subcategory") {
                            labelSpan = h4.querySelector("span");
                        } else if (h4.textContent.toLowerCase().includes("product name") && el.placeholder?.toLowerCase().includes("product name")) {
                            labelSpan = h4.querySelector("span");
                        } else if (h4.textContent.toLowerCase().includes("condition") && el.tagName === "SELECT") {
                            labelSpan = h4.querySelector("span");
                        } else if (h4.textContent.toLowerCase().includes("price") && el.placeholder?.toLowerCase().includes("price")) {
                            labelSpan = h4.querySelector("span");
                        } else if (h4.textContent.toLowerCase().includes("phone") && el.placeholder?.toLowerCase().includes("phone")) {
                            labelSpan = h4.querySelector("span");
                        } else if (h4.textContent.toLowerCase().includes("email") && el.type === "email") {
                            labelSpan = h4.querySelector("span");
                        } else if (h4.textContent.toLowerCase().includes("description") && el.tagName === "TEXTAREA") {
                            labelSpan = h4.querySelector("span");
                        } else if (h4.textContent.toLowerCase().includes("location") && el.placeholder?.toLowerCase().includes("location")) {
                            labelSpan = h4.querySelector("span");
                        }
                    }
                });
                if (!el.value.trim()) {
                    el.style.borderColor = "#DD5454";
                    if (labelSpan) labelSpan.style.color = "#DD5454";
                    valid = false;
                } else {
                    el.style.borderColor = "";
                    if (labelSpan) labelSpan.style.color = "";
                }
            });
            return valid;
        }
        renderStep(0);
        document.querySelectorAll(".next-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                if (validateStep(currentStep) && currentStep < tabs.length - 1) {
                    renderStep(currentStep + 1);
                }
            });
        });
        document.querySelectorAll(".prev-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                if (currentStep > 0) renderStep(currentStep - 1);
            });
        });
        tabs.forEach((t, i) => {
            t.addEventListener("click", () => {
                if (i > currentStep && !validateStep(currentStep)) return;
                renderStep(i);
            });
        });
    })();

    document.addEventListener("DOMContentLoaded", () => {
        const nextBtn = document.querySelector(".next-btn-fix .next-btn");
        const form = document.querySelector("form");

        let currentStep = 1;

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                currentStep++;

                if (currentStep === 3) {
                    nextBtn.innerHTML = `
                    Submit Post
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
                        <path d="M20.1919 8.28787C20.1539 8.37987 20.099 8.46276 20.03 8.53176L13.03 15.5318C12.884 15.6778 12.692 15.7517 12.5 15.7517C12.308 15.7517 12.116 15.6788 11.97 15.5318C11.677 15.2388 11.677 14.7637 11.97 14.4707L17.6899 8.75076H1.5C1.086 8.75076 0.75 8.41476 0.75 8.00076C0.75 7.58676 1.086 7.25076 1.5 7.25076H17.689L11.969 1.53079C11.676 1.23779 11.676 0.76275 11.969 0.46975C12.262 0.17675 12.737 0.17675 13.03 0.46975L20.03 7.46975C20.099 7.53875 20.1539 7.62165 20.1919 7.71365C20.2679 7.89765 20.2679 8.10387 20.1919 8.28787Z" fill="white"/>
                    </svg>
                `;
                    nextBtn.type = "submit";
                }
            });
        }

        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("✅ Form submitted successfully!");
            });
        }
    });


    //color-Box
    const colorBoxes = document.querySelectorAll('.color-box');
    let selectedColor = null;
    colorBoxes.forEach(box => {
        box.addEventListener('click', () => {
            colorBoxes.forEach(b => b.classList.remove('selected'));
            box.classList.add('selected');
            selectedColor = box.getAttribute('data-color');
            console.log('Selected Color:', selectedColor);
        });
    });


    //step-3
    document.addEventListener('DOMContentLoaded', function () {
        const MAX_IMAGES = 10;

        const thumbnailInput = document.getElementById('thumbnailInput');
        const thumbDrop = document.getElementById('thumbDrop');
        const thumbnailPreview = document.getElementById('thumbnailPreview');
        let thumbnailFile = null;

        const additionalInput = document.getElementById('additionalInput');
        const gallery = document.getElementById('gallery');
        const galleryDrop = document.getElementById('galleryDrop');
        const galleryCounter = document.getElementById('galleryCounter');
        let additionalFiles = [];

        function preventDefaults(e) { e.preventDefault(); e.stopPropagation(); }
        function isImage(file) { return file && file.type && file.type.startsWith('image/'); }

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            if (thumbDrop) thumbDrop.addEventListener(eventName, preventDefaults, false);
            if (galleryDrop) galleryDrop.addEventListener(eventName, preventDefaults, false);
        });

        function highlight(el) { if (el) el.classList.add('dragover'); }
        function unhighlight(el) { if (el) el.classList.remove('dragover'); }

        ['dragenter', 'dragover'].forEach(ev => {
            if (thumbDrop) thumbDrop.addEventListener(ev, () => highlight(thumbDrop));
            if (galleryDrop) galleryDrop.addEventListener(ev, () => highlight(galleryDrop));
        });
        ['dragleave', 'drop'].forEach(ev => {
            if (thumbDrop) thumbDrop.addEventListener(ev, () => unhighlight(thumbDrop));
            if (galleryDrop) galleryDrop.addEventListener(ev, () => unhighlight(galleryDrop));
        });

        function renderThumbnail() {
            if (!thumbnailPreview) return;
            thumbnailPreview.innerHTML = '';
            if (!thumbnailFile) return;
            const reader = new FileReader();
            reader.onload = function (e) {
                const div = document.createElement('div');
                div.className = 'preview-item';
                div.innerHTML = `
                <img src="${e.target.result}" alt="thumbnail">
                <button type="button" class="remove-btn" title="Remove"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M8.41425 7.00022L13.7073 1.70719C14.0983 1.31719 14.0983 0.68325 13.7073 0.29325C13.3163 -0.09775 12.6842 -0.09775 12.2933 0.29325L7.00025 5.58622L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68325 -0.09775 1.31719 0.29325 1.70719L5.58625 7.00022L0.29325 12.2933C-0.09775 12.6833 -0.09775 13.3172 0.29325 13.7072C0.48825 13.9022 0.744251 14.0002 1.00025 14.0002C1.25625 14.0002 1.51225 13.9022 1.70725 13.7072L7.00025 8.41422L12.2933 13.7072C12.4882 13.9022 12.7443 14.0002 13.0003 14.0002C13.2563 14.0002 13.5123 13.9022 13.7073 13.7072C14.0983 13.3172 14.0983 12.6833 13.7073 12.2933L8.41425 7.00022Z" fill="#17181D"/>
                </svg></button>`;
                div.querySelector('.remove-btn').addEventListener('click', () => {
                    thumbnailFile = null;
                    if (thumbnailInput) thumbnailInput.value = '';
                    thumbnailPreview.innerHTML = '';
                });
                thumbnailPreview.appendChild(div);
            };
            reader.readAsDataURL(thumbnailFile);
        }

        function handleThumbnailFiles(files) {
            if (!files || files.length === 0) return;
            const file = files[0];
            if (!isImage(file)) { alert('Please select an image file for thumbnail.'); return; }
            thumbnailFile = file;
            renderThumbnail();
        }

        if (thumbnailInput) {
            thumbnailInput.addEventListener('change', function () {
                handleThumbnailFiles(this.files);
                this.value = '';
            });
        }
        if (thumbDrop) {
            thumbDrop.addEventListener('drop', function (e) {
                handleThumbnailFiles(e.dataTransfer.files);
            });
        }

        function updateGalleryCounter() {
            if (galleryCounter) galleryCounter.textContent = `${additionalFiles.length} / ${MAX_IMAGES}`;
        }

        function renderGallery() {
            if (!gallery) return;
            gallery.innerHTML = '';
            additionalFiles.forEach((file, idx) => {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const div = document.createElement('div');
                    div.className = 'preview-item';
                    div.innerHTML = `
                    <img src="${e.target.result}" alt="additional-${idx}">
                    <button type="button" class="remove-btn" title="Remove"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M8.41425 7.00022L13.7073 1.70719C14.0983 1.31719 14.0983 0.68325 13.7073 0.29325C13.3163 -0.09775 12.6842 -0.09775 12.2933 0.29325L7.00025 5.58622L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68325 -0.09775 1.31719 0.29325 1.70719L5.58625 7.00022L0.29325 12.2933C-0.09775 12.6833 -0.09775 13.3172 0.29325 13.7072C0.48825 13.9022 0.744251 14.0002 1.00025 14.0002C1.25625 14.0002 1.51225 13.9022 1.70725 13.7072L7.00025 8.41422L12.2933 13.7072C12.4882 13.9022 12.7443 14.0002 13.0003 14.0002C13.2563 14.0002 13.5123 13.9022 13.7073 13.7072C14.0983 13.3172 14.0983 12.6833 13.7073 12.2933L8.41425 7.00022Z" fill="#17181D"/>
                </svg></button>`;

                    const removeBtn = div.querySelector('.remove-btn');
                    removeBtn.addEventListener('click', function () {
                        div.classList.add('removing');
                        div.addEventListener('transitionend', () => {
                            additionalFiles.splice(idx, 1);
                            renderGallery();
                            updateGalleryCounter();
                        }, { once: true });
                    });

                    gallery.appendChild(div);
                };
                reader.readAsDataURL(file);
            });
        }

        function handleAdditionalFiles(files) {
            if (!files || files.length === 0) return;
            let toAdd = Array.from(files).filter(isImage);
            if (toAdd.length === 0) return;
            if (additionalFiles.length + toAdd.length > MAX_IMAGES) {
                alert(`You can upload a maximum of ${MAX_IMAGES} images.`);
                return;
            }
            additionalFiles = additionalFiles.concat(toAdd);
            renderGallery();
            updateGalleryCounter();
        }

        if (additionalInput) {
            additionalInput.addEventListener('change', function () {
                handleAdditionalFiles(this.files);
                this.value = '';
            });
        }
        if (galleryDrop) {
            galleryDrop.addEventListener('drop', function (e) {
                handleAdditionalFiles(e.dataTransfer.files);
            });
        }

        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) {
            submitBtn.addEventListener('click', function () {
                const fd = new FormData();
                if (thumbnailFile) fd.append('thumbnail', thumbnailFile);
                additionalFiles.forEach((f, i) => fd.append('images[]', f));
                console.log('FormData prepared. thumbnail:', thumbnailFile, 'images count:', additionalFiles.length);
                alert('FormData prepared in console. Implement fetch to send to server.');
            });
        }

        updateGalleryCounter();
    });


    // ===== Image Animation: LTR + RTL ===== //
    document.addEventListener("DOMContentLoaded", () => {
        const bigImage = document.getElementById("bigImage");
        const smallImages = document.querySelectorAll(".small-img");

        if (bigImage && smallImages.length > 0) {
            const container = bigImage.parentElement;
            const isRTL = document.documentElement.dir === "rtl" || document.body.classList.contains("rtl-mode");

            function getFinalSize() {
                if (window.innerWidth >= 1200) {
                    return { finalWidth: 350, finalHeight: 456 };
                } else if (window.innerWidth >= 992) {
                    return { finalWidth: 250, finalHeight: 300 };
                } else if (window.innerWidth >= 768) {
                    return { finalWidth: 350, finalHeight: 450 };
                } else if (window.innerWidth >= 576) {
                    return { finalWidth: 300, finalHeight: 355 };
                } else if (window.innerWidth >= 460) {
                    return { finalWidth: 300, finalHeight: 355 };
                } else {
                    return { finalWidth: 200, finalHeight: 240 };
                }
            }

            function animateImage(img) {
                const containerRect = container.getBoundingClientRect();
                const smallRect = img.getBoundingClientRect();
                const bigRect = bigImage.getBoundingClientRect();

                const clone = img.cloneNode(true);
                clone.classList.add("image-clone");
                container.appendChild(clone);

                clone.style.top = (smallRect.top - containerRect.top) + "px";

                if (isRTL) {
                    clone.style.right = (containerRect.right - smallRect.right) + "px";
                    clone.style.left = "auto";
                } else {
                    clone.style.left = (smallRect.left - containerRect.left) + "px";
                    clone.style.right = "auto";
                }

                clone.style.width = smallRect.width + "px";
                clone.style.height = smallRect.height + "px";

                const { finalWidth, finalHeight } = getFinalSize();

                clone.offsetHeight; // trigger reflow
                requestAnimationFrame(() => {
                    clone.style.top = (bigRect.top - containerRect.top) + "px";

                    if (isRTL) {
                        clone.style.right = (containerRect.right - bigRect.right) + "px";
                        clone.style.left = "auto";
                    } else {
                        clone.style.left = (bigRect.left - containerRect.left) + "px";
                        clone.style.right = "auto";
                    }

                    clone.style.width = finalWidth + "px";
                    clone.style.height = finalHeight + "px";
                });

                ["transitionend", "webkitTransitionEnd", "oTransitionEnd"].forEach(eventName => {
                    clone.addEventListener(eventName, () => {
                        bigImage.src = img.src;
                        bigImage.style.width = finalWidth + "px";
                        bigImage.style.height = finalHeight + "px";

                        setTimeout(() => clone.remove(), 200);
                    }, { once: true });
                });
            }

            smallImages.forEach(img => {
                img.addEventListener("click", () => {
                    animateImage(img);
                });
            });

            let autoIndex = 0;
            function autoAnimate() {
                const img = smallImages[autoIndex];
                animateImage(img);
                autoIndex = (autoIndex + 1) % smallImages.length;
                setTimeout(autoAnimate, 5000);
            }

            setTimeout(autoAnimate, 5000);
        }
    });


    //rs-chat-users-active
    document.querySelectorAll('.rs-chat-users li').forEach(function (item) {
        item.addEventListener('click', function () {
            document.querySelectorAll('.rs-chat-users li')
                .forEach(li => li.classList.remove('active'));
            this.classList.add('active');
        });
    });



    // Message
    document.addEventListener('DOMContentLoaded', function () {
        const input = document.querySelector('.sand-message input[type="text"]');
        const form = document.querySelector('.sand-message form');
        const chatBox = document.querySelector('.rs-massage-area');
        const fileBtn = document.getElementById('fileBtn');
        const fileInput = document.getElementById('fileInput');

        if (!form || !chatBox) return;

        function getDateTime() {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return { date, time };
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;

            const myDT = getDateTime();

            chatBox.insertAdjacentHTML('beforeend', `
            <div class="message-your mb-24">
                <div class="d-flex justify-content-end align-items-start mb-2">
                    <div class="your-massage">${text}</div>
                    <img src="assets/img/massage/author-05.png" alt="me" class="ms-2">
                </div>
                <div class="message-time text-end">
                    <span>${myDT.date}</span> <span>${myDT.time}</span>
                </div>
            </div>
        `);

            input.value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
            setTimeout(() => {
                const replyDT = getDateTime();
                const fakeReplies = [
                    "Wow! sounds great 😃",
                    "Cool! 👍",
                    "Okay, got it.",
                    "Really interesting!",
                    "Haha nice one 😂"
                ];
                const randomReply = fakeReplies[Math.floor(Math.random() * fakeReplies.length)];

                chatBox.insertAdjacentHTML('beforeend', `
                <div class="message-my mb-24">
                    <div class="d-flex align-items-start mb-2">
                        <img src="assets/img/massage/author-03.png" alt="user" class="me-2">
                        <div class="my-message">${randomReply}</div>
                    </div>
                    <div class="message-time">
                        <span>${replyDT.date}</span> <span>${replyDT.time}</span>
                    </div>
                </div>
            `);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1000);
        });
        if (fileBtn && fileInput) {
            fileBtn.addEventListener('click', () => fileInput.click());

            fileInput.addEventListener('change', () => {
                if (fileInput.files.length > 0) {
                    const myDT = getDateTime();
                    const fileName = fileInput.files[0].name;
                    chatBox.insertAdjacentHTML('beforeend', `
                    <div class="message-your mb-24">
                        <div class="d-flex justify-content-end align-items-start mb-2">
                            <div class="your-massage">📎 ${fileName}</div>
                            <img src="assets/img/massage/author-05.png" alt="me" class="ms-2">
                        </div>
                        <div class="message-time text-end">
                            <span>${myDT.date}</span> <span>${myDT.time}</span>
                        </div>
                    </div>
                `);
                    chatBox.scrollTop = chatBox.scrollHeight;

                    setTimeout(() => {
                        const replyDT = getDateTime();
                        chatBox.insertAdjacentHTML('beforeend', `
                        <div class="message-my mb-24">
                            <div class="d-flex align-items-start mb-2">
                                <img src="assets/img/massage/author-03.png" alt="user" class="me-2">
                                <div class="my-message">Nice file 👍</div>
                            </div>
                            <div class="message-time">
                                <span>${replyDT.date}</span> <span>${replyDT.time}</span>
                            </div>
                        </div>
                    `);
                        chatBox.scrollTop = chatBox.scrollHeight;
                    }, 1200);
                }
            });
        }
    });


    // Message-mobile
    const chatWrapper = document.querySelector('.rs-chat-wrapper');
    const userList = document.querySelectorAll('.rs-chat-users li');

    userList.forEach(user => {
        user.addEventListener('click', () => {
            // For mobile only
            if (window.innerWidth <= 767) {
                chatWrapper.classList.add('chat-open');
            }
        });
    });

    // Optionally
    const backBtn = document.createElement('button');
    backBtn.innerHTML = '<i class="fal fa-arrow-left"></i>';
    backBtn.classList.add('chat-back-btn', 'd-md-none');

    const target = document.querySelector('.rs-massage-right-area ul li a');
    if (target) {
        target.prepend(backBtn);

        backBtn.addEventListener('click', () => {
            chatWrapper.classList.remove('chat-open');
        });
    }



    // Header Author dropdown toggle
    $(".tp-header-author").on("click", function (e) {
        e.stopPropagation();
        $(".tp-header-author-thumb-more").toggleClass("active");
    });
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".tp-header-author-thumb-more, .tp-header-author").length) {
            $(".tp-header-author-thumb-more").removeClass("active");
        }
    });


    //================= header-sticky =================//
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $(".rs-header-sticky").addClass("active");
        } else {
            $(".rs-header-sticky").removeClass("active");
        }
    });


    // isotope
    var $grid = $('.grid').imagesLoaded(function () {
        $grid.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item'
            }
        });
    });

    $('.rs-product-filter').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.rs-product-filter').removeClass('active');
        $(this).addClass('active');
    });


    // PreLoader Js
    $(window).on('load', function () {
        var body = $('body');
        body.addClass('loaded');
        setTimeout(function () {
            body.removeClass('loaded');
        }, 1500);
    });

    document.addEventListener("DOMContentLoaded", () => {
        const svg = document.getElementById("svg");
        if (!svg) return;

        const tls = gsap.timeline();
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        // Loader heading text
        if (document.querySelector(".loader-wrap-heading")) {
            tls.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
                delay: 0.5,
                y: -100,
                opacity: 0,
            });
        }



        // SVG animation
        tls.to(svg, {
            duration: 0.5,
            attr: { d: curve },
            ease: "power2.in",
        }).to(svg, {
            duration: 0.5,
            attr: { d: flat },
            ease: "power2.out",
        });

        // Loader wrap
        if (document.querySelector(".loader-wrap")) {
            tls.to(".loader-wrap", { y: -1500 })
                .to(".loader-wrap", { zIndex: -1, display: "none" });
        }

        // Pre-header animation (safe check)
        const preHeader = document.querySelector(".pre-header");
        if (preHeader) {
            tls.from(preHeader, { y: 200 }, "-=1.5");

            const preHeaderCont = preHeader.querySelector(".containers");
            if (preHeaderCont) {
                tls.from(preHeaderCont, {
                    y: 40,
                    opacity: 0,
                    delay: 0.1,
                }, "-=1.5");
            }
        }
    });


    // range
    document.addEventListener("DOMContentLoaded", () => {
        const rangeInput = document.querySelector(".range-input");

        if (!rangeInput) return;

        const isRTL = rangeInput.dir === "rtl";
        const minRange = document.querySelector(".min-range");
        const maxRange = document.querySelector(".max-range");
        const progress = document.getElementById("progress");
        const minValText = document.getElementById("minVal");
        const maxValText = document.getElementById("maxVal");

        if (!minRange || !maxRange || !progress || !minValText || !maxValText) return;

        const minGap = 500;

        function updateSlider(e) {
            let minVal = parseInt(minRange.value);
            let maxVal = parseInt(maxRange.value);

            if (maxVal - minVal <= minGap) {
                if (e.target.classList.contains("min-range")) {
                    minRange.value = maxVal - minGap;
                } else {
                    maxRange.value = minVal + minGap;
                }
            }

            if (isRTL) {
                progress.style.right = (minVal / minRange.max) * 100 + "%";
                progress.style.left = 100 - (maxVal / maxRange.max) * 100 + "%";
            } else {
                progress.style.left = (minVal / minRange.max) * 100 + "%";
                progress.style.right = 100 - (maxVal / maxRange.max) * 100 + "%";
            }

            minValText.textContent = minVal;
            maxValText.textContent = maxVal;
        }

        minRange.addEventListener("input", updateSlider);
        maxRange.addEventListener("input", updateSlider);
        updateSlider({ target: minRange });
    });





    //jarallax
    if ($('.jarallax').length) {
        $('.jarallax').jarallax({
            speed: 0.2,
        });
    }

    //PureCounter
    new PureCounter();
    new PureCounter({
        filesizing: true,
        selector: ".filesizecount",
        pulse: 2,
    });

    //notification
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.rs-notification-card').forEach(function (card) {
            const p = card.querySelector('.rs-notification-text');
            const btn = card.querySelector('.rs-notification-toggle');
            const full = p.dataset.full || "";
            const short = full.slice(0, 102);
            p.textContent = short + (full.length > 102 ? '...' : '');
            function toggleText() {
                const expanded = p.classList.toggle('expanded');
                p.textContent = expanded ? full : short + (full.length > 90 ? '...' : '');
                btn.textContent = expanded ? 'Show less' : 'See more';
            }
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                toggleText();
            });
            card.addEventListener('click', function (e) {
                if (e.target === btn) return;
                toggleText();
            });
        });
    });

    //================ checkout ==================//
    const changeBtn = document.querySelector('.rs-payment-change-item-btn');
    const dropdown = document.querySelector('.rs-payment-dropdown-list');
    const items = dropdown ? dropdown.querySelectorAll('li') : [];
    const daysElement = document.querySelector('.rs-payment-days span');
    const priceElement = document.querySelector('.rs-payment-price');
    if (changeBtn && dropdown && daysElement && priceElement) {
        changeBtn.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });

        items.forEach(item => {
            item.addEventListener('click', () => {
                const [daysPart, pricePart] = item.textContent.split(' - ');
                changeBtn.innerHTML = `${item.textContent} <i class="far fa-angle-down"></i>`;
                dropdown.classList.remove('active');
                const dayNumber = daysPart.match(/\d+/)?.[0] || "0";
                const dayText = daysPart.replace(/[0-9]/g, '').trim();
                daysElement.textContent = dayNumber.padStart(2, '0');
                document.querySelector('.rs-payment-days').childNodes[1].textContent = ` ${dayText}`;
                priceElement.textContent = pricePart;
            });
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.rs-payment-change')) {
                dropdown.classList.remove('active');
            }
        });
    }


    //---- button-active ----//
    const methodButtons = document.querySelectorAll('.rs-payment-method-img-btn');
    methodButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            methodButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });


    //---- Template Settings Active ----//
    $(document).ready(function () {
        const settingsPanel = $('.rs-template-settings');
        const settingsIcon = $('.rs-template-settings-icon');
        settingsIcon.on('click', function (e) {
            e.stopPropagation();
            settingsPanel.toggleClass('active');

            let icon = $(this).find('i');
            if (settingsPanel.hasClass('active')) {
                icon.removeClass('fa-cog').addClass('fa-times');
            } else {
                icon.removeClass('fa-times').addClass('fa-cog');
            }
        });
        $(document).on('click', function (e) {
            if (
                settingsPanel.hasClass('active') &&
                !$(e.target).closest('.rs-template-settings, .rs-template-settings-icon').length
            ) {
                settingsPanel.removeClass('active');
                settingsIcon.find('i').removeClass('fa-times').addClass('fa-cog');
            }
        });
    });


    // ===== Page rtl ===== //
    $(document).ready(function () {
        let dir = localStorage.getItem('page-direction');
        if (!dir) {
            dir = 'ltr';
            localStorage.setItem('page-direction', 'ltr');
        }
        $('html').attr('dir', dir);
        if (dir === 'rtl') {
            $('body').addClass('rtl-mode');
            $('.rs-template-settings-button-rtl button:contains("Rtl")').addClass('active');
            $('.rs-template-settings-button-rtl button:contains("Ltr")').removeClass('active');
        } else {
            $('body').removeClass('rtl-mode');
            $('.rs-template-settings-button-rtl button:contains("Ltr")').addClass('active');
            $('.rs-template-settings-button-rtl button:contains("Rtl")').removeClass('active');
        }

        // ===== Page load: Dark/Light ===== //
        let theme = localStorage.getItem('page-theme') || 'light';
        if (theme === 'dark') {
            $('body').addClass('dark-mode');
            $('.rs-template-settings-button button:contains("Dark")').addClass('active');
            $('.rs-template-settings-button button:contains("Light")').removeClass('active');
        } else {
            $('body').removeClass('dark-mode');
            $('.rs-template-settings-button button:contains("Light")').addClass('active');
            $('.rs-template-settings-button button:contains("Dark")').removeClass('active');
        }

        // ===== Button click: RTL/LTR (with reload) ===== //
        $('.rs-template-settings-button-rtl button').on('click', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            if ($(this).text().trim().toLowerCase() === 'rtl') {
                localStorage.setItem('page-direction', 'rtl');
            } else {
                localStorage.setItem('page-direction', 'ltr');
            }
            location.reload();
        });

        // ===== Button click: Dark/Light (no reload) ===== //
        $('.rs-template-settings-button button').on('click', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            if ($(this).text().trim().toLowerCase() === 'dark') {
                $('body').addClass('dark-mode');
                localStorage.setItem('page-theme', 'dark');
            } else {
                $('body').removeClass('dark-mode');
                localStorage.setItem('page-theme', 'light');
            }
        });
    });


    // product-title
    document.addEventListener('DOMContentLoaded', function () {
        const $grid = $('.rs-product-wrapper').data('isotope') ? $('.rs-product-wrapper') : null;
        document.querySelectorAll('.rs-product-content, .rs-product-details-info').forEach(function (card) {
            const title = card.querySelector('.rs-product-title, .rs-product-details-info-title');
            if (!title) return;

            const link = title.querySelector('a');
            const fullText = link ? link.textContent.trim() : title.textContent.trim();

            const words = fullText.split(/\s+/);
            const shortText = words.slice(0, 11).join(' ') + (words.length > 11 ? ' ...' : '');
            if (link) link.textContent = shortText;
            else title.textContent = shortText;

            let expanded = false;

            function toggleText() {
                expanded = !expanded;
                card.style.transition = 'all 0.3s ease';
                title.style.transition = 'all 0.3s ease';

                if (link) {
                    link.textContent = expanded ? fullText : shortText;
                } else {
                    title.textContent = expanded ? fullText : shortText;
                }
                if ($grid) {
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            $grid.isotope('layout');
                        }, 150);
                    });
                }
            }
            title.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                toggleText();
            });
        });
    });


    //---- promote-text ----//
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.rs-promote-box').forEach(card => {
            const title = card.querySelector('.rs-promote-text p');
            if (!title) return;

            const link = title.querySelector('a');
            const fullText = (link ? link.textContent : title.textContent).trim();
            const limit = 150;
            const shortText = fullText.length > limit ? fullText.slice(0, limit) + ' ...' : fullText;
            let expanded = false;

            const updateText = () => {
                (link || title).textContent = expanded ? fullText : shortText;
            };

            updateText();

            title.addEventListener('click', e => {
                e.preventDefault();
                expanded = !expanded;
                updateText();
            });
        });
    });


    //---- count-text ----//
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.rs-count-item').forEach(card => {
            const title = card.querySelector('.rs-count-text');
            if (!title) return;

            const link = title.querySelector('a');
            const fullText = (link ? link.textContent : title.textContent).trim();
            const limit = 50;
            const shortText = fullText.length > limit ? fullText.slice(0, limit) + ' ...' : fullText;
            let expanded = false;

            const updateText = () => {
                (link || title).textContent = expanded ? fullText : shortText;
            };

            updateText();

            title.addEventListener('click', e => {
                e.preventDefault();
                expanded = !expanded;
                updateText();
            });
        });
    });


    //popup
    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    // wow animation
    new WOW().init();

})(jQuery);