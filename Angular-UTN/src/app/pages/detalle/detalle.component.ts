import { Component, OnInit } from "@angular/core";
import { ProductosService } from "src/app/productos.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detalle",
  templateUrl: "./detalle.component.html",
  styleUrls: ["./detalle.component.css"],
})
export class DetalleComponent implements OnInit {
  title: any;
  price: any;
  description: any;
  loading = true;

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const paramMap = this.route.snapshot.paramMap;
    const idParam = paramMap.get("id");

    if (idParam) {
      const productId = +idParam;

      this.productosService.getProductById(productId).subscribe(
        (product) => {
          if (product) {
            this.title = product.title;
            this.price = product.price;
            this.description = product.description;
          } else {
            console.error(
              "No se encontró un producto con el ID proporcionado."
            );
          }
          this.loading = false;
        },
        (error) => {
          console.error("Error al cargar el producto:", error);
          this.loading = false;
        }
      );
    } else {
      console.error("ID de producto no proporcionado en la ruta.");
      this.loading = false;
    }
  }
}
