var container = document.querySelectorAll('.col');
var sortItems = document.querySelectorAll('.sort-icon');
var activeItem = document.querySelector('.active');
var burger = document.querySelector('.burger');
var box = document.querySelector('.sort-box');
var overlay = document.querySelector('.burger-overlay');
var building = document.querySelectorAll('.building');
var food = document.querySelectorAll('.food');
var trafic = document.querySelectorAll('.trafic');
var allButton = document.querySelector('.button-all');
var buildingButton = document.querySelector('.button-building');
var foodButton = document.querySelector('.button-food');
var traficButton = document.querySelector('.button-trafic');
var openLightBox = document.querySelector('.button-lightbox');

container.forEach(function(bigger){
    bigger.addEventListener('click', function(){
        bigger.classList.add('is-fixed');
    })
});

buildingButton.addEventListener('click', function(){
    building.forEach(function(ndBuilding){
        ndBuilding.classList.remove('has-no-display');
    })
    food.forEach(function(ndFood){
        ndFood.classList.add('has-no-display');
    })
    trafic.forEach(function(ndTrafic){
        ndTrafic.classList.add('has-no-display');
    })
});

foodButton.addEventListener('click', function(){
    building.forEach(function(ndBuilding){
        ndBuilding.classList.add('has-no-display');
    })
    food.forEach(function(ndFood){
        ndFood.classList.remove('has-no-display');
    })
    trafic.forEach(function(ndTrafic){
        ndTrafic.classList.add('has-no-display');
    })
});

traficButton.addEventListener('click', function(){
    building.forEach(function(ndBuilding){
        ndBuilding.classList.add('has-no-display');
    })
    food.forEach(function(ndFood){
        ndFood.classList.add('has-no-display');
    })
    trafic.forEach(function(ndTrafic){
        ndTrafic.classList.remove('has-no-display');
    })
});

allButton.addEventListener('click', function(){
    building.forEach(function(ndBuilding){
        ndBuilding.classList.remove('has-no-display');
    })
    food.forEach(function(ndFood){
        ndFood.classList.remove('has-no-display');
    })
    trafic.forEach(function(ndTrafic){
        ndTrafic.classList.remove('has-no-display');
    })
});

window.onscroll = function () {
	if (window.pageYOffset >= 8900) {
		box.classList.add("is-hide")
	} else {
		box.classList.remove("is-hide")
	}
};

function clickItem(item){
    if (activeItem == item) return;

    if (activeItem) {
        activeItem.classList.remove('active');
    }

    item.classList.add('active');
    activeItem = item;
}

sortItems.forEach((item) => {
    item.addEventListener('click', () => clickItem(item));
})

// burger.addEventListener('click', function(){
//     burger.classList.toggle('is-crossed')
//     overlay.classList.toggle('is-open')
// });


lightbox.option({
    'disableScrolling': true,
    'resizeDuration': 50
});

(function (){
    let toggledMenu = false;
          let btn = document.querySelector('.burger');
          var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
          var tl2 = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  
          tl.from(".burger-overlay", { yPercent: -100, duration: .4, ease: Power2.easeOut});
          tl.from(".burger-overlay .overlay-links", { opacity: 0, y: -100, duration: 0.2, stagger: 0.2 });
  
          btn.addEventListener('click', function () {
  
              let overlayMenu = document.querySelector('.burger-overlay');
              let hamburger = document.querySelector('.burger');
              overlayMenu.style.display = 'flex';
  
              if (!toggledMenu) {
                  hamburger.classList.add('is-crossed');
         
  
                  tl.restart();
                  tl2.restart();
              }
              else {
                  tl.reverse();
                  hamburger.classList.remove('is-crossed');
  
              }
              toggledMenu = !toggledMenu;
          });
  })();