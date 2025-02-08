import Link from "next/link"

export default function CartPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">Your Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <p className="text-lg mb-4">
          At Spring Blossoms Florist, we've simplified our purchasing process to provide you with a more personal
          experience.
        </p>
        <p className="text-lg mb-4">
          Instead of a traditional cart system, you can purchase our beautiful floral arrangements directly through
          WhatsApp.
        </p>
        <p className="text-lg mb-4">
          Simply browse our products, click on the "Buy on WhatsApp" button for the item you're interested in, and
          you'll be connected with our team to complete your purchase.
        </p>
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors duration-300"
          >
            Browse Our Products
          </Link>
        </div>
      </div>
    </div>
  )
}

