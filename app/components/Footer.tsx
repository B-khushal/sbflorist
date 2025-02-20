import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              Blooming Blossoms is your go-to florist for beautiful, fresh flowers for every occasion.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-pink-600">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="./about" className="text-gray-600 hover:text-pink-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="./contact" className="text-gray-600 hover:text-pink-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/iteam" className="text-gray-600 hover:text-pink-600">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              123 Flower Street
              <br />
              Blossom City, FL 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@bloomingblossoms.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Blooming Blossoms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

