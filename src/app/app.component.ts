import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductCardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
  products = [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "price": 9.99,
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "brand": "Essence",
      "availabilityStatus": "In Stock",
      "stock": 99,
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "price": 19.99,
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "brand": "Glamour Beauty",
      "availabilityStatus": "In Stock",
      "stock": 34,
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "price": 14.99,
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "brand": "Velvet Touch",
      "availabilityStatus": "In Stock",
      "stock": 89,
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 4,
      "title": "Red Lipstick",
      "price": 12.99,
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "brand": "Chic Cosmetics",
      "availabilityStatus": "In Stock",
      "stock": 91,
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 5,
      "title": "Red Nail Polish",
      "price": 8.99,
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "category": "beauty",
      "brand": "Nail Couture",
      "availabilityStatus": "In Stock",
      "stock": 79,
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 6,
      "title": "Calvin Klein CK One",
      "price": 49.99,
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      "category": "fragrances",
      "brand": "Calvin Klein",
      "availabilityStatus": "In Stock",
      "stock": 29,
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
      ],
      "showmore": false
    },
    {
      "id": 7,
      "title": "Chanel Coco Noir Eau De",
      "price": 129.99,
      "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      "category": "fragrances",
      "brand": "Chanel",
      "availabilityStatus": "In Stock",
      "stock": 58,
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
      ],
      "showmore": false
    },
    {
      "id": 8,
      "title": "Dior J'adore",
      "price": 89.99,
      "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      "category": "fragrances",
      "brand": "Dior",
      "availabilityStatus": "In Stock",
      "stock": 98,
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"
      ],
      "showmore": false
    },
    {
      "id": 9,
      "title": "Dolce Shine Eau de",
      "price": 69.99,
      "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      "category": "fragrances",
      "brand": "Dolce & Gabbana",
      "availabilityStatus": "Low Stock",
      "stock": 4,
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
      ],
      "showmore": false
    },
    {
      "id": 10,
      "title": "Gucci Bloom Eau de",
      "price": 79.99,
      "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      "category": "fragrances",
      "brand": "Gucci",
      "availabilityStatus": "In Stock",
      "stock": 91,
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
      ],
      "showmore": false
    },
    {
      "id": 11,
      "title": "Annibale Colombo Bed",
      "price": 1899.99,
      "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      "category": "furniture",
      "brand": "Annibale Colombo",
      "availabilityStatus": "In Stock",
      "stock": 88,
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"
      ],
      "showmore": false
    },
    {
      "id": 12,
      "title": "Annibale Colombo Sofa",
      "price": 2499.99,
      "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      "category": "furniture",
      "brand": "Annibale Colombo",
      "availabilityStatus": "In Stock",
      "stock": 60,
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"
      ],
      "showmore": false
    },
    {
      "id": 13,
      "title": "Bedside Table African Cherry",
      "price": 299.99,
      "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      "category": "furniture",
      "brand": "Furniture Co.",
      "availabilityStatus": "In Stock",
      "stock": 64,
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp"
      ],
      "showmore": false
    },
    {
      "id": 14,
      "title": "Knoll Saarinen Executive Conference Chair",
      "price": 499.99,
      "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      "category": "furniture",
      "brand": "Knoll",
      "availabilityStatus": "In Stock",
      "stock": 26,
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp"
      ],
      "showmore": false
    },
    {
      "id": 15,
      "title": "Wooden Bathroom Sink With Mirror",
      "price": 799.99,
      "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      "category": "furniture",
      "brand": "Bath Trends",
      "availabilityStatus": "Low Stock",
      "stock": 7,
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"
      ],
      "showmore": false
    },
    {
      "id": 16,
      "title": "Apple",
      "price": 1.99,
      "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      "category": "groceries",
      "brand": "Apple",
      "availabilityStatus": "In Stock",
      "stock": 8,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 17,
      "title": "Beef Steak",
      "price": 12.99,
      "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      "category": "groceries",
      "brand": "Beef",
      "availabilityStatus": "In Stock",
      "stock": 86,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 18,
      "title": "Cat Food",
      "price": 8.99,
      "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      "category": "groceries",
      "brand": "Cat Food",
      "availabilityStatus": "In Stock",
      "stock": 46,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 19,
      "title": "Chicken Meat",
      "price": 9.99,
      "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
      "category": "groceries",
      "brand": "Chicken",
      "availabilityStatus": "In Stock",
      "stock": 97,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
        "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"
      ],
      "showmore": false
    },
    {
      "id": 20,
      "title": "Cooking Oil",
      "price": 4.99,
      "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      "category": "groceries",
      "brand": "Cooking Oil",
      "availabilityStatus": "In Stock",
      "stock": 10,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 21,
      "title": "Cucumber",
      "price": 1.49,
      "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      "category": "groceries",
      "brand": "Cucumber",
      "availabilityStatus": "In Stock",
      "stock": 84,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 22,
      "title": "Dog Food",
      "price": 10.99,
      "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      "category": "groceries",
      "brand": "Dog Food",
      "availabilityStatus": "In Stock",
      "stock": 71,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 23,
      "title": "Eggs",
      "price": 2.99,
      "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
      "category": "groceries",
      "brand": "Eggs",
      "availabilityStatus": "In Stock",
      "stock": 9,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 24,
      "title": "Fish Steak",
      "price": 14.99,
      "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      "category": "groceries",
      "brand": "Fish Steak",
      "availabilityStatus": "In Stock",
      "stock": 74,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 25,
      "title": "Green Bell Pepper",
      "price": 1.29,
      "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      "category": "groceries",
      "brand": "Green Bell Pepper",
      "availabilityStatus": "In Stock",
      "stock": 33,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 26,
      "title": "Green Chili Pepper",
      "price": 0.99,
      "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      "category": "groceries",
      "brand": "Green Chili Pepper",
      "availabilityStatus": "Low Stock",
      "stock": 3,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 27,
      "title": "Honey Jar",
      "price": 6.99,
      "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      "category": "groceries",
      "brand": "Honey",
      "availabilityStatus": "In Stock",
      "stock": 34,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 28,
      "title": "Ice Cream",
      "price": 5.49,
      "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      "category": "groceries",
      "brand": "Ice Cream",
      "availabilityStatus": "In Stock",
      "stock": 27,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"
      ],
      "showmore": false
    },
    {
      "id": 29,
      "title": "Juice",
      "price": 3.99,
      "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      "category": "groceries",
      "brand": "Juice",
      "availabilityStatus": "In Stock",
      "stock": 50,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"
      ],
      "showmore": false
    },
    {
      "id": 30,
      "title": "Kiwi",
      "price": 2.49,
      "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
      "category": "groceries",
      "brand": "Kiwi",
      "availabilityStatus": "In Stock",
      "stock": 99,
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"
      ],
      "showmore": false
    }
  ]

}
