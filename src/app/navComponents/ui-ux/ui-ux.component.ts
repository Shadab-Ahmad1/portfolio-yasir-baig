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
