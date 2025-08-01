import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Package, Plus, Trash2, Search, Home, User, X, Edit, Minus, MoreHorizontal, Check, ArrowLeft, ShoppingCart, Scan } from 'lucide-react';
import { db } from './firebase-config.js';
import { ref, push, set, onValue, remove, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { validateManagerialCode } from './auth-config.js';

const LoginScreen = ({ loginData, setLoginData, setIsLoggedIn, setShowLoginScreen, auth }) => {
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, loginData.username, loginData.password);
        setIsLoggedIn(true);
      } catch (error) {
        alert('Login failed: ' + error.message);
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <Package className="h-8 w-8 text-gray-600 mr-2" />
              <h1 className="text-2xl font-semibold text-gray-800">Inventory</h1>
            </div>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">🔒</div>
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Sign In
            </button>
          </form>
          
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
  };

const RegisterScreen = ({ registerData, setRegisterData, setIsLoggedIn, setShowLoginScreen, auth, db }) => {
    const handleRegister = async (e) => {
      e.preventDefault();
      
      const codeValidation = validateManagerialCode(registerData.confirmationCode);
      if (!codeValidation) {
        alert('Invalid managerial confirmation code.');
        return;
      }
      
      if (registerData.password !== registerData.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
      
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password);
        const user = userCredential.user;
        
        await set(ref(db, `users/${user.uid}`), {
          fullName: registerData.fullName,
          email: registerData.email,
          username: registerData.username,
          role: codeValidation.role,
          createdAt: new Date().toISOString()
        });
        
        setIsLoggedIn(true);
        setShowLoginScreen(true);
        alert('Account created successfully!');
      } catch (error) {
        alert('Registration failed: ' + error.message);
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <Package className="h-8 w-8 text-gray-600 mr-2" />
              <h1 className="text-2xl font-semibold text-gray-800">Register</h1>
            </div>
          </div>
          
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                value={registerData.fullName}
                onChange={(e) => setRegisterData({...registerData, fullName: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">📧</div>
              <input
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                value={registerData.username}
                onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">🔒</div>
              <input
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">🔒</div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={registerData.confirmPassword}
                onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-3 h-5 w-5 text-gray-400">🔑</div>
              <input
                type="text"
                placeholder="Managerial Code (e.g., FOOD_ADMIN_2025)"
                value={registerData.confirmationCode}
                onChange={(e) => setRegisterData({...registerData, confirmationCode: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Create Account
            </button>
          </form>
          
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
  };

const RemoveProductView = ({ 
  items, 
  searchData, 
  handleRemoveProductSearch, 
  selectedProducts, 
  setSelectedProducts, 
  db 
}) => {
    const handleRemoveSelected = () => {
      if (selectedProducts.length === 0) return;
      
      if (window.confirm(`Are you sure you want to remove ${selectedProducts.length} selected product(s)? This action cannot be undone.`)) {
        selectedProducts.forEach(productId => {
          const productRef = ref(db, `inventory/${productId}`);
          remove(productRef);
        });
        setSelectedProducts([]);
        alert('Selected products have been removed successfully!');
      }
    };

    const handleRemoveSingle = (productId, productName) => {
      if (window.confirm(`Are you sure you want to remove "${productName}"? This action cannot be undone.`)) {
        const productRef = ref(db, `inventory/${productId}`);
        remove(productRef);
        alert('Product has been removed successfully!');
      }
    };

    const displayProducts = useMemo(() => 
      items.filter(product => 
        product.name.toLowerCase().includes(searchData.removeProduct.toLowerCase())
      ), [items, searchData.removeProduct]
    );

    return (
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
                  value={searchData.removeProduct}
                  onChange={handleRemoveProductSearch}
                  autoComplete="off"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleRemoveSelected}
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
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                        checked={selectedProducts.length === displayProducts.length && displayProducts.length > 0}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedProducts(displayProducts.map(p => p.id));
                          } else {
                            setSelectedProducts([]);
                          }
                        }}
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On Hand</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Min.</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {displayProducts.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                        No products found
                      </td>
                    </tr>
                  ) : (
                    displayProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input 
                            type="checkbox" 
                            className="rounded border-gray-300 text-red-600"
                            checked={selectedProducts.includes(product.id)}
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
                            <div className="text-2xl mr-3">{product.image || '📦'}</div>
                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-blue-600 text-sm">{product.category}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{Number(product.onHand)}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{Number(product.stockMin)}</td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={() => handleRemoveSingle(product.id, product.name)}
                            className="text-red-600 hover:text-red-800 flex items-center"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
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
};

const TransactionsView = ({ 
  items, 
  searchData, 
  handleTransactionsSearch, 
  cart, 
  setCart, 
  db 
}) => {
    const addToCart = (product) => {
      const existingItem = cart.find(item => item.id === product.id);
      const purchaseLimit = Number(product.purchaseLimit);
      
      if (existingItem) {
        if (existingItem.quantity < purchaseLimit) {
          setCart(cart.map(item => 
            item.id === product.id 
              ? {...item, quantity: item.quantity + 1, purchaseLimit: purchaseLimit}
              : item
          ));
        }
      } else {
        setCart([...cart, {...product, quantity: 1, purchaseLimit: purchaseLimit}]);
      }
    };

    const removeFromCart = (productId) => {
      setCart(cart.filter(item => item.id !== productId));
    };

    const updateCartQuantity = (productId, newQuantity) => {
      if (newQuantity <= 0) {
        removeFromCart(productId);
      } else {
        const currentProduct = items.find(item => item.id === productId);
        const purchaseLimit = currentProduct ? Number(currentProduct.purchaseLimit) : 1;
        
        setCart(cart.map(item => 
          item.id === productId 
            ? {...item, quantity: Math.min(newQuantity, purchaseLimit), purchaseLimit: purchaseLimit}
            : item
        ));
      }
    };

    const checkout = () => {
      cart.forEach(cartItem => {
        const inventoryRef = ref(db, `inventory/${cartItem.id}`);
        update(inventoryRef, {
          onHand: Number(cartItem.onHand) - cartItem.quantity
        });
      });
      
      setCart([]);
      alert('Checkout completed successfully!');
    };

    const displayProducts = useMemo(() => 
      items.filter(product => 
        product.name.toLowerCase().includes(searchData.transactions.toLowerCase())
      ), [items, searchData.transactions]
    );

    return (
      <div className="flex-1 bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold text-gray-900">Transactions</h1>
              <span className="text-gray-400">/</span>
              <span className="text-blue-600">Shopping & Checkout</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products"
                value={searchData.transactions}
                onChange={handleTransactionsSearch}
                autoComplete="off"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="border-b border-gray-200 p-4">
                <h2 className="font-medium text-gray-900">Available Products</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Limit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {displayProducts.filter(product => Number(product.onHand) > 0).length === 0 ? (
                      <tr>
                        <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                          No products available
                        </td>
                      </tr>
                    ) : (
                      displayProducts.filter(product => Number(product.onHand) > 0).map((product) => {
                        const cartItem = cart.find(item => item.id === product.id);
                        const cartQuantity = cartItem ? cartItem.quantity : 0;
                        const purchaseLimit = Number(product.purchaseLimit);
                        const canAddMore = cartQuantity < purchaseLimit;
                        
                        return (
                          <tr key={product.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="text-2xl mr-3">{product.image}</div>
                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">{Number(product.onHand)}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{Number(product.purchaseLimit)}</td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => addToCart(product)}
                                disabled={!canAddMore}
                                className={`px-3 py-1 rounded text-sm transition-colors ${
                                  canAddMore
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                              >
                                Add to Cart ({cartQuantity})
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="border-b border-gray-200 p-4">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2 text-gray-700" />
                  <h2 className="font-medium text-gray-900">Shopping Cart ({cart.length})</h2>
                </div>
              </div>
              
              <div className="p-4">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  <div className="space-y-3">
                    {cart.map((item) => {
                      const currentProduct = items.find(p => p.id === item.id);
                      const currentPurchaseLimit = currentProduct ? Number(currentProduct.purchaseLimit) : Number(item.purchaseLimit);
                      
                      return (
                        <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-3">
                          <div className="flex items-center">
                            <div className="text-xl mr-2">{item.image}</div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              <div className="text-xs text-gray-500">Limit: {currentPurchaseLimit}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors text-sm"
                            >
                              -
                            </button>
                            <span className="text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= currentPurchaseLimit}
                              className={`w-6 h-6 rounded flex items-center justify-center transition-colors text-sm ${
                                item.quantity >= currentPurchaseLimit
                                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                  : 'bg-gray-200 hover:bg-gray-300'
                              }`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {cart.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium text-gray-900">Total Items:</span>
                      <span className="font-medium">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                    </div>
                    <button
                      onClick={checkout}
                      className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      Checkout
                    </button>
                    <button
                      onClick={() => setCart([])}
                      className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

const MenuView = ({ 
  items, 
  searchData, 
  handleMenuSearch, 
  setEditingProduct, 
  setShowEditModal 
}) => {
    const displayProducts = useMemo(() => 
      items.filter(product => 
        product.name.toLowerCase().includes(searchData.menu.toLowerCase())
      ), [items, searchData.menu]
    );

    return (
      <div className="flex-1 bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Inventory</h1>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchData.menu}
                onChange={handleMenuSearch}
                autoComplete="off"
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On Hand</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Min.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Limit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayProducts.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                      No products found
                    </td>
                  </tr>
                ) : (
                  displayProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{product.id}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.name}</td>
                      <td className="px-6 py-4 text-sm text-red-600 font-medium">{Number(product.onHand)}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{Number(product.stockMin)}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{Number(product.purchaseLimit)}</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => {
                            setEditingProduct(product);
                            setShowEditModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

const App = () => {
  const [currentView, setCurrentView] = useState('menu');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginScreen, setShowLoginScreen] = useState(true);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchData, setSearchData] = useState({
    menu: '',
    removeProduct: '',
    transactions: ''
  });
  const [items, setItems] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ fullName: '', email: '', username: '', password: '', confirmPassword: '', confirmationCode: '' });
  const [newProductData, setNewProductData] = useState({
    name: '',
    category: 'Grain product',
    onHand: 25,
    stockMin: 15,
    purchaseLimit: 3,
    entryDate: new Date().toISOString().split('T')[0],
    brand: '',
    servingPerUnit: 5,
    storageType: 'Shelf-stable',
    donorVendor: '',
    donatedOrPurchased: 'Donated'
  });
  const [auth] = useState(getAuth());

  const handleMenuSearch = useCallback((e) => {
    setSearchData(prev => ({ ...prev, menu: e.target.value }));
  }, []);

  const handleRemoveProductSearch = useCallback((e) => {
    setSearchData(prev => ({ ...prev, removeProduct: e.target.value }));
  }, []);

  const handleTransactionsSearch = useCallback((e) => {
    setSearchData(prev => ({ ...prev, transactions: e.target.value }));
  }, []);

  const menuViewProps = useMemo(() => ({
    items,
    searchData,
    handleMenuSearch,
    setEditingProduct,
    setShowEditModal
  }), [items, searchData, handleMenuSearch]);

  const removeProductViewProps = useMemo(() => ({
    items,
    searchData,
    handleRemoveProductSearch,
    selectedProducts,
    setSelectedProducts,
    db
  }), [items, searchData, handleRemoveProductSearch, selectedProducts]);

  const transactionsViewProps = useMemo(() => ({
    items,
    searchData,
    handleTransactionsSearch,
    cart,
    setCart,
    db
  }), [items, searchData, handleTransactionsSearch, cart]);

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
        
        setCart(prevCart => 
          prevCart.map(cartItem => {
            const updatedProduct = itemList.find(item => item.id === cartItem.id);
            if (updatedProduct) {
              return {
                ...cartItem,
                purchaseLimit: Number(updatedProduct.purchaseLimit),
                onHand: Number(updatedProduct.onHand)
              };
            }
            return cartItem;
          })
        );
      }
    });
    return () => unsubscribe();
  }, []);

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
            { id: 'transactions', label: 'Transactions', icon: ShoppingCart },
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

  const EditProductModal = React.memo(() => {
    const [localProduct, setLocalProduct] = useState(editingProduct);
    
    useEffect(() => {
      setLocalProduct(editingProduct);
    }, [editingProduct]);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Edit className="h-5 w-5 mr-2 text-gray-700" />
              <h2 className="text-lg font-semibold text-gray-900">Edit Product</h2>
            </div>
            <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {localProduct && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  value={localProduct.name || ''}
                  onChange={(e) => setLocalProduct({...localProduct, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  On Hand
                </label>
                <input
                  type="number"
                  value={localProduct.onHand || ''}
                  onChange={(e) => setLocalProduct({...localProduct, onHand: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stock Minimum
                </label>
                <input
                  type="number"
                  value={localProduct.stockMin || ''}
                  onChange={(e) => setLocalProduct({...localProduct, stockMin: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Purchase Limit
                </label>
                <input
                  type="number"
                  value={localProduct.purchaseLimit || ''}
                  onChange={(e) => setLocalProduct({...localProduct, purchaseLimit: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-2 pt-4">
                <button 
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const productRef = ref(db, `inventory/${localProduct.id}`);
                    const updatedProduct = {
                      ...localProduct,
                      onHand: Number(localProduct.onHand) || 0,
                      stockMin: Number(localProduct.stockMin) || 0,
                      purchaseLimit: Number(localProduct.purchaseLimit) || 0
                    };
                    update(productRef, updatedProduct);
                    
                    setItems(prev => prev.map(item => 
                      item.id === localProduct.id ? {...item, ...updatedProduct} : item
                    ));
                    
                    setCart(prevCart => 
                      prevCart.map(cartItem => 
                        cartItem.id === localProduct.id 
                          ? {...cartItem, purchaseLimit: Number(localProduct.purchaseLimit) || 0}
                          : cartItem
                      )
                    );
                    
                    setShowEditModal(false);
                    setEditingProduct(null);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  });

  const AddProductModal = React.memo(() => {
    const [localProductData, setLocalProductData] = useState(newProductData);
    
    useEffect(() => {
      setLocalProductData(newProductData);
    }, [newProductData]);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-[600px] max-h-[90vh] overflow-y-auto shadow-xl">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Add New Product</h2>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input 
                type="text" 
                placeholder="Saltine Crackers" 
                value={localProductData.name}
                onChange={(e) => setLocalProductData({...localProductData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  value={localProductData.category}
                  onChange={(e) => setLocalProductData({...localProductData, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Grain product</option>
                  <option>Canned Goods</option>
                  <option>Condiments/Sauce</option>
                  <option>Dry Cereal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">On Hand</label>
                <div className="flex">
                  <input 
                    type="number" 
                    value={localProductData.onHand}
                    onChange={(e) => setLocalProductData({...localProductData, onHand: parseInt(e.target.value) || 0})}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                  <button className="bg-blue-600 text-white px-3 rounded-r hover:bg-blue-700">+</button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Minimum</label>
                <select 
                  value={localProductData.stockMin}
                  onChange={(e) => setLocalProductData({...localProductData, stockMin: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={15}>15</option>
                  <option value={10}>10</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Limit</label>
                <select 
                  value={localProductData.purchaseLimit}
                  onChange={(e) => setLocalProductData({...localProductData, purchaseLimit: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={3}>3</option>
                  <option value={2}>2</option>
                  <option value={1}>1</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Entry Date</label>
                <input 
                  type="date" 
                  value={localProductData.entryDate}
                  onChange={(e) => setLocalProductData({...localProductData, entryDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Brand (optional)</label>
                <input 
                  type="text" 
                  placeholder="Generic" 
                  value={localProductData.brand}
                  onChange={(e) => setLocalProductData({...localProductData, brand: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Serving per Unit</label>
                <input 
                  type="number" 
                  value={localProductData.servingPerUnit}
                  onChange={(e) => setLocalProductData({...localProductData, servingPerUnit: parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Storage Type</label>
                <input 
                  type="text" 
                  placeholder="Shelf-stable" 
                  value={localProductData.storageType}
                  onChange={(e) => setLocalProductData({...localProductData, storageType: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Donor Name or Vendor (Optional)</label>
                <input 
                  type="text" 
                  placeholder="N/A" 
                  value={localProductData.donorVendor}
                  onChange={(e) => setLocalProductData({...localProductData, donorVendor: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Donated or Purchased</label>
                <select 
                  value={localProductData.donatedOrPurchased}
                  onChange={(e) => setLocalProductData({...localProductData, donatedOrPurchased: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Donated</option>
                  <option>Purchased</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                const resetData = {
                  name: '',
                  category: 'Grain product',
                  onHand: 25,
                  stockMin: 15,
                  purchaseLimit: 3,
                  entryDate: new Date().toISOString().split('T')[0],
                  brand: '',
                  servingPerUnit: 5,
                  storageType: 'Shelf-stable',
                  donorVendor: '',
                  donatedOrPurchased: 'Donated'
                };
                setNewProductData(resetData);
                setShowAddProductModal(false);
              }}
              className="px-6 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={() => {
                const newProductRef = push(ref(db, 'inventory'));
                set(newProductRef, {
                  ...localProductData,
                  onHand: Number(localProductData.onHand),
                  stockMin: Number(localProductData.stockMin),
                  purchaseLimit: Number(localProductData.purchaseLimit),
                  servingPerUnit: Number(localProductData.servingPerUnit),
                  image: '📦',
                  createdAt: new Date().toISOString()
                });
                const resetData = {
                  name: '',
                  category: 'Grain product',
                  onHand: 25,
                  stockMin: 15,
                  purchaseLimit: 3,
                  entryDate: new Date().toISOString().split('T')[0],
                  brand: '',
                  servingPerUnit: 5,
                  storageType: 'Shelf-stable',
                  donorVendor: '',
                  donatedOrPurchased: 'Donated'
                };
                setNewProductData(resetData);
                setShowAddProductModal(false);
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Save Product
            </button>
          </div>
        </div>
      </div>
    );
  });

  if (!isLoggedIn) {
    return showLoginScreen ? 
      <LoginScreen 
        loginData={loginData}
        setLoginData={setLoginData}
        setIsLoggedIn={setIsLoggedIn}
        setShowLoginScreen={setShowLoginScreen}
        auth={auth}
      /> : 
      <RegisterScreen 
        registerData={registerData}
        setRegisterData={setRegisterData}
        setIsLoggedIn={setIsLoggedIn}
        setShowLoginScreen={setShowLoginScreen}
        auth={auth}
        db={db}
      />;
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
        
        {currentView === 'menu' && <MenuView {...menuViewProps} />}
        {currentView === 'remove-product' && <RemoveProductView {...removeProductViewProps} />}
        {currentView === 'transactions' && <TransactionsView {...transactionsViewProps} />}
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
      
      {showEditModal && <EditProductModal />}
      {showAddProductModal && <AddProductModal />}
    </div>
  );
};

export default App;