import React, { useState, useEffect } from 'react';
import { Car, Truck, Wrench, ShoppingCart, Star, Zap, Shield, Award, ChevronRight, Battery, Settings, Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animatedVehicles, setAnimatedVehicles] = useState([]);

  // Vehicle animation setup
  useEffect(() => {
    const vehicles = [
      { id: 1, type: 'car', x: -100, speed: 2, delay: 0 },
      { id: 2, type: 'truck', x: -150, speed: 1.5, delay: 2000 },
      { id: 3, type: 'car', x: -120, speed: 2.2, delay: 4000 },
    ];
    setAnimatedVehicles(vehicles);

    // Animate vehicles
    const interval = setInterval(() => {
      setAnimatedVehicles(prev => 
        prev.map(vehicle => ({
          ...vehicle,
          x: vehicle.x >= window.innerWidth + 100 ? -200 : vehicle.x + vehicle.speed
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const productCategories = [
    { id: 'all', name: 'All Products', icon: Settings },
    { id: 'engine', name: 'Engine Parts', icon: Settings },
    { id: 'electrical', name: 'Electrical', icon: Battery },
    { id: 'tools', name: 'Tools', icon: Wrench },
    { id: 'fluids', name: 'Fluids & Oils', icon: Filter },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Engine Oil',
      category: 'fluids',
      price: '$29.99',
      rating: 4.8,
      image: '🛢️',
      description: 'High-performance synthetic engine oil for maximum protection',
      features: ['5W-30 Grade', 'Synthetic Blend', '5000 Mile Protection'],
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Car Battery 12V',
      category: 'electrical',
      price: '$89.99',
      rating: 4.9,
      image: '🔋',
      description: 'Long-lasting maintenance-free car battery',
      features: ['3-Year Warranty', 'Cold Crank Amps: 600', 'Maintenance Free'],
      badge: 'Top Rated'
    },
    {
      id: 3,
      name: 'Brake Pad Set',
      category: 'engine',
      price: '$45.99',
      rating: 4.7,
      image: '🔧',
      description: 'Ceramic brake pads for superior stopping power',
      features: ['Ceramic Material', 'Low Dust', 'Quiet Operation'],
      badge: 'New'
    },
    {
      id: 4,
      name: 'Professional Tool Kit',
      category: 'tools',
      price: '$199.99',
      rating: 4.9,
      image: '🧰',
      description: 'Complete 150-piece mechanic tool set',
      features: ['150 Pieces', 'Chrome Finish', 'Lifetime Warranty'],
      badge: 'Professional'
    },
    {
      id: 5,
      name: 'Air Filter',
      category: 'engine',
      price: '$19.99',
      rating: 4.6,
      image: '🌀',
      description: 'High-flow air filter for improved engine performance',
      features: ['Reusable', 'High Flow', 'Washable'],
      badge: 'Eco-Friendly'
    },
    {
      id: 6,
      name: 'LED Headlight Bulbs',
      category: 'electrical',
      price: '$69.99',
      rating: 4.8,
      image: '💡',
      description: 'Ultra-bright LED headlight conversion kit',
      features: ['6000K White', '12000 Lumens', 'Plug & Play'],
      badge: 'Upgrade'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const VehicleIcon = ({ type, style }) => (
    <div 
      className={`absolute text-4xl transition-all duration-100 ${type === 'truck' ? 'text-orange-500' : 'text-blue-500'}`}
      style={style}
    >
      {type === 'truck' ? '🚛' : '🚗'}
    </div>
  );

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
      {product.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {product.badge}
          </span>
        </div>
      )}
      
      <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300">
        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {product.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {product.features.map((feature, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">{product.price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center group-hover:px-8">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      {/* Animated Background Vehicles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10 z-0">
        {animatedVehicles.map((vehicle) => (
          <VehicleIcon
            key={vehicle.id}
            type={vehicle.type}
            style={{
              left: `${vehicle.x}px`,
              top: `${20 + (vehicle.id * 150)}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
            <Award className="w-4 h-4 mr-2" />
            Premium Auto Parts & Tools
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Quality Auto
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Products
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our extensive collection of premium automotive parts, tools, and accessories. 
            From engine components to professional-grade tools, we have everything you need.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span className="font-semibold">Warranty Guaranteed</span>
            </div>
            <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="font-semibold">Fast Shipping</span>
            </div>
            <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
              <Award className="w-5 h-5 text-blue-500 mr-2" />
              <span className="font-semibold">Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative z-10 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Shop by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {productCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative z-10 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory === 'all' ? 'All Products' : 
               productCategories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-600 font-medium">
              {filteredProducts.length} products found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Need Professional Installation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our certified mechanics can install any product you purchase. Book an appointment today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Wrench className="w-5 h-5 mr-2" />
              Book Installation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              Contact Expert
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Products;