import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent {
  productos = [
    {
      name: 'Laptop Gamer',
      description: 'Laptop con procesador Intel Core i7 y tarjeta gráfica NVIDIA GTX 1650.',
      image: 'https://example.com/laptop.jpg'
    },
    {
      name: 'Tarjeta Gráfica RTX 3080',
      description: 'Tarjeta gráfica para gaming con 10GB GDDR6X.',
      image: 'https://example.com/rtx3080.jpg'
    },
    {
      name: 'Disco Duro SSD 1TB',
      description: 'Disco duro SSD de 1TB para almacenamiento rápido y confiable.',
      image: 'https://example.com/ssd1tb.jpg'
    }
  ];
}