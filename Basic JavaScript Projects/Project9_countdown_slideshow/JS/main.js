let slideIndex = 1;
        let timeout;

        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            // clear timeout each time this function is called before creating a new one
            if (timeout != null) {
                clearTimeout(timeout);
            }

            const slides = document.getElementsByClassName("mySlides");
            const dots = document.getElementsByClassName("dot");
            // Wrap indices back around to the beginning/end of the slideshow
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            
            // Change active state of slides and dots
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";

            // Auto advance to the next slide every 3 seconds (3000 milliseconds)
            timeout = setTimeout(function () {
                plusSlides(1);
            }, 3000);
        }