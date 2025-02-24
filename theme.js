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
    document.getElementById('dynamic-content2').innerText = "Known alternatively as Besant Nagar Beach, or “Bessie” for short, Elliot's Beach sits at the south end of the Marina Beach shore. A former expatriate enclave during Chennai’s colonial era, today the beach attracts throngs of twentysomethings, as well as families looking to avoid the crowds at the more popular Marina Beach.A prominent landmark on this beach is the Karl Schmidt Memorial. The memorial is named after the Dutch sailor who lost his life trying to save a girl from drowning.";
    document.getElementById('timings2').innerText = "Open 24/7";
  }
  else if (slideIndex2 === 3) {
    document.getElementById('dynamic-title2').innerText = "Covelong Beach";
    document.getElementById('dynamic-content2').innerText = "This charming beach is located in the fishing village of Covelong, located 40 km away from Chennai. The port town of Covelong was established by the Nawab of Carnatic. The original name of this destination is ‘Kovalam’ and the beach is often referred to as the Kovalam beach. The port is visible from the beach and offers the visitors a grand and stunning view. Located in the Coromandel coast along the Bay of Bengal, the Covelong Beach is located on the way to Mahabalipuram, making it a perfect stopover destination for visitors. ";
    document.getElementById('timings2').innerText = "Timings: 6:00 AM - 6:00 PM";
  }
  else if (slideIndex2 === 4) {
    document.getElementById('dynamic-title2').innerText = "Thiruvanmiyur Beach";
    document.getElementById('dynamic-content2').innerText = "Thiruvanmiyur beach is also one of the most quiet and isolated beaches in Chennai, making it ideal to enjoy the stunning view of the sea. Many people visit the spot to enjoy the sunset view that is quite breathtaking. Smart bike cycling is one initiative that is of attraction here. You can experience the view of the beach by renting cycles and going around. Thiruvanmiyur beach is also a perfect spot for beach sports, if you are into such entertainments. Whether football, volleyball or the local favourite cricket, the beach will for sure be a perfect host";
    document.getElementById('timings2').innerText = "Open 24/7";
  }
  else if (slideIndex2 === 5) {
    document.getElementById('dynamic-title2').innerText = "Neelankarai Beach";
    document.getElementById('dynamic-content2').innerText = "Like many coastal areas of Chennai, Neelankarai beach also has a rich historical heritage. The name Neelankarai is believed to be derived from the Tamil words neela and karai, which together mean blue noise. The nomenclature refers to the calm blue waters of the Bay of Bengal that gently kiss the sandy shores. For centuries, Neelankarai beach has witnessed the ups and downs of traders, fishermen and sailors. Its history is deeply intertwined with the maritime culture of Chennai, and it offers visitors a glimpse of the past while embracing the present as a tranquil escape";
    document.getElementById('timings2').innerText = "Open 24/7";
  }
}
let slideIndex3 = 1;

// Show the current slide
showSlides3(slideIndex3);

// Show the next or previous slide
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Show the slide clicked in thumbnails
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

// Function to display the slide
function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("slide3");
  let thumbnails3 = document.getElementsByClassName("thumbnail3");
  let captionText3 = document.getElementById("caption3");

  // Loop through all slides and hide them
  if (n > slides3.length) { slideIndex3 = 1 }
  if (n < 1) { slideIndex3 = slides3.length }

  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }

  // Loop through thumbnails and remove 'active' class
  for (i = 0; i < thumbnails3.length; i++) {
    thumbnails3[i].classList.remove("active3");
  }

  // Display the current slide and set the active thumbnail
  slides3[slideIndex3 - 1].style.display = "block";
  thumbnails3[slideIndex3 - 1].classList.add("active3");

  // Set the caption
  captionText3.innerHTML = "Explore and find peace";
  if (slideIndex3 === 1) {
    document.getElementById('dynamic-title3').innerText = "Sri Aurobindo Ashram";
    document.getElementById('dynamic-content3').innerText = "Sri Aurobindo Ashram is located in Pondicherry, a small coastal town 160 km south of Chennai, in South India. Visitors wanting to travel to Pondicherry will most likely have to pass through Chennai, whether they arrive there by air, train or road, and thereafter cover the remaining distance to Pondicherry by road, a journey which generally takes about 3 hours.A limited number of rooms are available in Ashram guest houses for visitors coming for a short visit to Sri Aurobindo Ashram. Since accommodation is limited and is often fully booked, it is advisable to make reservations in advance.";
    document.getElementById('timings3').innerText = "Open 24/7";
  }
  else if (slideIndex3 === 2) {
    document.getElementById('dynamic-title3').innerText = "Semozhi Poonga";
    document.getElementById('dynamic-content3').innerText = "Semmozhi Poonga is one of the most visited botanical gardens in all of Chennai. The beautiful landscaping at the garden has not only made it a delight for the daily morning walkers but has also attracted film makers and tourists. A huge parking lot, a canteen that serves delicious refreshments, and a beautiful artificial pond with ducks that are the children’s favorite, Semmozhi Poonga has become a must visit destination in the city.";
    document.getElementById('timings3').innerText = "Open 24/7";
  }
  else if (slideIndex3 === 3) {
    document.getElementById('dynamic-title3').innerText = "Chetpet Ecopark";
    document.getElementById('dynamic-content3').innerText = "Chetpet Ecopark, a major attraction in Chennai, is located on the shore of Chetpet Lake. It is managed by Tamil Nadu Fisheries Development Corporation.In Chetpet Ecopark, you can enjoy activities like walking, jogging, angling, and boating. It has a children’s play area, canteen and an aquarium. You can spot animals and bird statues placed everywhere in this park. It is a major spot where you can relax and enjoy here with your family and friends.";
    document.getElementById('timings3').innerText = "Timings: 6:00 AM - 6:00 PM";
  }
  else if (slideIndex3 === 4) {
    document.getElementById('dynamic-title3').innerText = "Theosophical Society";
    document.getElementById('dynamic-content3').innerText = "Theosophical Society is one of the popular attractions in the city of Chennai. A peaceful heaven in the middle of the bustling city situated in Besant Nagar, near Elliot’s beach along the Adyar River. It was founded by Annie Besant in the year 1875. The Society played a vital role in the revival of Hindu culture. It is a lovely oasis in the middle of Chennai.It is one of the must to visit place in chennai where you experience a unique atmosphere";
    document.getElementById('timings3').innerText = "Open 24/7";
  }
  else if (slideIndex3 === 5) {
    document.getElementById('dynamic-title3').innerText = "Anna Tower Park";
    document.getElementById('dynamic-content3').innerText = "Anna Park is a popular destination with many attractions and activities, making it the perfect place to visit for those seeking relaxation, relaxation and natural beauty. Located in the heart of the crowded city, This Park offers its visitors a peaceful urban environment where they can be in touch with nature and enjoy many fun activities.One of the main reasons to visit Anna Park is its natural beauty and peaceful environment. The park is adorned with green trees, beautiful flowers and well-maintained creating a beautiful place for a walk or picnic.";
    document.getElementById('timings3').innerText = "Open 24/7";
  }
}   






let slideIndex4 = 1;

// Show the current slide
showSlides4(slideIndex4);

// Show the next or previous slide
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

// Show the slide clicked in thumbnails
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

// Function to display the slide
function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName("slide4");
  let thumbnails4 = document.getElementsByClassName("thumbnail4");
  let captionText4 = document.getElementById("caption4");

  // Loop through all slides and hide them
  if (n > slides4.length) { slideIndex4 = 1 }
  if (n < 1) { slideIndex4 = slides4.length }

  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }

  // Loop through thumbnails and remove 'active' class
  for (i = 0; i < thumbnails4.length; i++) {
    thumbnails4[i].classList.remove("active4");
  }

  // Display the current slide and set the active thumbnail
  slides4[slideIndex4 - 1].style.display = "block";
  thumbnails4[slideIndex4 - 1].classList.add("active4");

  // Set the caption
  captionText4.innerHTML = "";
  if (slideIndex4 === 1) {
    document.getElementById('dynamic-title4').innerText = "Santhome Church";
    document.getElementById('dynamic-content4').innerText = " Santhome Church in  Chennai also known as Santhome Cathedral Basilica and International Shrine of Saint Thomas Cathedral Basilica, sits on the tomb built over the mortal remains of one of the twelve Apostles of Jesus Christ.The historical significance of this place makes it a holy place  Saint Thomas had come to India in A.D.52, was martyred in A.D.72 and buried in this very site then known as Mylapore.  “San Thome” assumes its name from Saint Thomas.Anyone can visit this sacred place of god and feel his presence in every breath of air.";
    document.getElementById('timings4').innerText = "Open 24/7";
  }
  else if (slideIndex4 === 2) {
    document.getElementById('dynamic-title4').innerText = "St. George's Cathedral";
    document.getElementById('dynamic-content4').innerText = "St. George's Cathedral is the Cathedral Church of the CSI Diocese of Madras. Located at the center of the Capital of Tamil Nadu, this cathedral is a grand and awe-inspiring structure. Known as the grand house of prayer for worshippers who make this place their second home, the cathedral is an idol of grandeur and peace. Being the mother church of the Church of South India Diocese, it also encourages the participation of congregations for the growth and abundance of the rural communities.";
    document.getElementById('timings4').innerText = "Open 24/7";
  }
  else if (slideIndex4 === 3) {
    document.getElementById('dynamic-title4').innerText = "The Velankanni Shrine";
    document.getElementById('dynamic-content4').innerText = "he Velankanni Shrine (Basilica of Our Lady of Good Health) in India is a special place for Christians and its a great spot for pilgrims.Annai Velankanni Church, Tamil Nadu People from all over the world and different religious backgrounds come here to pay their respects.Velankanni church is truly a amazing place to experience spirituality and get closer to God through Velankanni matha Mary, also known as Our Lady of Good Health, is the reason for the shrines existence.";
    document.getElementById('timings4').innerText = "Open 24/7";
  }
  else if (slideIndex4 === 4) {
    document.getElementById('dynamic-title4').innerText = "The Little Mount Church";
    document.getElementById('dynamic-content4').innerText = "The Little Mount Church, constructed to commemorate the nineteenth centenary of the martyrdom of St. Thomas, has a circular plan designed around a central vertical axis. It signifies that a Christian community is always an inclusive community transcending all human-made distinctions and discriminations.The restored Church has four parts: the arched entrance, the circular Church with a central nave, the aisle around it and the inner chancel of the sanctum. ";
    document.getElementById('timings4').innerText = "Open 24/7";
  }
  else if (slideIndex4 === 5) {
    document.getElementById('dynamic-title4').innerText = "St. Thomas Mount";
    document.getElementById('dynamic-content4').innerText = "St. Thomas Mount, the Holy Hill with it's spiritual, historical and Architectural importance just completed celebrating the Quincentennial year. The yearlong celebrations were launched by His Excellency Most Rev Leopoldo Girelli, Nuncio for India and Nepal, on this Holy Hill.The Shrine has seen 500 years of uninterrupted liturgical celebrations with Holy masses and related liturgical activities on a day-to-day basis.";
    document.getElementById('timings4').innerText = "Open 24/7";
  }
}
 


let slideIndex5 = 1;

// Show the current slide
showSlides5(slideIndex5);

// Show the next or previous slide
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

// Show the slide clicked in thumbnails
function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

// Function to display the slide
function showSlides5(n) {
  let i;
  let slides5 = document.getElementsByClassName("slide5");
  let thumbnails5 = document.getElementsByClassName("thumbnail5");
  let captionText5 = document.getElementById("caption5");

  // Loop through all slides and hide them
  if (n > slides5.length) { slideIndex5 = 1 }
  if (n < 1) { slideIndex5 = slides5.length }

  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }

  // Loop through thumbnails and remove 'active' class
  for (i = 0; i < thumbnails5.length; i++) {
    thumbnails5[i].classList.remove("active5");
  }

  // Display the current slide and set the active thumbnail
  slides5[slideIndex5 - 1].style.display = "block";
  thumbnails5[slideIndex5 - 1].classList.add("active5");

  // Set the caption
  captionText5.innerHTML = "";
  if (slideIndex5 === 1) {
    document.getElementById('dynamic-title5').innerText = "Kapaleeshwarar Temple";
    document.getElementById('dynamic-content5').innerText = "One of the imposing religious sites of Chennai city is the noted Kapaleeswarar Temple that is majestically set in the Mylapore region of Chennai. It is said the Shiva Lingam in the temple is Swayambulingam, which means it is self-manifested.The temple is also known as Vedapuri as the four Vedas are worshipped at this auspicious place. The other name given to the religious site is Sukrapuri as Sage Sukracharya offered his prayers to Lord Shiva at this location to regain his eyesight.";
    document.getElementById('timings5').innerText = "Open 24/7";
  }
  else if (slideIndex5 === 2) {
    document.getElementById('dynamic-title5').innerText = "Parthasarathy Temple";
    document.getElementById('dynamic-content5').innerText = "Pulsating city of Chennai offers a great blend of mouth-watering cuisines and varied cultures. Second largest IT exporter of the country is dotted with majestic beaches, historical gems and splendid religious shrines.Travellers would be delighted to visit the imposing ancient shrines located in the city. Parthasarathy temple is one of the precious charms of Chennai dedicated to Lord Parathasarthy, a manifestation of Lord Vishnu.";
    document.getElementById('timings5').innerText = "Open 24/7";
  }
  else if (slideIndex5 === 3) {
    document.getElementById('dynamic-title5').innerText = "Sri Ashtalakshmi Temple";
    document.getElementById('dynamic-content5').innerText = "Sri Ashtalakshmi Temple was built in 1976 blessed and on the wishes from Sri Chandrashekarendra Saraswati swamigal of Kanchi Mutt. The temple is model of the Sundhararaja Perumal Temple in Uthiramerur.As per the ancient Vedas, when the ocean was swirled during Samudra Manthan by the Devas and Asuras, Goddess Lakshmi emerged out of the ocean and endowed wealth and prosperity to her devotees. It is also believed that Maha Vishnu married Goddess Lakshmi and also the eight forms of Goddess Lakshmi where they together live in the temple. Hence the name Ashtalakshmi (eight forms of Lakshmi).";
    document.getElementById('timings5').innerText = "Timings: 6:00 AM - 6:00 PM";
  }
  else if (slideIndex5 === 4) {
    document.getElementById('dynamic-title5').innerText = "Vadapalani Murugan Temple";
    document.getElementById('dynamic-content5').innerText = "Vadapalani  Murugan Temple also known as the “Vadapalani Andavar Temple” is one of the most famous temples of Tamil Nadu, It is dedicated to the Vadapalani Aandavar (Lord Muruga). The Temple is located in the Vadapalani, Chennai, Tamil Nadu state of India. It is included in the temple, which is managed and administrated by the Government Authority. The temple construction was completed in 1865. This temple has grown in popularity, which is believed to be in part due to the patronage of cinema stars. Many people visit this temple annually across India.";
    document.getElementById('timings5').innerText = "Open 24/7";
  }
  else if (slideIndex5 === 5) {
    document.getElementById('dynamic-title5').innerText = "The Kandaswamy Temple";
    document.getElementById('dynamic-content5').innerText = "The Kandaswamy Temple in Thiruporur is a renowned Hindu temple dedicated to Lord Murugan, also known as Kandaswamy. Located about 28 kilometers from Chennai on the Old Mahabalipuram Road, this temple is a must-visit for its rich history, stunning architecture, and spiritual significance.The Kandaswamy Temple in Tirupporur, Tamil Nadu, is a stunning example of Dravidian architecture, showcasing the rich cultural heritage of the region. The temple's inscriptions provide valuable information about the history of the region and the Pallava dynasty.";
    document.getElementById('timings5').innerText = "Open 24/7";
  }
}

let slideIndex6 = 1;

// Show the current slide
showSlides6(slideIndex6);

// Show the next or previous slide
function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

// Show the slide clicked in thumbnails
function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

// Function to display the slide
function showSlides6(n) {
  let i;
  let slides6 = document.getElementsByClassName("slide6");
  let thumbnails6 = document.getElementsByClassName("thumbnail6");
  let captionText6 = document.getElementById("caption6");

  // Loop through all slides and hide them
  if (n > slides6.length) { slideIndex6 = 1 }
  if (n < 1) { slideIndex6 = slides6.length }

  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";
  }

  // Loop through thumbnails and remove 'active' class
  for (i = 0; i < thumbnails6.length; i++) {
    thumbnails6[i].classList.remove("active6");
  }

  // Display the current slide and set the active thumbnail
  slides6[slideIndex6 - 1].style.display = "block";
  thumbnails6[slideIndex6 - 1].classList.add("active6");

  // Set the caption
  captionText6.innerHTML = "";
  if (slideIndex6 === 1) {
    document.getElementById('dynamic-title6').innerText = "";
    document.getElementById('dynamic-content6').innerText = "";
    document.getElementById('timings6').innerText = "Open 24/7";
  }
  else if (slideIndex6 === 2) {
    document.getElementById('dynamic-title6').innerText = "";
    document.getElementById('dynamic-content6').innerText = "";
    document.getElementById('timings6').innerText = "Open 24/7";
  }
  else if (slideIndex6 === 3) {
    document.getElementById('dynamic-title6').innerText = "";
    document.getElementById('dynamic-content6').innerText = "";
    document.getElementById('timings6').innerText = "Timings: 6:00 AM - 6:00 PM";
  }
  else if (slideIndex6 === 4) {
    document.getElementById('dynamic-title6').innerText = "";
    document.getElementById('dynamic-content6').innerText = "";
    document.getElementById('timings6').innerText = "Open 24/7";
  }
  else if (slideIndex6 === 5) {
    document.getElementById('dynamic-title6').innerText = "";
    document.getElementById('dynamic-content6').innerText = "";
    document.getElementById('timings6').innerText = "Open 24/7";
  }
}

let slideIndex7 = 1;

// Show the current slide
showSlides7(slideIndex7);

// Show the next or previous slide
function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

// Show the slide clicked in thumbnails
function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

// Function to display the slide
function showSlides7(n) {
  let i;
  let slides7 = document.getElementsByClassName("slide7");
  let thumbnails7 = document.getElementsByClassName("thumbnail7");
  let captionText7 = document.getElementById("caption7");

  // Loop through all slides and hide them
  if (n > slides7.length) { slideIndex7 = 1 }
  if (n < 1) { slideIndex7 = slides7.length }

  for (i = 0; i < slides7.length; i++) {
    slides7[i].style.display = "none";
  }

  // Loop through thumbnails and remove 'active' class
  for (i = 0; i < thumbnails7.length; i++) {
    thumbnails7[i].classList.remove("active7");
  }

  // Display the current slide and set the active thumbnail
  slides7[slideIndex7 - 1].style.display = "block";
  thumbnails7[slideIndex7 - 1].classList.add("active7");

  // Set the caption
  captionText7.innerHTML = "";
  if (slideIndex7 === 1) {
    document.getElementById('dynamic-title7').innerText = "The National Art Gallery";
    document.getElementById('dynamic-content7').innerText = "The National Art Gallery at the Government Museum Complex is one of the prominent heritage buildings in Chennai and one of the latest additions to the art galleries of the country.This massive sandstone building was built by the British in 1906 and was opened to the public after an extensive restoration in January 2021. If you are in the neighbourhood, this colonial and Indo-Saracenic style building is difficult to miss.National Gallery of Art is a must visit not only for the remarkable collection of art but for its magnificent architectural beauty as well.";
    document.getElementById('timings7').innerText = "Open 24/7";
  }
  else if (slideIndex7 === 2) {
    document.getElementById('dynamic-title7').innerText = "The Government Museum Chennai";
    document.getElementById('dynamic-content7').innerText = "The Government Museum Chennai, or Madras Museum, is among the oldest museums in the world, and the second oldest in India. It has a rich collection of artefacts detailing human history and culture.The museum is known for artefacts and bronze sculptures belonging to different South Indian dynasties. But the exhibits also include items from archaeology, geology, numismatics and other varied subjects. Government Museum Chennai even has the largest collection of Roman antiquities outside Europe.";
    document.getElementById('timings7').innerText = "Open 24/7";
  }
  else if (slideIndex7 === 3) {
    document.getElementById('dynamic-title7').innerText = "Victoria Public Hall";
    document.getElementById('dynamic-content7').innerText = "Victoria Public Hall, also known as the Town Hall, is a historic structure in Chennai constructed to honour Queen Victoria's Golden Jubilee. It stands as one of Chennai's best specimens of British architecture. It served as a theatre and a venue for public events in the late 19th and early 20th centuries. It's currently home to the South Indian Athletic Association Club.The hall, a prime example of Indo-Saracenic architecture, was constructed between 1888 and 1890 by Namperumal Chetty and was planned in the Romanesque style by Robert Fellowes Chisholm (1840–1915).";
    document.getElementById('timings7').innerText = "Timings: 6:00 AM - 6:00 PM";
  }
  else if (slideIndex7 === 4) {
    document.getElementById('dynamic-title7').innerText = "Birla Planetarium";
    document.getElementById('dynamic-content7').innerText = "BM Birla Planetarium Chennai is on the premises of Periyar Science and Technology Centre. And it’s considered the most modern planetarium in India.The planetarium was established in 1983. But it was inaugurated in 1988 by R Venkataraman, the then President of India. It is known for its virtual tours of the night sky. It also has multiple galleries with over 500 exhibits for you to explore. The collection is divided into categories like Life Science, Electronics and Communications, Energy and more.";
    document.getElementById('timings7').innerText = "Open 24/7";
  }
  else if (slideIndex7 === 5) {
    document.getElementById('dynamic-title7').innerText = "The Rail Museum";
    document.getElementById('dynamic-content7').innerText = "The Rail Museum is a journey of exploration and enlightenment. As you delve into the annals of Indian Railways, you will be inspired by the story of its growth and evolution, from its humble beginnings to its current-day glory. You will learn about the different types of trains, from the express trains that stitch cities together to the local trains that transport people, and the impact they have had on the country and its people";
    document.getElementById('timings7').innerText = "Open 24/7";
  }
}

let slideIndex8 = 1;

// Show the current slide
showSlides8(slideIndex8);

// Show the next or previous slide
function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

// Show the slide clicked in thumbnails
function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}

// Function to display the slide
function showSlides8(n) {
  let i;
  let slides8 = document.getElementsByClassName("slide8");
  let thumbnails8 = document.getElementsByClassName("thumbnail8");
  let captionText8 = document.getElementById("caption8");

  // Loop through all slides and hide them
  if (n > slides8.length) { slideIndex8 = 1 }
  if (n < 1) { slideIndex8 = slides8.length }

  for (i = 0; i < slides8.length; i++) {
    slides8[i].style.display = "none";
  }

  // Loop through thumbnails and remove 'active' class
  for (i = 0; i < thumbnails8.length; i++) {
    thumbnails8[i].classList.remove("active8");
  }

  // Display the current slide and set the active thumbnail
  slides8[slideIndex8 - 1].style.display = "block";
  thumbnails8[slideIndex8 - 1].classList.add("active8");

  // Set the caption
  captionText8.innerHTML = "";
  if (slideIndex8 === 1) {
    document.getElementById('dynamic-title8').innerText = "";
    document.getElementById('dynamic-content8').innerText = "";
    document.getElementById('timings8').innerText = "Open 24/7";
  }
  else if (slideIndex8 === 2) {
    document.getElementById('dynamic-title8').innerText = "";
    document.getElementById('dynamic-content8').innerText = "";
    document.getElementById('timings8').innerText = "Open 24/7";
  }
  else if (slideIndex8 === 3) {
    document.getElementById('dynamic-title8').innerText = "";
    document.getElementById('dynamic-content8').innerText = "";
    document.getElementById('timings8').innerText = "Timings: 6:00 AM - 6:00 PM";
  }
  else if (slideIndex8 === 4) {
    document.getElementById('dynamic-title8').innerText = "";
    document.getElementById('dynamic-content8').innerText = "";
    document.getElementById('timings8').innerText = "Open 24/7";
  }
  else if (slideIndex8 === 5) {
    document.getElementById('dynamic-title8').innerText = "";
    document.getElementById('dynamic-content8').innerText = "";
    document.getElementById('timings8').innerText = "Open 24/7";
  }
}

