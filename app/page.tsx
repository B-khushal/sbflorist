import Link from "next/link"
import Image from "next/image"

const featuredProducts = [
  { id: 1, name: "Spring Bouquet", price: 49.99, image: "./img/1.jpg"},
  { id: 2, name: "Rose Arrangement", price: 59.99, image: "/placeholder.svg" },
  { id: 3, name: "Tulip Collection", price: 39.99, image: "/placeholder.svg" },
]

const categories = [
  { id: 1, name: "Bouquets", image: "/placeholder.svg" },
  { id: 2, name: "Arrangements", image: "/placeholder.svg" },
  { id: 3, name: "Single Flowers", image: "/placeholder.svg" },
  { id: 4, name: "Plants", image: "/placeholder.svg" },
]

export default function Home() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Spring Blossoms Florist</h1>
        <p className="text-xl text-center text-gray-600 mb-8">A Reason To Express</p>
        <div className="text-center">
          <Link
            href="/products"
            className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <Link
                href={`/products/${product.id}`}
                className="mt-2 inline-block bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.id}`} className="group">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

