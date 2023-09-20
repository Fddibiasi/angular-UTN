import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  productos!: Observable<any[]>;
  loading: boolean = true;

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.productos = this.productosService.getAll();

    this.productos.subscribe(
      () => {
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }
}
