import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

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
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      //@ts-ignore
      this.id = paramMap.get('id');
      console.log(this.id)
      let product;
      console.log(this.getProduct(this.id))
      product = this.getProduct(this.id)
      // === undefined ? {
      //   id: '1',
      //   name: '',
      //   price: '1',
      //   description: ''
      // }:
        this.getProduct(this.id);
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
    // this.productForm = new FormGroup({
    //
    // });
  }

  getProduct(id: any) {
    return this.productService.findById(id);
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id);
    this.router.navigate(['/product/list']);
  }
}
