import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm :FormGroup = new FormGroup({
    id: new FormControl(),
    //@ts-ignore
    name: new FormControl(),
    //@ts-ignore
    price: new FormControl(),
    //@ts-ignore
    description: new FormControl(),
    //@ts-ignore
  });

  id: 0;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router:Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      //@ts-ignore
      this.id = paramMap.get('id');
      let product ;
      product = this.getProduct(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        //@ts-ignore
        name: new FormControl(product.name),
        //@ts-ignore
        price: new FormControl(product.price),
        //@ts-ignore
        description: new FormControl(product.description),
        //@ts-ignore
      });
    });
  }

  ngOnInit() {
  }

  getProduct(id: any) {
    return this.productService.findById(id);
  }

  updateProduct(id?: any) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    console.log(this.productForm)
    // @ts-ignore
    alert('Cập nhật thành công');
    this.router.navigate(['/product/list']);
  }
}
