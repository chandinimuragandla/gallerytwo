document.addEventListener('DOMContentLoaded', () => {
    var galleryContainer = document.getElementById('gallery-container');
    var dynamicStyles = document.getElementById('dynamic-styles');

    // Array of image URLs
    var images = [
        'https://cdn.pixabay.com/photo/2024/03/13/09/28/ai-generated-8630602_1280.png',
        'https://cdn.pixabay.com/photo/2022/05/17/02/11/fractal-7201481_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/08/28/01/33/quantum-7415566_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/08/28/01/33/northern-7415567_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/10/07/15/57/mushrooms-7505404_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/08/28/01/40/cyberpunk-city-7415576_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/05/18/23/07/fractal-art-7206297_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/08/28/01/34/studio-ghibli-7415572_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/08/28/01/32/dreaming-7415565_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/08/28/01/33/wallpaper-7415568_1280.jpg'
    ];

    // CSS styles for the gallery
    dynamicStyles.textContent = `
        #gallery {
            display: flex;
            width: 470px;
            height: 200px;
            overflow-x: scroll;
            gap: 10px;
            background-color: aliceblue;
            border-radius: 6px;
            padding: 10px;
            align-items: center;
        }
        #gallery::-webkit-scrollbar {
            display: none;
        }
        .gallery-item {
            flex: 0 0 auto;
            transition: transform 0.3s, border-color 0.3s;
        }
        .gallery-item img {
            width: 180px;
            height: auto;
            display: block;
            filter: grayscale(100%);
            transition: transform 0.3s;
        }
        .gallery-item img:hover {
            filter: grayscale(0);
        }
        .gallery-item:hover {
            transform: scale(1.1);
            
        }
        #next {
            position: absolute;
            margin-left: 440px;
            margin-top: -40px;
            background-color: rgb(2, 170, 58);
            border-radius: 6px;
            width: 40px;
            height: 30px;
            font-size: 20px;
            color: white;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        #prev {
            position: absolute;
            margin-left: 10px;
            margin-top: -40px;
            background-color: rgb(2, 170, 58);
            border-radius: 6px;
            width: 40px;
            height: 30px;
            font-size: 20px;
            color: white;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        #prev:hover, #next:hover {
            background-color: rgb(1, 79, 24);
        }
    `;

    // Create the gallery element
    var gallery = document.createElement('div');
    gallery.id = 'gallery';
    galleryContainer.appendChild(gallery);

    // Create gallery items
    images.forEach(src => {
        var item = document.createElement('div');
        item.className = 'gallery-item';
        var img = document.createElement('img');
        img.src = src;
        item.appendChild(img);
        gallery.appendChild(item);
    });

    // Create navigation buttons
    var prevButton = document.createElement('button');
    prevButton.id = 'prev';
    prevButton.textContent = '<';
    var nextButton = document.createElement('button');
    nextButton.id = 'next';
    nextButton.textContent = '>';
    galleryContainer.appendChild(prevButton);
    galleryContainer.appendChild(nextButton);

    // Scroll gallery on button click
    prevButton.addEventListener('click', () => {
        gallery.scrollBy({ left: -200, behavior: 'smooth' });
    });
    nextButton.addEventListener('click', () => {
        gallery.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // Scroll gallery on mouse wheel
    gallery.addEventListener('wheel', (event) => {
        event.preventDefault();
        gallery.scrollBy({ left: event.deltaY > 0 ? 100 : -100 });
    });
});