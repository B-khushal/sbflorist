import Image from "next/image"
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    name: "Spring Bouquet",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Bouquets",
    description: "A beautiful bouquet of spring flowers.",
  },
  {
    id: 2,
    name: "Rose Arrangement",
    price: 59.99,
    image: "/placeholder.svg",
    category: "Arrangements",
    description: "An elegant arrangement of premium roses.",
  },
  {
    id: 3,
    name: "Tulip Collection",
    price: 39.99,
    image: "/placeholder.svg",
    category: "Bouquets",
    description: "A colorful collection of fresh tulips.",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-pink-600 mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-sm text-gray-500 mb-6">Category: {product.category}</p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

