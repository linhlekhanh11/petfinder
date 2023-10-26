const imageContainer = document.getElementById("image-container");
const loader = document.getElementById('loader');

let photosArray = [];

//Pet Finder API
const count = 10;
const apiKey = "bDC5qfRJiYYXUWk3QMI12kzXbbNisVTxciIg3mPPz7I";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=pet`;

//Helper Function to Set Attributes on DOM Elements
function setAttribute(element,attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

//Create Elements for Links and Photos, Add to DOM

function displayPhotos() {
    photosArray.forEach((photo) => {
        //create <a>
        const item = document.createElement('a');
        setAttribute(item, {
            href: photo.links.html,
            target: '_blank',
        })
        // create <img>
        const img = document.createElement('img')
        setAttribute(img, {
          src: photo.urls.regular,
          alt: photo.alt_description,
          title: photo.alt_description,
        });
        
        //Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img)
        imageContainer.appendChild(item)
    });
}

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        console.log(photosArray)
    } catch (error) {

    }
}

getPhotos();