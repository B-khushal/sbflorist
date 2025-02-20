import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-pink-600">
          SPRING BLOSSOMS FLORIST
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/products" className="text-gray-600 hover:text-pink-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-pink-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-pink-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-gray-600 hover:text-pink-600">
            <ShoppingCart />
          </Link>
          <Link href="../register" className="text-gray-600 hover:text-pink-600">
            <User />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

