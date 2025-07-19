import React, { useState, useEffect } from 'react';
import { Package, Plus, Trash2, Scan, Search, Home, User, X, Edit, Minus, MoreHorizontal, Check } from 'lucide-react';
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
  const [currentView, setCurrentView] = useState('transaction');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showScanModal, setShowScanModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [transactionItems, setTransactionItems] = useState(mockProducts.slice(0, 7));
  const [scanQuantity, setScanQuantity] = useState(10);
  const [items, setItems] = useState([]);

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
          <a href="#" className="text-blue-600 hover:underline font-medium">Here</a>
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
            { id: 'transaction', label: 'Transaction', icon: Package },
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
          <div className="flex space-x-8">
            <button className="flex items-center text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
              <Check className="h-4 w-4 mr-2" />
              Add Product
            </button>
            <button className="text-gray-500 pb-2">Remove Product</button>
            <button className="text-gray-500 pb-2">Edit Product</button>
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

  // TransactionView (Lists all current products as well as future ones that can be "purchased")
  const TransactionView = () => (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-gray-900">Transaction</h1>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600">Scan</span>
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
              onClick={() => setShowScanModal(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Scan className="h-4 w-4 mr-2" />
              Barcode Scanner
            </button>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              U
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 p-4">
            <h2 className="font-medium text-blue-600">This Transaction:</h2>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Limit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactionItems.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
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
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {product.onHand > product.stockMin ? '2' : '1'}
                    </td>
                    <td className="px-6 py-4 text-sm text-red-600">{product.purchaseLimit}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              TOTAL: 9 / 15
            </div>
          </div>

          <div className="px-6 py-4 border-t border-blue-100 bg-blue-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-blue-600">
                <div className="h-4 w-4 bg-blue-600 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setShowAddProductModal(true)}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Create New Product
                </button>
                <button className="text-blue-600 hover:underline font-medium">Edit Product</button>
              </div>
            </div>
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
    return <LoginScreen />;
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
        
        {currentView === 'transaction' && <TransactionView />}
        {currentView === 'menu' && <MenuView />}
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