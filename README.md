# virtualWallet
https://www.figma.com/community/file/928559061120466831

**eWallet**
<iframe width="560" height="315" src="https://www.youtube.com/embed/gUk8lt0-D3o?si=TohERMAIzsGyhLR7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

For the carousel i used **javaScript**
![image](https://github.com/SebastianCardenasYanez/virtualWallet/assets/160754840/8d4ae190-b011-40dc-968f-caf394cad330)

**const slides:** This line of code selects all HTML elements with the CSS class .main_article and stores them in a variable named slides. querySelectorAll returns a list of nodes matching the specified selector.

**let currentSlide = 0;:** initializes a variable named currentSlide which will be used to keep track of the index of the current slide. It starts at 0, meaning the first slide will be initially shown.

**function nextSlide() { ... }:** This defines a function named nextSlide(), which is responsible for switching to the next slide in the slideshow.

**slides[currentSlide].style.animation = 'none';:** This stops any animation on the current slide by setting its style's animation property to 'none'.

**setTimeout(() => { ... }, 100);:** This block of code waits for 100 milliseconds before executing the inner code. This allows the current animation to stop before starting the next slide.

**slides[currentSlide].style.animation = 'slide 9s infinite';:** This line sets the animation for the current slide. The animation is named 'slide', lasts for 9 seconds ('9s'), and repeats infinitely ('infinite').

**currentSlide = (currentSlide + 1) % slides.length;:** This updates currentSlide to the index of the next slide. It uses the % operator to ensure the index stays within the range of the number of slides.

**setInterval(nextSlide, 13000);:** This calls the nextSlide function every 13 seconds (13000 milliseconds), causing the slideshow to automatically advance to the next slide after that time. The nextSlide function will repeatedly execute at this interval.


I created a class .carousel for did the animation of the slides and the class .main_article have the cards 
![image](https://github.com/SebastianCardenasYanez/virtualWallet/assets/160754840/c0db988d-36a2-438e-9ec6-b26311999cc5)
and i added for the cards the animation of slides
![image](https://github.com/SebastianCardenasYanez/virtualWallet/assets/160754840/874cc177-a270-4457-9430-bc9362bf1727)




