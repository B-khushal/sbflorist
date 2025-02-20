import Link from "next/link"
import Image from "next/image"

const products = [
  { id: 1, name: "Spring Bouquet", price: 49.99, image: "/placeholder.svg", category: "Bouquets" },
  { id: 2, name: "Rose Arrangement", price: 59.99, image: "/placeholder.svg", category: "Arrangements" },
  { id: 3, name: "Tulip Collection", price: 39.99, image: "/placeholder.svg", category: "Bouquets" },
  { id: 4, name: "Orchid Plant", price: 29.99, image: "/placeholder.svg", category: "Plants" },
  { id: 5, name: "Sunflower Bunch", price: 19.99, image: "/placeholder.svg", category: "Single Flowers" },
  { id: 6, name: "Lily Bouquet", price: 44.99, image: "/placeholder.svg", category: "Bouquets" },
]

const categories = ["All", "Bouquets", "Arrangements", "Single Flowers", "Plants"]

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/products?category=${category}`} className="text-gray-600 hover:text-pink-600">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

