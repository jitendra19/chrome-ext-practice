let bobRossImages = [
  "images/PASSPORT_PHOTO.jpg",
  "images/personal_photo.jpeg",
  "images/amma_photo.jpeg",
  "./images/baba.jpeg",
  "images/IMG_20230920_074025.jpg",
  "images/IMG_20180615_174725__01.jpg",
  "images/IBM_GrowthBehaviorsChampion.png",
  "images/IMG_20230920_074025-removebg-preview.jpg",
  "images/photo.png",
  "images/photo_copy_2.jpg",
  "images/IMG_5535.jpg",
  "https://bit.ly/3Ck6DTU",
  "https://bit.ly/30zQCVk",
  "https://bit.ly/3omYDN6",
  "https://bit.ly/3osrfoi",
  "https://bit.ly/3qCPjax",
  "https://bit.ly/3CkRXE6"
];
  
const imgs = document.getElementsByTagName("img");

for(image of imgs){
  const index = Math.floor(Math.random() * bobRossImages.length);
  if(index > 11) {
      image.src = bobRossImages[index];
  } else {
      const imgURL = chrome.runtime.getURL(bobRossImages[index]);
      image.src = imgURL;
  }
  
  // console.log("This is a popup! - " + imgURL);
  
}

