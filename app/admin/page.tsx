"use client"

import { useState } from "react"

const initialProducts = [
  { id: 1, name: "Spring Bouquet", price: 49.99, category: "Bouquets" },
  { id: 2, name: "Rose Arrangement", price: 59.99, category: "Arrangements" },
  { id: 3, name: "Tulip Collection", price: 39.99, category: "Bouquets" },
]

export default function AdminPage() {
  const [products, setProducts] = useState(initialProducts)
  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    const id = products.length + 1
    setProducts((prev) => [...prev, { ...newProduct, id, price: Number.parseFloat(newProduct.price) }])
    setNewProduct({ name: "", price: "", category: "" })
  }

  const handleDeleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="price" className="block mb-1">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              required
              step="0.01"
              min="0"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="category" className="block mb-1">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Add Product
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Product List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">ID</th>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Price</th>
              <th className="border p-2 text-left">Category</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border p-2">{product.id}</td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">${product.price.toFixed(2)}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2">
                  <button onClick={() => handleDeleteProduct(product.id)} className="text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

