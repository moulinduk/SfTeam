/*<div class="demo-wrapper">
  <div class="demo">
    <div class="swiper-container swiper-powerpop">
      <div class="swiper-powerpop-pagination demo-spacer-y"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide" data-slide-name="The Shivvers">
          <div class="demo-media demo-spacer-y">
            <iframe width="352" height="198" src="https://www.youtube.com/embed/urayfmb2_as" frameborder="0" allow=" autoplay; encrypted-media;"></iframe>
          </div>
          <div>
            Milwaukee-based power pop band from the late 70s early 80s that seemed most primed to succeed on a bigger stage, featuring the distinctive voice of lead singer Jill Kossoris. Part Blondie, part Raspberries, The Shivvers long-playing power pop masterwork – the eponymous <em>The Shivvers</em> would have to wait years to see release. 
          </div>
        </div>
        <div class="swiper-slide" data-slide-name="The Exploding Hearts">
          <div class="demo-media">
            <iframe width="352" height="198" src="https://www.youtube.com/embed/QxZBtTl7-5M" frameborder="0" allow=" autoplay; encrypted-media;"></iframe>
          </div>
          <div>
            The Exploding Hearts were an influential American power pop band formed in Portland, Oregon in 2001. They released their debut studio album, Guitar Romantic, in April 2003. Tragically, three members of the band were killed in a car accident on July 20, 2003.
          </div>
        </div>
        <div class="swiper-slide" data-slide-name="Protex">
          <div class="demo-media">
            <iframe width="352" height="198" src="https://www.youtube.com/embed/zbrCw7rBrcA" frameborder="0" allow=" autoplay; encrypted-media;"></iframe>
          </div>
          <div>           
              Protex formed in 1978 as a direct result of band members witnessing firsthand The Clash’s now infamous visit to Belfast the previous year when their gig was pulled at the eleventh hour due to insurance wrangles.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



$aqua:   rgb(20 177 171);
$red:    rgb(232 80 91);
$yellow: rgb(249 213 110);
$sand:   rgb(243 236 194);

$radius: 30px;
$paginationFontSize: 15px;
$paginationLineHeight: 1.25;
$paginatorPaddingX: 25px;
$paginatorPaddingY: 15px;
$paginationHeight: ($paginationFontSize * $paginationLineHeight) + ($paginatorPaddingY * 2);


.swiper-powerpop {
  margin-left: auto;
  margin-right: auto;
  max-width: 740px;
  text-align: center;
  
  .swiper-powerpop-pagination-indicator {
    display: none;
    @media screen and (min-width: 992px) {
      background-color: $red;
      border-radius: $radius;
      display: block;
      height: $paginationHeight;
      position: absolute;
      transition: transform 400ms cubic-bezier(0, 0.55, 0.45, 1);
      transform-origin: left;
    }
  }

  .swiper-powerpop-pagination {
    background-color: $sand;
    border-radius: $radius;
    bottom: auto;
    font-size: $paginationFontSize;
    left: auto;
    line-height: $paginationLineHeight;
    position: relative;
    width: auto;
    @media screen and (min-width: 992px) {
      background-color: transparent;
      display: inline-flex;
      height: $paginationHeight;
      margin-left: 0;
      margin-right: 0;
    }
    &::before {
      background-color: transparent;
      border-radius: $radius;
      content: '';
      left: 0;
      height: $paginationHeight;
      position: absolute;
      width: 100%;
      z-index: -1;
      @media screen and (min-width: 992px) {
        background-color: $sand;
      }
    }
    .swiper-powerpop-pagination-item {
      color: $red;
      cursor: pointer;
      font-weight: 600;
      height: auto;
      margin: 0;
      padding: $paginatorPaddingY $paginatorPaddingX;
      transition: color 200ms ease-in, text-shadow 400ms ease-in;
      width: auto;
    }
    .swiper-powerpop-pagination-item-active {
      background-color: $red;
      border-radius: $radius;
      color: $yellow;
      text-shadow: .75px .75px 1px rgb(0 0 0 / .25);
      @media screen and (min-width: 992px) {
        background-color: transparent;
      }
    }
  }
}




// Demo 
html,
body {
  height: 100%;  
  -webkit-tap-highlight-color: rgba(black, 0);
}

iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.demo-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.demo {
  align-items: center;
  background-color: white;
  background-image: radial-gradient($yellow 1.25px, transparent 1.25px), radial-gradient($yellow 1.25px, white 1.25px);
  background-size: 48px 48px;
  background-position: 0 0, 24px 24px;
  box-shadow: inset 0 0 0 15px $aqua, inset 0 0 0 20px $sand;
  flex-grow: 1;
  font-family: system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.5;
  padding: 45px;
}

.demo-spacer-y {
  margin-bottom: 45px;
}

.demo-media {
  margin-bottom: 45px;
  position: relative;
  width: 100%;
  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
}



const swiperContainer = document.querySelector('.swiper-powerpop');
let windowWidth = document.documentElement.clientWidth;
let swiperContainerWidth = swiperContainer.offsetWidth;
let swiperContainerOffsetHalf = (windowWidth - swiperContainerWidth) / 2;
let paginationIndicator;
let paginationIndicatorRadius;
let paginationWidth;

const swiperSlides = Array.from(document.querySelectorAll('.swiper-slide'));
const swiperTitles = swiperSlides.map(name => name.dataset.slideName);

var mySwiper = new Swiper('.swiper-container', {
  speed: 500,
  pagination: {
    el: '.swiper-powerpop-pagination',
    bulletClass: 'swiper-powerpop-pagination-item',
    bulletActiveClass: 'swiper-powerpop-pagination-item-active',
    clickable: true,
    
    renderBullet: function(index, className) {
      return '<div class="' + className + '">'+ swiperTitles[index] + '</div>'
    }
  },
  on: {
    init: function() {
      paginationIndicator = document.createElement('div');
      paginationIndicator.className = 'swiper-powerpop-pagination-indicator';
    },
    paginationRender: function() {
      const pagination = this.pagination.el;
      this.el.insertBefore(paginationIndicator, pagination);
      paginationIndicatorRadius = parseInt(getComputedStyle(paginationIndicator).borderTopLeftRadius);
    },
    paginationUpdate: function() {
      const activePaginator = this.pagination.el.querySelector('.swiper-powerpop-pagination-item-active');
      const activePaginatorX = activePaginator.getBoundingClientRect().x;
      const activePaginatorWidth = activePaginator.getBoundingClientRect().width;
      const paginationIndicatorPos = activePaginatorX - swiperContainerOffsetHalf;
      
      paginationWidth = this.pagination.el.getBoundingClientRect().width;
      paginationIndicator.style.width = `${paginationWidth}px`;
      
      let paginationIndicatorScale = activePaginatorWidth / paginationWidth;
      let paginationIndicatorScaleRadius = paginationIndicatorRadius / paginationIndicatorScale;
      
      paginationIndicator.style.transform = `translateX(${paginationIndicatorPos}px) scaleX(${paginationIndicatorScale})`;
      paginationIndicator.style.borderRadius = `${paginationIndicatorScaleRadius}px / ${paginationIndicatorRadius}px`;
    },
    resize: function() {
      windowWidth = document.documentElement.clientWidth;
      swiperContainerWidth = swiperContainer.offsetWidth;
      swiperContainerOffsetHalf = (windowWidth - swiperContainerWidth) / 2;
     
      this.pagination.update();
    }
  }
});*/
