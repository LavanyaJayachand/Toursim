let slideIndex = 1;

// Show the current slide
showSlides(slideIndex);

// Show the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Show the slide clicked in thumbnails
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let thumbnails = document.getElementsByClassName("thumbnail");
  let captionText = document.getElementById("caption");

  // Loop through all slides and hide them
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Loop through thumbnails and remove 'active' class
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active");
  }

  // Display the current slide and set the active thumbnail
  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].classList.add("active");

  // Set the caption
  captionText.innerHTML = "Be the first to Explore the Wild ";
  if (slideIndex === 1) {
    document.getElementById('dynamic-title').innerText = "Vandalur zoo";
    document.getElementById('dynamic-content').innerText = "Arignar Anna Zoological Park was the first Zoo established in the country in 1855. It is one of the largest Zoos in Southeast Asia, spreading across 602 hectares of land.It is one of the most modern and scientifically managed Zoos in the country and it is rated as the Best Zoo in the country with a top score of 82 % in the first Management Effectiveness Evaluation conducted by the Central Zoo Authority, MOEF & CC.The park works with the mission of conservation breeding of rare and endangered animals, veterinary care & conservation education.";
    document.getElementById('timings').innerText = "Timings: 9:00 AM - 5:00 PM (Closed on Tuesdays)";
  }
  else if (slideIndex === 2) {
    document.getElementById('dynamic-title').innerText = "Guindy National park";
    document.getElementById('dynamic-content').innerText = "If you want to see wild animals and don’t feel like travelling much deeper into the jungles, then you can always go to Chennai. Guindy National Park, the 8th smallest national park in India is right here within the city limits. Covered with lush green vegetation, Guindy National Park is an idyllic spot to spend a day in the shades of varied species of trees, watching animals. An extension of the grounds surrounding the Tamil Nadu Raj Bhavan (the Governor’s residence), it extends deep inside the Governor’s estate and is filled with picturesque forests, scrubs and streams. ";
    document.getElementById('timings').innerText = "Timings: 9:00 AM - 6:00 PM (Open every day)";


  }
  else if (slideIndex === 3) {
    document.getElementById('dynamic-title').innerText = "Crocodile Bank";
    document.getElementById('dynamic-content').innerText = "One of the popular tourist attractions, Madras Crocodile Bank Trust and Centre for Herpetology (MCBT), commonly known as Crocodile Bank is located 40 kms from the city of Chennai. It is one of the largest reptile zoos in the world, spread across over 8.5 acres of land.Once the need for the conservation of reptiles grew, the Crocodile Bank took up the preservation of turtles, lizards and snakes as well and came to be known as the Madras Crocodile Bank Trust and Center for Herpetology in 2003";
    document.getElementById('timings').innerText = "Timings: 9:00 AM - 6:00 PM (Open every day)";

  }
  else if (slideIndex === 4) {
    document.getElementById('dynamic-title').innerText = "Guindy Childrens park";
    document.getElementById('dynamic-content').innerText = "Located in the heart of Chennai, Guindy Children's Park is a delightful destination for families and nature lovers. As a part of Guindy National Park, this park offers a unique opportunity to experience wildlife up close in a fun and educational environment.The park is home to various animals, including spotted deer, blackbucks, tortoises, peacocks, and different bird species. It also features a reptile house showcasing snakes and other fascinating creatures. Designed especially for children, the park provides spacious play areas, shaded picnic spots, and engaging exhibits to spark curiosity about nature and conservation.";
    document.getElementById('timings').innerText = "Timings: 10:00 AM - 6:00 PM (Open every day)";

  }
  else if (slideIndex === 5) {
    document.getElementById('dynamic-title').innerText = "Chennai Snake park";
    document.getElementById('dynamic-content').innerText = "As of now, the Snake Park has on display, 20 species of Indian snakes, all three species of Indian crocodilians, two species of exotic crocodiles, three species of Indian turtles/tortoises, four species of Indian lizards and four species of exotic reptiles (iguanas, slider turtles, spitting cobras, albino pythons) making a total of  36 species.The snakes are all housed in glass - fronted reptile - friendly and visitor - friendly enclosures.";
    document.getElementById('timings').innerText = "Timings: 9:00 AM - 5:00 PM (Open every day)";

  }



}

let slideIndex2 = 1;

// Show the current slide
showSlides2(slideIndex2);

// Show the next or previous slide
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Show the slide clicked in thumbnails
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

// Function to display the slide
function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("slide2");
  let thumbnails2 = document.getElementsByClassName("thumbnail2");
  let captionText2 = document.getElementById("caption2");

  // Loop through all slides and hide them
  if (n > slides2.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = slides2.length }

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  // Loop through thumbnails and remove 'active' class
  for (i = 0; i < thumbnails2.length; i++) {
    thumbnails2[i].classList.remove("active2");
  }

  // Display the current slide and set the active thumbnail
  slides2[slideIndex2 - 1].style.display = "block";
  thumbnails2[slideIndex2 - 1].classList.add("active2");

  // Set the caption
  captionText2.innerHTML = "Relax and Enjoy the Beach Vibes";
  if (slideIndex2 === 1) {
    document.getElementById('dynamic-title2').innerText = "Marina Beach";
    document.getElementById('dynamic-content2').innerText = "Marina Beach is a natural urban beach located along the Bay of Bengal in Chennai. It stretches for about 13 kilometers, from Fort St. George in the north to Besant Nagar in the south, making it the longest natural urban beach in India and the second longest in the world. This sandy beach is a very popular tourist attraction, attracting 30,000 visitors every day. The beach is famous for its beautiful sunrises and sunsets, wide sandy shore and cool breezes. The beach also has various food stalls, souvenir shops and offers activities like horse rides. ";
    document.getElementById('timings2').innerText = "Open 24/7";
  }
  else if (slideIndex2 === 2) {
    document.getElementById('dynamic-title2').innerText = "Elliot's Beach";
    document.getElementById('dynamic-content2').innerText = "Known alternatively as Besant Nagar Beach, or “Bessie” for short, Elliot's Beach sits at the south end of the Marina Beach shore. A former expatriate enclave during Chennai’s colonial era, today the beach attracts throngs of twentysomethings, as well as families looking to avoid the crowds at the more popular Marina Beach.";
    document.getElementById('timings2').innerText = "Open 24/7";
  }
  else if (slideIndex2 === 3) {
    document.getElementById('dynamic-title2').innerText = "Covelong Beach";
    document.getElementById('dynamic-content2').innerText = "Covelong Beach is famous for its water sports activities, including surfing and windsurfing. It’s a great weekend getaway destination with stunning scenic beauty.";
    document.getElementById('timings2').innerText = "Timings: 6:00 AM - 6:00 PM";
  }
  else if (slideIndex2 === 4) {
    document.getElementById('dynamic-title2').innerText = "Thiruvanmiyur Beach";
    document.getElementById('dynamic-content2').innerText = "Thiruvanmiyur Beach is a peaceful and less crowded beach, making it perfect for morning jogs and yoga sessions. The sunrise views here are breathtaking.";
    document.getElementById('timings2').innerText = "Open 24/7";
  }
  else if (slideIndex2 === 5) {
    document.getElementById('dynamic-title2').innerText = "Neelankarai Beach";
    document.getElementById('dynamic-content2').innerText = "Neelankarai Beach is known for its natural beauty and quiet atmosphere. It’s a great spot for those looking for a peaceful escape from the city crowd.";
    document.getElementById('timings2').innerText = "Open 24/7";
  }
}
