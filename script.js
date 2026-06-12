let images = [
    "images/sliderWatch.jpg",
    "images/RobotWatch.jpg",
        "images/sliderImage3.png",

     "images/sliderImage4.png",
    "images/sliderImage5.png",

];

// let images = [
//     "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&q=80&w=1920",
//     "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1920",
//     "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=1920",
//     "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1920"
// ];

let currentIndex = 0;
const track = document.getElementById('slider-track');

function setupSlider() {
    track.innerHTML = ""; 
    
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('slide');
        img.alt = "Watch Banner";
        track.appendChild(img);
    });
}

setupSlider();

const totalSlides = images.length;

function updateSliderPosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function next() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
}

function prev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateSliderPosition();
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const heartContainer = card.querySelector('.heart-container');
    
    if (heartContainer) {
        const heartIcon = document.createElement('i');
        heartIcon.className = 'fa fa-heart-o card-heart';
        heartIcon.style.color = '#05f270'; 
        
        heartIcon.addEventListener('click', function() {
            if (this.classList.contains('fa-heart-o')) {
                this.classList.remove('fa-heart-o');
                this.classList.add('fa-heart');
            } else {
                this.classList.remove('fa-heart');
                this.classList.add('fa-heart-o');
            }
        });
        
        heartContainer.appendChild(heartIcon);
    }
});