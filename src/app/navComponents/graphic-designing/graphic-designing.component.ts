import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-graphic-designing',
  templateUrl: './graphic-designing.component.html',
  styleUrls: ['./graphic-designing.component.scss']
})
export class GraphicDesigningComponent implements OnInit {

  public loading = false;
  showPreviousButton = false;
  showNextButton = true;
  constructor(private router: Router , private service:CommonServiceService , private route: ActivatedRoute, private elementRef: ElementRef) { }

  public categories = [
    {
      name: 'Branding designs',
      images: [
        {
          id: 1,
          path: 'portfolio/branding-designs/astro-tech/astro-branding-main.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/astro-tech/astro-logo-mockup.jpg' },
            { detailPathImages: 'portfolio/branding-designs/astro-tech/astro-logo-mockup-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/astro-tech/astro-t-shirt.jpg' },
            { detailPathImages: 'portfolio/branding-designs/astro-tech/astro-id-card-mockup.jpg' },
            { detailPathImages: 'portfolio/branding-designs/astro-tech/astro-id-card-mockup-2.jpg' },
          ],
        },
        {
          id: 2,
          path: 'portfolio/branding-designs/bake-house/Stationery_Mockup.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/bake-house/bake-house-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bake-house/bake-house-logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bake-house/bake-house-visiting-cards.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bake-house/bake-house-product.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bake-house/bake-house-product-2.jpg' },
          ],
        },
        {
          id: 3,
          path: 'portfolio/branding-designs/bakers-deport/bakers-deport-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/bakers-deport/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bakers-deport/logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bakers-deport/bakers-deport-visiting-card.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bakers-deport/bakers-deport-product.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bakers-deport/bakers-deport-product-2.jpg' },
          ],
        },
        {
          id: 4,
          path: 'portfolio/branding-designs/bird-house/bird-house-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/bird-house/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bird-house/logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bird-house/bird-house-cap.jpg' },
            { detailPathImages: 'portfolio/branding-designs/bird-house/bird-house-card-holder.jpg' },
          ],
        },
        {
          id: 5,
          path: 'portfolio/branding-designs/dabajs-bakers/dabajs-bakers-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/dabajs-bakers/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/dabajs-bakers/logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/dabajs-bakers/dabajs-bakers-visiting-card.jpg' },
            { detailPathImages: 'portfolio/branding-designs/dabajs-bakers/dabajs-bakers-id-card.jpg' },
            { detailPathImages: 'portfolio/branding-designs/dabajs-bakers/dabajs-bakers-umbrella.jpg' },
          ],
        },
        {
          id: 6,
          path: 'portfolio/branding-designs/cookies-madness/cookies-madness-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/cookies-madness/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/cookies-madness/logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/cookies-madness/cookies-madness-watch.jpg' },
            { detailPathImages: 'portfolio/branding-designs/cookies-madness/cookies-madness-shirts.jpg' },
            { detailPathImages: 'portfolio/branding-designs/cookies-madness/cookies-madness-cans.jpg' },
          ],
        },
        {
          id: 7,
          path: 'portfolio/branding-designs/delish-diner/delish-diner-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/delish-diner/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/delish-diner/logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/delish-diner/delish-dinner-cup.jpg' },
            { detailPathImages: 'portfolio/branding-designs/delish-diner/delish-dinner-shopping-bag.jpg' },
            { detailPathImages: 'portfolio/branding-designs/delish-diner/delish-dinner-shopping-bag-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/delish-diner/delish-dinner-chair.jpg' },
          ],
        },
        {
          id: 8,
          path: 'portfolio/branding-designs/powergrid/powergrid-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/powergrid/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/powergrid/logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/powergrid/powergrid-bands.jpg' },
            { detailPathImages: 'portfolio/branding-designs/powergrid/power-grid-bottle-caps.jpg' },
          ],
        },
        {
          id: 9,
          path: 'portfolio/branding-designs/sweet-bakery/sweet-bakery-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/sweet-bakery/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/sweet-bakery/logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/sweet-bakery/sweet-bakery-visiting-card.jpg' },
            { detailPathImages: 'portfolio/branding-designs/sweet-bakery/sweet-bakery-shopping-bag.jpg' },
            { detailPathImages: 'portfolio/branding-designs/sweet-bakery/sweet-bakery-letter-head.jpg' },
          ],
        },
        {
          id: 10,
          path: 'portfolio/branding-designs/taste-bister/taste-bister-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/taste-bister/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/taste-bister/logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/taste-bister/taste-bister-letter-head.jpg' },
            { detailPathImages: 'portfolio/branding-designs/taste-bister/taste-bister-shirts.jpg' },
            { detailPathImages: 'portfolio/branding-designs/taste-bister/taste-bister-tshirt.jpg' },
          ],
        },
        {
          id: 11,
          path: 'portfolio/branding-designs/kickstart-cafe/kickstart-cafe-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/kickstart-cafe/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/kickstart-cafe/logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/kickstart-cafe/kickstart-cafe-visiting-cards.jpg' },
            { detailPathImages: 'portfolio/branding-designs/kickstart-cafe/kickstart-cafe-box.jpg' },
          ],
        },
        {
          id: 12,
          path: 'portfolio/branding-designs/nighnty-club/nighnty-club-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/nighnty-club/logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/nighnty-club/nighnty-club-letter-head.jpg' },
            { detailPathImages: 'portfolio/branding-designs/nighnty-club/nighnty-club-bag.jpg' },
          ],
        },
        {
          id: 13,
          path: 'portfolio/branding-designs/savor-street/savor-street-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/savor-street/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/savor-street/logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/savor-street/savor-street-keychain.jpg' },
            { detailPathImages: 'portfolio/branding-designs/savor-street/savor-street-keychain-2.jpg' },
          ],
        },
        {
          id: 14,
          path: 'portfolio/branding-designs/infinity-design/infinity-design-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/infinity-design/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/infinity-design/logo-2.jpg' },
          ],
        },
        {
          id: 15,
          path: 'portfolio/branding-designs/mteller-aech/mteller-aech-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/mteller-aech/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/mteller-aech/logo-2.jpg' },
          ],
        },
        {
          id: 16,
          path: 'portfolio/branding-designs/pen-palette/pen-palette-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/pen-palette/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/pen-palette/logo-2.jpg' },
          ],
        },
        {
          id: 17,
          path: 'portfolio/branding-designs/stract-shape/stract-shape-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/stract-shape/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/stract-shape/logo-2.jpg' },
          ],
        },
        {
          id: 18,
          path: 'portfolio/branding-designs/swift-serve/swift-serve-stationary.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/swift-serve/logo-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/swift-serve/logo-2.jpg' },
          ],
        },
      ],
      categoryHeading: 'Branding designs',
    },
    {
      name: 'Billboards',
      images: [
        { id: 1, path: 'portfolio/billboards/billboard-1.jpg' },
        { id: 2, path: 'portfolio/billboards/billboard-2.jpg' },
        { id: 3, path: 'portfolio/billboards/billboard-3.jpg' },
        { id: 4, path: 'portfolio/billboards/billboard-4.jpg' },
        { id: 5, path: 'portfolio/billboards/billboard-5.jpg' },
        { id: 6, path: 'portfolio/billboards/billboard-6.jpg' },
        { id: 7, path: 'portfolio/billboards/billboard-7.jpg' },
        { id: 8, path: 'portfolio/billboards/billboard-8.jpg' },
        { id: 9, path: 'portfolio/billboards/billboard-9.jpg' },
        { id: 10, path: 'portfolio/billboards/billboard-10.jpg' },
      ],
      categoryHeading: 'Billboards',
    },
    {
      name: 'Logos',
      images: [
        { id: 1, path: 'portfolio/logos/logo-1-min.jpg' },
        { id: 2, path: 'portfolio/logos/logo-2-min.jpg' },
        { id: 3, path: 'portfolio/logos/logo-3-min.jpg' },
        { id: 4, path: 'portfolio/logos/logo-4-min.jpg' },
        { id: 5, path: 'portfolio/logos/logo-5-min.jpg' },
        { id: 6, path: 'portfolio/logos/logo-6-min.jpg' },
        { id: 7, path: 'portfolio/logos/logo-7-min.jpg' },
        { id: 8, path: 'portfolio/logos/logo-8-min.jpg' },
        { id: 9, path: 'portfolio/logos/logo-9-min.jpg' },
        { id: 10, path: 'portfolio/logos/logo-10-min.jpg' },
        { id: 11, path: 'portfolio/logos/logo-11-min.jpg' },
        { id: 12, path: 'portfolio/logos/logo-12-min.jpg' },
        { id: 13, path: 'portfolio/logos/logo-13-min.jpg' },
        { id: 14, path: 'portfolio/logos/logo-14-min.jpg' },
        { id: 15, path: 'portfolio/logos/logo-15-min.jpg' },
        { id: 16, path: 'portfolio/logos/logo-16-min.jpg' },
        { id: 17, path: 'portfolio/logos/logo-17-min.jpg' },
        { id: 18, path: 'portfolio/logos/logo-18-min.jpg' },
        { id: 19, path: 'portfolio/logos/logo-19-min.jpg' },
      ],
      categoryHeading: 'Logos',
    },
    {
      name: 'Youtube Thumbnails',
      images: [
        { id: 1, path: 'portfolio/thumbnails/thumbnail-1.jpg' },
        { id: 2, path: 'portfolio/thumbnails/thumbnail-2.jpg' },
        { id: 3, path: 'portfolio/thumbnails/thumbnail-3.jpg' },
        { id: 4, path: 'portfolio/thumbnails/thumbnail-4.jpg' },
        { id: 5, path: 'portfolio/thumbnails/thumbnail-5.jpg' },
        { id: 6, path: 'portfolio/thumbnails/thumbnail-6.jpg' },
        { id: 7, path: 'portfolio/thumbnails/thumbnail-7.jpg' },
        { id: 8, path: 'portfolio/thumbnails/thumbnail-8.jpg' },
        { id: 9, path: 'portfolio/thumbnails/thumbnail-9.jpg' },
        { id: 10, path: 'portfolio/thumbnails/thumbnail-10.jpg' },
        { id: 11, path: 'portfolio/thumbnails/thumbnail-11.jpg' },
        { id: 12, path: 'portfolio/thumbnails/thumbnail-12.jpg' },
        { id: 13, path: 'portfolio/thumbnails/thumbnail-13.jpg' },
        { id: 14, path: 'portfolio/thumbnails/thumbnail-14.jpg' },
        { id: 15, path: 'portfolio/thumbnails/thumbnail-15.jpg' },
        { id: 16, path: 'portfolio/thumbnails/thumbnail-16.jpg' },
        { id: 17, path: 'portfolio/thumbnails/thumbnail-17.jpg' },
        { id: 18, path: 'portfolio/thumbnails/thumbnail-18.jpg' },
        { id: 19, path: 'portfolio/thumbnails/thumbnail-19.jpg' },
        { id: 20, path: 'portfolio/thumbnails/thumbnail-20.jpg' },
      ],
      categoryHeading: 'Youtube Thumbnails',
    },
    {
      name: 'Movie Posters',
      images: [
        { id: 1, path: 'portfolio/movie-posters/movie-poster-1-min.jpg' },
        { id: 2, path: 'portfolio/movie-posters/movie-poster-2-min.jpg' },
        { id: 3, path: 'portfolio/movie-posters/movie-poster-3-min.jpg' },
        { id: 4, path: 'portfolio/movie-posters/movie-poster-4-min.jpg' },
        { id: 5, path: 'portfolio/movie-posters/movie-poster-5-min.jpg' },
        { id: 6, path: 'portfolio/movie-posters/movie-poster-6-min.jpg' },
        { id: 7, path: 'portfolio/movie-posters/movie-poster-8-min.jpg' },
        { id: 8, path: 'portfolio/movie-posters/movie-poster-9-min.jpg' },
        { id: 9, path: 'portfolio/movie-posters/movie-poster-10-min.jpg' },
        { id: 10, path: 'portfolio/movie-posters/movie-poster-11-min.jpg' },
        { id: 11, path: 'portfolio/movie-posters/movie-poster-12-min.jpg' },
        { id: 12, path: 'portfolio/movie-posters/movie-poster-13-min.jpg' },
        { id: 13, path: 'portfolio/movie-posters/movie-poster-14-min.jpg' },
        { id: 14, path: 'portfolio/movie-posters/movie-poster-15-min.jpg' },
        { id: 15, path: 'portfolio/movie-posters/movie-poster-16-min.jpg' },
        { id: 16, path: 'portfolio/movie-posters/movie-poster-17-min.jpg' },
        { id: 17, path: 'portfolio/movie-posters/movie-poster-18-min.jpg' },
        { id: 18, path: 'portfolio/movie-posters/movie-poster-19-min.jpg' },
        { id: 19, path: 'portfolio/movie-posters/movie-poster-20-min.jpg' },
      ],
      categoryHeading: 'Movie Posters',
    },
    {
      name: 'Book Covers',
      images: [
        { id: 1, path: 'portfolio/book-covers/book-cover-1-min.jpg' },
        { id: 2, path: 'portfolio/book-covers/book-cover-2-min.jpg' },
        { id: 3, path: 'portfolio/book-covers/book-cover-3-min.jpg' },
        { id: 4, path: 'portfolio/book-covers/book-cover-4-min.jpg' },
        { id: 5, path: 'portfolio/book-covers/book-cover-5-min.jpg' },
        { id: 6, path: 'portfolio/book-covers/book-cover-6-min.jpg' },
        { id: 7, path: 'portfolio/book-covers/book-cover-7-min.jpg' },
        { id: 8, path: 'portfolio/book-covers/book-cover-8-min.jpg' },
        { id: 9, path: 'portfolio/book-covers/book-cover-9-min.jpg' },
        { id: 10, path: 'portfolio/book-covers/book-cover-10-min.jpg' },
        { id: 11, path: 'portfolio/book-covers/book-cover-11-min.jpg' },
        { id: 12, path: 'portfolio/book-covers/book-cover-12-min.jpg' },
        { id: 13, path: 'portfolio/book-covers/book-cover-13-min.jpg' },
        { id: 14, path: 'portfolio/book-covers/book-cover-14-min.jpg' },
        { id: 15, path: 'portfolio/book-covers/book-cover-15-min.jpg' },
        { id: 16, path: 'portfolio/book-covers/book-cover-16-min.jpg' },
        { id: 17, path: 'portfolio/book-covers/book-cover-17-min.jpg' },
        { id: 18, path: 'portfolio/book-covers/book-cover-18-min.jpg' },
        { id: 19, path: 'portfolio/book-covers/book-cover-19-min.jpg' },
        { id: 20, path: 'portfolio/book-covers/book-cover-20-min.jpg' },
      ],
      categoryHeading: 'Book Covers',
    },
    {
      name: 'Flyer Designs',
      images: [
        { id: 1, path: 'portfolio/Flyer-design/adopt-pet-flyer-min.jpg' },
        { id: 2, path: 'portfolio/Flyer-design/arat-exebition-flyer-min.jpg' },
        { id: 3, path: 'portfolio/Flyer-design/Book-Club-flyer-min.jpg' },
        { id: 4, path: 'portfolio/Flyer-design/car-wash-flyer-min.jpg' },
        { id: 5, path: 'portfolio/Flyer-design/charity-flyer-design-min.jpg' },
        { id: 6, path: 'portfolio/Flyer-design/dance-factival-flyer-min.jpg' },
        { id: 7, path: 'portfolio/Flyer-design/food-menu-flyer-2-min.jpg' },
        { id: 8, path: 'portfolio/Flyer-design/hircut-flyer-min.jpg' },
        { id: 9, path: 'portfolio/Flyer-design/home-cleaning-flyer-min.jpg' },
        { id: 10, path: 'portfolio/Flyer-design/job-fair-flyer-min.jpg' },
        { id: 11, path: 'portfolio/Flyer-design/jym-fitness-challange-min.jpg' },
        { id: 12, path: 'portfolio/Flyer-design/Jym-flyer-1-min.jpg' },
        { id: 13, path: 'portfolio/Flyer-design/midnight-event-flyer-min.jpg' },
        { id: 14, path: 'portfolio/Flyer-design/music-concert-fliyer-min.jpg' },
        { id: 15, path: 'portfolio/Flyer-design/property-flyer-min.jpg' },
        { id: 16, path: 'portfolio/Flyer-design/study-flyer-3-min.jpg' },
        { id: 17, path: 'portfolio/Flyer-design/study-language-flyer-min.jpg' },
        { id: 18, path: 'portfolio/Flyer-design/summer-travling-flyer-min.jpg' },
        { id: 19, path: 'portfolio/Flyer-design/yoga-flyer-min.jpg' },
      ],
      categoryHeading: 'Flyer Designs',
    },
    {
      name: 'Amazon Product Thumbnails',
      images: [
        { id: 1, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-1.jpg' },
        { id: 2, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-2.jpg' },
        { id: 3, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-3.jpg' },
        { id: 4, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-4.jpg' },
        { id: 5, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-5.jpg' },
        { id: 6, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-6.jpg' },
        { id: 7, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-7.jpg' },
        { id: 8, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-8.jpg' },
        { id: 9, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-9.jpg' },
        { id: 10, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-10.jpg' },
        { id: 11, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-11.jpg' },
        { id: 12, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-12.jpg' },
        { id: 13, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-13.jpg' },
        { id: 14, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-14.jpg' },
        { id: 15, path: 'portfolio/amazon-product-thumbnails/amazon-product-thumbnail-15.jpg' },
      ],
      categoryHeading: 'Amazon Product Thumbnails',
    }
  ];

  currentCategory: any = this.categories[0];
  name: string = `${this.categories[0].name}`;
  select(selectVal: string) {
    for (let i = 0; i < this.categories.length; i++) {
      let token = this.categories[i].name.includes(selectVal)
      if (token === true) {
        this.showCategory(this.categories[i])
      }
    }
  }
  ngOnInit(): void {
    const savedCategory = this.categories.find(category => category.categoryHeading === this.service.currentCategoryHeading);
    if(savedCategory){
      this.showCategory(savedCategory);
    }
  }
  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      const selectedItemId = params['selectedItemId']; 
      if (selectedItemId) {
        const element = this.elementRef.nativeElement.querySelector('#portfolioItem-' + selectedItemId);
         const url = `/#/UI/UX`;
         history.pushState(null, '', url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          element.classList.add('active');
          setTimeout(() => {
            element.classList.remove('active');
          }, 2000);
        }
      }
    });
  }

  showCategory(category: any) {
    this.loading = true;
    this.currentCategory = category;
    this.service.currentCategoryHeading = category.categoryHeading
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  gotoDetails(image: any, i:any) {
    const id = image.id;
    const detailImages = image.detailImages;
    const bgImage = image.path;
    const selected = {
      ...image,
      category: this.currentCategory.images,
      selectedCategory:this.currentCategory,
      index: i 
    };
    this.router.navigate(['portfolioDetails', id], {
      state: {
        images: detailImages,
        bgImage,
        selected
      },
    });
  }
  
  public  goback(): void {
    this.router.navigate(['portfolio']);
  }
  showNextItems() {
    const element: any = document.getElementById('portfolio-nav-container');
    element.scrollLeft += 500;    
    if(this.categories.length - 1){
    this.showPreviousButton = true; 
      this.showNextButton = false;
    }
  }
  
  showPreviousItems(){
    const element:any = document.getElementById('portfolio-nav-container');
    element.scrollLeft -= 500;
    this.showPreviousButton = false; 
    this.showNextButton = true;
  }
}
