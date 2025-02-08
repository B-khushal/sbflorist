export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Rose Bouquet",
    description: "A beautiful bouquet of fresh roses",
    price: 29.99,
    image: "/app/images/img2.jpeg",
  },
  {
    id: 2,
    name: "Tulip Arrangement",
    description: "Colorful tulips arranged in a vase",
    price: 34.99,
    image: "/app/images/img3.jpeg",
  },
  {
    id: 3,
    name: "Sunflower Bunch",
    description: "Bright and cheerful sunflowers",
    price: 24.99,
    image: "/app/images/img4.jpeg",
  },
  {
    id: 4,
    name: "Orchid Plant",
    description: "Elegant orchid plant in a decorative pot",
    price: 39.99,
    image: "/app/images/img5.jpeg",
  },
]

