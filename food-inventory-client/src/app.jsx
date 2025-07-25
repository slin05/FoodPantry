import React, { useState, useEffect } from 'react';
import { Package, Plus, Trash2, Scan, Search, Home, User, X, Edit, Minus, MoreHorizontal, Check, ArrowLeft } from 'lucide-react';
import { db } from './firebase-config.js';
import { ref, push, set, onValue, remove } from "firebase/database";

// Mock Data to test if logic works
const mockProducts = [
  { id: '001', name: 'Granola Bar', category: 'Grain Product', onHand: 50, stockMin: 15, purchaseLimit: 7, image: '🍫' },
  { id: '002', name: 'Oatmeal Pack', category: 'Grain', onHand: 20, stockMin: 10, purchaseLimit: 7, image: '🥣' },
  { id: '003', name: 'Pasta Noodles (Box)', category: 'Grain Product', onHand: 25, stockMin: 10, purchaseLimit: 2, image: '📦' },
  { id: '004', name: 'Peanut Butter', category: 'Condiment/Sauce', onHand: 20, stockMin: 10, purchaseLimit: 1, image: '🥜' },
  { id: '005', name: 'Corn Flake Cereal (Box)', category: 'Dry Cereal', onHand: 15, stockMin: 5, purchaseLimit: 1, image: '🥣' },
  { id: '006', name: 'Rice (Bag)', category: 'Grain', onHand: 30, stockMin: 25, purchaseLimit: 5, image: '🍚' },
  { id: '007', name: 'Tomato Soup (Can)', category: 'Canned Goods', onHand: 35, stockMin: 15, purchaseLimit: 4, image: '🥫' },
  { id: '008', name: 'Tomato Sauce', category: 'Condiments/Sauce', onHand: 25, stockMin: 10, purchaseLimit: 2, image: '🍅' },
  { id: '018', name: 'Black Beans (Can)', category: 'Canned Goods', onHand: 30, stockMin: 25, purchaseLimit: 4, image: '🥫' },
];

const App = () => {
  const [currentView, setCurrentView] = useState('menu');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginScreen, setShowLoginScreen] = useState(true);
  const [showScanModal, setShowScanModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [scanQuantity, setScanQuantity] = useState(10);
  const [items, setItems] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Easy integration with Firebase
  useEffect(() => {
    const inventoryRef = ref(db, 'inventory');
    const unsubscribe = onValue(inventoryRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemList = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setItems(itemList);
      }
    });
    return () => unsubscribe();
  }, []);

  //Login Screen
  const LoginScreen = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <Package className="h-8 w-8 text-gray-600 mr-2" />
            <h1 className="text-2xl font-semibold text-gray-800">Inventory</h1>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">🔒</div>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Sign In
          </button>
        </div>
        
        <div className="text-center mt-6">
          <span className="text-gray-600">Register new user </span>
          <button 
            onClick={() => setShowLoginScreen(false)}
            className="text-blue-600 hover:underline font-medium"
          >
            Here
          </button>
        </div>
      </div>
    </div>
  );

  // Register New User Screen
  const RegisterScreen = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <Package className="h-8 w-8 text-gray-600 mr-2" />
            <h1 className="text-2xl font-semibold text-gray-800">Register</h1>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">📧</div>
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">🔒</div>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">🔒</div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">📧</div>
            <input
              type="text"
              placeholder="Confirmation Code"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={() => {
              setIsLoggedIn(true);
              setShowLoginScreen(true);
            }}
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Create Account
          </button>
        </div>
        
        <div className="text-center mt-6">
          <span className="text-gray-600">Already have an account? </span>
          <button 
            onClick={() => setShowLoginScreen(true)}
            className="text-blue-600 hover:underline font-medium"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );

  // Sidebar on main page
  const Sidebar = () => (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <Package className="h-7 w-7 text-gray-700 mr-3" />
          <h1 className="text-xl font-semibold text-gray-800">Inventory</h1>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {[
            { id: 'menu', label: 'Menu', icon: Home },
            { id: 'add-product', label: 'Add Product', icon: Plus },
            { id: 'remove-product', label: 'Remove Product', icon: Minus },
            { id: 'edit-product', label: 'Edit Product', icon: Edit },
            { id: 'scan-product', label: 'Scan Product', icon: Scan },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                currentView === item.id 
                  ? 'bg-gray-100 text-gray-900 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );

  // Scan Products Screen
  const ScanModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Scan className="h-5 w-5 mr-2 text-gray-700" />
            <h2 className="text-lg font-semibold text-gray-900">Scanning</h2>
          </div>
          <button onClick={() => setShowScanModal(false)} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Barcode Number
            </label>
            <input
              type="text"
              placeholder="40181700982"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity:
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setScanQuantity(Math.max(1, scanQuantity - 1))}
                className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                -
              </button>
              <span className="bg-blue-600 text-white px-4 py-1 rounded font-medium">{scanQuantity}</span>
              <button
                onClick={() => setScanQuantity(scanQuantity + 1)}
                className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex space-x-2 pt-4">
            <button className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              Remove
            </button>
            <button 
              onClick={() => setShowScanModal(false)}
              className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setShowScanModal(false);
              }}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Add Product Screen
  const AddProductModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[900px] max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="border-b border-gray-200 pb-4 mb-6">
          <div className="flex items-center">
            <Check className="h-5 w-5 mr-2 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Add New Product</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">General info</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4 bg-gray-50">
              <div className="text-6xl mb-2">📷</div>
              <p className="text-gray-500">Add Image</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input type="text" placeholder="Saltine Crackers" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Grain product</option>
                  <option>Canned Goods</option>
                  <option>Condiments/Sauce</option>
                  <option>Dry Cereal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">On Hand</label>
                <div className="flex">
                  <input type="number" defaultValue="25" className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button className="bg-blue-600 text-white px-3 rounded-r hover:bg-blue-700">+</button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Minimum</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>15</option>
                  <option>10</option>
                  <option>5</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Limit</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Entry Date</label>
                <input type="date" defaultValue="2025-06-15" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Brand (optional)</label>
                <input type="text" placeholder="Generic" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Serving per Unit</label>
                <input type="number" defaultValue="5" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Storage Type</label>
                <input type="text" placeholder="Shelf-stable" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Donor Name or Vendor (Optional)</label>
                <input type="text" placeholder="N/A" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Donated or Purchased</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Donated</option>
                  <option>Purchased</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 pt-4">
              <Scan className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">Scan Barcode</span>
              <Check className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => setShowAddProductModal(false)}
            className="px-6 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Save Product
          </button>
        </div>
      </div>
    </div>
  );

  // Remove Product View
  const RemoveProductView = () => (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-gray-900">Remove Product</h1>
            <span className="text-gray-400">/</span>
            <span className="text-red-600">Delete Items</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Product Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              disabled={selectedProducts.length === 0}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                selectedProducts.length > 0
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Remove Selected ({selectedProducts.length})
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 p-4">
            <h2 className="font-medium text-red-600">Select Products to Remove:</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On Hand</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Min.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-red-600"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedProducts([...selectedProducts, product.id]);
                          } else {
                            setSelectedProducts(selectedProducts.filter(id => id !== product.id));
                          }
                        }}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">{product.image}</div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-blue-600 text-sm">{product.category}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{product.onHand}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{product.stockMin}</td>
                    <td className="px-6 py-4">
                      <button className="text-red-600 hover:text-red-800 flex items-center">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-gray-200 bg-red-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-red-600">
                <div className="h-4 w-4 bg-red-600 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-white text-xs">!</span>
                </div>
                <span className="text-sm">Warning: This action cannot be undone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Edit Product View
  const EditProductView = () => (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-gray-900">Edit Product</h1>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600">Modify Items</span>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Product Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 p-4">
            <h2 className="font-medium text-blue-600">Select Product to Edit:</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On Hand</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Min.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Limit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">{product.image}</div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-blue-600 text-sm">{product.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="number" 
                        defaultValue={product.onHand}
                        className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="number" 
                        defaultValue={product.stockMin}
                        className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="number" 
                        defaultValue={product.purchaseLimit}
                        className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                        <button className="text-green-600 hover:text-green-800 flex items-center text-sm">
                          <Check className="h-4 w-4 mr-1" />
                          Save
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-gray-200 bg-blue-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-blue-600">
                <div className="h-4 w-4 bg-blue-600 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
                <span className="text-sm">Click Edit to modify individual fields, then Save to confirm changes</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Save All Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Scan Product View (Full Page)
  const ScanProductView = () => (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-gray-900">Scan Product</h1>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600">Barcode Scanner</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Scanner Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Scan className="h-6 w-6 mr-3 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Barcode Scanner</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-gray-600 mb-4">Position barcode within the frame</p>
                <div className="w-48 h-32 border-2 border-blue-600 rounded-lg mx-auto relative">
                  <div className="absolute inset-0 border-2 border-blue-600 rounded-lg animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 text-sm">
                    Scanning...
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">Or enter barcode manually:</p>
                <input
                  type="text"
                  placeholder="Enter barcode number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Package className="h-6 w-6 mr-3 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-900">Scan Results</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
                <div className="flex items-center mb-3">
                  <div className="text-3xl mr-3">🍫</div>
                  <div>
                    <h3 className="font-medium text-gray-900">Granola Bar</h3>
                    <p className="text-sm text-gray-600">Grain Product</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">On Hand:</span>
                    <span className="font-medium ml-2">50</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Stock Min:</span>
                    <span className="font-medium ml-2">15</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Purchase Limit:</span>
                    <span className="font-medium ml-2">7</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Barcode:</span>
                    <span className="font-medium ml-2">40181700982</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Quantity to Add/Remove:
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setScanQuantity(Math.max(1, scanQuantity - 1))}
                    className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    -
                  </button>
                  <span className="bg-blue-600 text-white px-6 py-2 rounded font-medium">{scanQuantity}</span>
                  <button
                    onClick={() => setScanQuantity(scanQuantity + 1)}
                    className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                  Add to Inventory
                </button>
                <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                  Remove from Inventory
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Scans */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 p-4">
            <h2 className="font-medium text-gray-900">Recent Scans</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Barcode</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">2:34 PM</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="text-xl mr-3">🍫</div>
                      <div className="text-sm font-medium text-gray-900">Granola Bar</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 text-sm">Added</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">+10</td>
                  <td className="px-6 py-4 text-sm text-gray-600">40181700982</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">2:31 PM</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="text-xl mr-3">🥫</div>
                      <div className="text-sm font-medium text-gray-900">Tomato Soup</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 text-sm">Removed</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">-3</td>
                  <td className="px-6 py-4 text-sm text-gray-600">87346291034</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  // Inventory View (Lists all current products with their UniqueID Number)
  const MenuView = () => (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Inventory</h1>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On Hand</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Min.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Limit</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{product.id}</td>
                  <td className="px-6 py-4 text-2xl">{product.image}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-red-600 font-medium">{product.onHand}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{product.stockMin}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{product.purchaseLimit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  if (!isLoggedIn) {
    return showLoginScreen ? <LoginScreen /> : <RegisterScreen />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600 text-sm">HOME</span>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              FB
            </div>
          </div>
        </div>
        
        {currentView === 'menu' && <MenuView />}
        {currentView === 'remove-product' && <RemoveProductView />}
        {currentView === 'edit-product' && <EditProductView />}
        {currentView === 'scan-product' && <ScanProductView />}
        {currentView === 'add-product' && (
          <div className="flex-1 bg-gray-50 p-6">
            <button
              onClick={() => setShowAddProductModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Add New Product
            </button>
          </div>
        )}
      </div>
      
      {showScanModal && <ScanModal />}
      {showAddProductModal && <AddProductModal />}
    </div>
  );
};

export default App;