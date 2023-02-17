// TOGGLE SECTION //
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

// MOBILE MENU
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

const eachSpeakers = [
  {
    image: '/images/portrait1.jpg',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Enterprnurial Legal Studies at Havard Law School',
    brief: 'Benkler studies commons-based peer production, and published his seminal book; The Wealth of Networks in 2006',
  }, {
    image: '/images/portrait4.jpg',
    name: 'SohYeong Noh',
    title: 'Director of Art Center Nabi and a board member of CC Korea',
    brief: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    image: '/images/portrait2.jpg',
    name: 'Kilnam Chon',
    title: '',
    brief: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the internet Society(ISOC) Internet Hall of Fame.',
  },
  {
    image: '/images/portrait3.jpg',
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    brief: 'European ingetration, political democracy and participation of youthh through online as her major concern, Redia`s report outlinig potential changes to EU copyright law was approved by the Parliament in july.',
  }, {
    image: '/images/portrait5.jpg',
    name: 'Ryan Merkley',
    title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation.',
    brief: 'Ryan has been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
  {
    image: '/images/portrait1.jpg',
    name: 'Lila Tretikov',
    title: 'Execuive Director of the Wikimedia Foundation',
    brief: 'Lila Tretikov is the Executive Director of the wikimedia Foundation, the nonprofit organization that operates wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month',
  },
];

const allSpeakers = document.querySelector('#all-speakers');
const allspeakersDesktop = document.querySelector('#all-speakers-desktop');
const title = document.querySelector('.featured-speaker-title');

title.innerHTML = 'Featured Teachers <hr>';

for (let i = 0; i < eachSpeakers.length - 4; i += 1) {
  const speaker = `<section class="featured-speakers">
  <img src="${eachSpeakers[i].image}" alt="Speaker's photo" class="person-photo box">
  <div class="person-content">
    <h2 class="person-name">${eachSpeakers[i].name}</h2>
    <p class="person-profession">${eachSpeakers[i].title}</p>
    <hr>
    <p class="person-background">${eachSpeakers[i].brief}</p>
  </div></section>`;
  allSpeakers.innerHTML += speaker;
}

for (let i = 0; i < eachSpeakers.length; i += 1) {
  const speaker = `<section class="featured-speakers">
  <img src="${eachSpeakers[i].image}" alt="Speaker's photo" class="person-photo box">
  <div class="person-content">
    <h2 class="person-name">${eachSpeakers[i].name}</h2>
    <p class="person-profession">${eachSpeakers[i].title}</p>
    <hr>
    <p class="person-background">${eachSpeakers[i].brief}</p>
  </div></section>`;
  allspeakersDesktop.innerHTML += speaker;
}

const loadMore = document.querySelector('.load-more');
loadMore.addEventListener('click', (e) => {
  e.target.classList.add('show-loader');
  for (let i = 2; i < eachSpeakers.length; i += 1) {
    const speaker = `<section class="featured-speakers">
  <img src="${eachSpeakers[i].image}" alt="Speaker's photo" class="person-photo box">
  <div class="person-content">
    <h2 class="person-name">${eachSpeakers[i].name}</h2>
    <p class="person-profession">${eachSpeakers[i].title}</p>
    <hr>
    <p class="person-background">${eachSpeakers[i].brief}</p>
  </div></section>`;
    allSpeakers.innerHTML += speaker;
  }
});
