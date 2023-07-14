import { Component, OnInit,ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UIUXComponent implements OnInit {


  public loading = false;
  constructor(private router: Router , private service:CommonServiceService,  private route: ActivatedRoute,
     private elementRef: ElementRef) { }

  public categories = [
    // {
    //   name: 'Web Images',
    //   images: [
    //     {
    //       id: 26,
    //       path: 'portfolio/website-all-images/Appetiser-app/main.jpg',
    //       thumbnailImage:'portfolio/website-all-images/Appetiser-app/thumbnail-image-2.jpg',
    //       detailImages: [
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-1.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-2.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-3.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-4.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-5.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-6.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-7.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-8.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-9.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-10.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-11.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-12.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-13.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-14.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-15.png' },
    //         { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-16.png' },
    //       ],
    //     },
    //     {
    //       id: 27,
    //       path: 'portfolio/website-all-images/space/main.png',
    //       detailImages: [
    //         { detailPathImages: 'portfolio/website-all-images/space/image-1.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-2.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-3.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-4.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-5.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-6.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-7.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-8.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-9.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-10.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-11.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-12.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-13.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-14.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-15.png' },
    //         { detailPathImages: 'portfolio/website-all-images/space/image-16.png' },
    //       ],
    //     },
    //     {
    //       id: 28,
    //       path: 'portfolio/website-all-images/sotatek/main.png',
    //       detailImages: [
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-16.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-2.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-3.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-4.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-5.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-6.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-7.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-8.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-9.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-10.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-11.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-12.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-13.png' },
    //         { detailPathImages: 'portfolio/website-all-images/sotatek/image-14.png' },
    //       ],
    //     },
    //     {
    //       id: 29,
    //       path: 'portfolio/website-all-images/pixelplex/main.png',
    //       detailImages: [
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-1.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-2.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-3.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-4.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-5.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-6.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-7.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-8.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-9.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-10.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-11.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-12.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-13.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-14.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-15.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pixelplex/image-16.png' },
    //       ],
    //     },
    //     {
    //       id: 30,
    //       path: 'portfolio/website-all-images/goji-lab/main.png',
    //       detailImages: [
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-1.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-2.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-3.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-4.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-5.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-6.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-7.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-8.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-9.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-10.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-11.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-12.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-13.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-14.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-15.png' },
    //         { detailPathImages: 'portfolio/website-all-images/goji-lab/image-16.png' },
    //       ],
    //     },
    //     {
    //       id: 31,
    //       path: 'portfolio/website-all-images/momentum/main.png',
    //       detailImages: [
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-1.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-2.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-3.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-4.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-5.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-6.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-7.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-8.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-9.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-10.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-11.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-12.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-13.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-14.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-15.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-16.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-17.png' },
    //         { detailPathImages: 'portfolio/website-all-images/momentum/image-18.png' },
    //       ],
    //     },
    //     {
    //       id: 32,
    //       path: 'portfolio/website-all-images/absolute-web/main.png',
    //       detailImages: [
    //         { detailPathImages: 'portfolio/website-all-images/absolute-web/image-1.png' },
    //         { detailPathImages: 'portfolio/website-all-images/absolute-web/image-2.png' },
    //         { detailPathImages: 'portfolio/website-all-images/absolute-web/image-3.png' },
    //         { detailPathImages: 'portfolio/website-all-images/absolute-web/image-4.png' },
    //         { detailPathImages: 'portfolio/website-all-images/absolute-web/image-5.png' },
    //         { detailPathImages: 'portfolio/website-all-images/absolute-web/image-6.png' },
    //         { detailPathImages: 'portfolio/website-all-images/absolute-web/image-7.png' },
    //         { detailPathImages: 'portfolio/website-all-images/absolute-web/image-8.png' },
    //         { detailPathImages: 'portfolio/website-all-images/absolute-web/image-9.png' },
    //         { detailPathImages: 'portfolio/website-all-images/absolute-web/image-10.png' },
    //       ],
    //     },
    //     {
    //       id: 32,
    //       path: 'portfolio/website-all-images/pinacle-solutions/main.png',
    //       detailImages: [
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-1.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-2.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-3.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-4.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-5.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-6.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-7.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-8.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-9.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-10.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-11.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-12.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-13.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-14.png' },
    //         { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-15.png' },
    //       ],
    //     }

    //   ],
    //   categoryHeading: 'Web Images',
    // },
    {
      name: 'Mockups',
      images: [
        { id: 33,thumbnailImage:'portfolio/mockups/atlantbn-thumbnail.jpg', path: 'portfolio/mockups/atlanthbh-min.jpg' },
        { id: 34,thumbnailImage:'portfolio/mockups/Channel-v-thumbnail.jpg', path: 'portfolio/mockups/Channel-V-media-min.jpg' },
        { id: 35,thumbnailImage:'portfolio/mockups/Harbinger-thumbnail.jpg', path: 'portfolio/mockups/harbingerideas-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/profinit-thumbnail.jpg', path: 'portfolio/mockups/Profinit-min.jpg' },
        { id: 37,thumbnailImage:'portfolio/mockups/wear csg-thumbnail.jpg', path: 'portfolio/mockups/wear csg-min.jpg' },
        { id: 38,thumbnailImage:'portfolio/mockups/BrainHub-Thumbnail.jpg', path: 'portfolio/mockups/brainhub.jpg' },
        { id: 39,thumbnailImage:'portfolio/mockups/grupa-Thumbnail.jpg', path: 'portfolio/mockups/Grupa-kmk.jpg' },
        { id: 40,thumbnailImage:'portfolio/mockups/investnext-thumbnail.jpg', path: 'portfolio/mockups/investnext-casestudy.jpg' },
        { id: 41,thumbnailImage:'portfolio/mockups/kitameraki-thumbnail.jpg', path: 'portfolio/mockups/kitameraki.jpg' },
        { id: 42,thumbnailImage:'portfolio/mockups/lonely-planet-thumbnail.jpg', path: 'portfolio/mockups/Lonelyplanet.jpg' },
      ],
      categoryHeading: 'Mockups',
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

}
