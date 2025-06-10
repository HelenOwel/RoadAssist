import React, { useState, useEffect } from 'react';
import { Wrench, Phone, MapPin, Clock, Star, Menu, X, Car, CheckCircle, ChevronDown, ChevronUp, Shield, Award, Users,  Zap, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    carModel: '',
    issue: '',
    urgency: 'normal'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          location: '',
          carModel: '',
          issue: '',
          urgency: 'normal'
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Service Request:', formData);
    setIsSubmitted(true);
  };

  const Logo = () => (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div 
          className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center transform rotate-12"
          animate={{ rotate: [12, -12, 12] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
          <Wrench className="w-6 h-6 text-white transform -rotate-12" />
        </motion.div>
        <motion.div 
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-white text-xs font-bold">!</span>
        </motion.div>
      </div>
      <span className="text-2xl font-bold text-gray-800">FixFast</span>
    </motion.div>
  );

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Toyota Owner",
      content: "My car broke down in the middle of nowhere at 2 AM. FixFast had a mechanic to me in 35 minutes. Absolutely saved my life!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Uber Driver",
      content: "As a rideshare driver, I can't afford downtime. These guys fixed my alternator in my driveway while I took a nap. 10/10 service.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "College Student",
      content: "Honest pricing and super friendly mechanics. They even showed me what was wrong with my car and how to prevent it in the future.",
      rating: 4
    }
  ];

  const faqs = [
    {
      question: "How quickly can a mechanic arrive?",
      answer: "Our average response time is 30 minutes in urban areas. For emergency cases, we prioritize your request and aim to arrive even faster."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, cash, Apple Pay, Google Pay, and PayPal. Payment is only required after service completion."
    },
    {
      question: "Do you provide warranty for repairs?",
      answer: "Yes! All our repairs come with a 6-month warranty. If the same issue occurs within this period, we'll fix it at no additional cost."
    },
    {
      question: "Can you service all car makes and models?",
      answer: "Our mechanics are certified to work on all major brands and most models. For specialty vehicles, we'll notify you if we need to arrange a specialist."
    }
  ];

  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Availability" },
    { value: "30min", label: "Avg. Response Time" },
    { value: "10,000+", label: "Vehicles Serviced" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Logo />
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#request" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Request Help</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">About Us</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </div>
            
            <button 
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-3">
                <a href="#home" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">Home</a>
                <a href="#services" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">Services</a>
                <a href="#request" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">Request Help</a>
                <a href="#about" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">About Us</a>
                <a href="#contact" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-32 pb-20 overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Car Broke Down? 
              <motion.span 
                className="block text-yellow-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We Come to You!
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Professional mobile mechanics available 24/7. Fast, reliable, and affordable car repair services at your location.
            </motion.p>
            
            <motion.a
              href="#request" 
              className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2" size={20} />
              Get Help Now
            </motion.a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="text-4xl font-bold text-blue-600 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose FixFast?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're revolutionizing car repair with convenience, speed, and transparency</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: "Quick Response",
                desc: "Average response time of 30 minutes. We'll be there when you need us most.",
                bg: "bg-blue-100"
              },
              {
                icon: <MapPin className="w-8 h-8 text-green-600" />,
                title: "Mobile Service",
                desc: "We come to your location - home, office, or roadside. No need to tow your car.",
                bg: "bg-green-100"
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-600" />,
                title: "Expert Mechanics",
                desc: "Certified professionals with years of experience and all necessary tools.",
                bg: "bg-yellow-100"
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-600" />,
                title: "6-Month Warranty",
                desc: "All repairs come with a warranty for your peace of mind.",
                bg: "bg-purple-100"
              },
              {
                icon: <Award className="w-8 h-8 text-red-600" />,
                title: "Quality Parts",
                desc: "We use only OEM or equivalent quality replacement parts.",
                bg: "bg-red-100"
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-600" />,
                title: "Customer First",
                desc: "Our satisfaction guarantee means we won't stop until you're happy.",
                bg: "bg-indigo-100"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`${feature.bg} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions for all your vehicle needs</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Battery Replacement', icon: <Zap className="w-8 h-8 text-blue-600 mb-3" /> },
              { name: 'Tire Repair & Change', icon: <Wrench className="w-8 h-8 text-green-600 mb-3" /> },
              { name: 'Engine Diagnostics', icon: <Wrench className="w-8 h-8 text-red-600 mb-3" /> },
              { name: 'Brake Repair', icon: <Car className="w-8 h-8 text-purple-600 mb-3" /> },
              { name: 'Oil Change', icon: <Wrench className="w-8 h-8 text-yellow-600 mb-3" /> },
              { name: 'Jump Start', icon: <Zap className="w-8 h-8 text-indigo-600 mb-3" /> },
              { name: 'Alternator Repair', icon: <Wrench className="w-8 h-8 text-pink-600 mb-3" /> },
              { name: 'Emergency Repairs', icon: <Heart className="w-8 h-8 text-red-500 mb-3" /> }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg text-center">{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of drivers across the region</p>
          </motion.div>
          
          <div className="relative h-64">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                activeTestimonial === index && (
                  <motion.div
                    key={testimonial.id}
                    className="bg-gray-50 p-8 rounded-xl absolute inset-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-lg italic mb-6">"{testimonial.content}"</p>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">About FixFast</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2015, FixFast started with a simple mission: to make car repairs as convenient as possible for busy people.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What began as a single mechanic with a van has grown into a network of certified professionals serving thousands of happy customers.
              </p>
              <p className="text-lg text-gray-600">
                We're proud to be the highest-rated mobile mechanic service in the region, with a 98% customer satisfaction rate.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-blue-600 w-full h-80 rounded-xl shadow-lg overflow-hidden">
                {/* Placeholder for an image or video */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <Wrench className="w-20 h-20 text-white opacity-30" />
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Best Mobile Mechanics</div>
                    <div className="text-gray-600">2023 Service Excellence Award</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => {
                    const newFaqs = [...faqs];
                    newFaqs[index].isOpen = !newFaqs[index].isOpen;
                  }}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  {faq.isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                
                <AnimatePresence>
                  {faq.isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Service Form */}
      <section id="request" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Request Mechanic Service</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll dispatch a mechanic to your location</p>
          </motion.div>
          
          {isSubmitted ? (
            <motion.div 
              className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Request Submitted!</h3>
              <p className="text-green-600">We'll contact you within 5 minutes and dispatch a mechanic to your location.</p>
            </motion.div>
          ) : (
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your current location"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Car Model</label>
                  <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="e.g., Toyota Camry 2018"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Describe the Issue *</label>
                  <textarea
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Describe what's wrong with your car..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>
              
              <motion.button
                type="button"
                onClick={handleSubmit}
                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Submit Request - Get Help Now!
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our team is standing by 24/7 to assist with your automotive emergencies</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-800 p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Available 24/7 for emergencies</p>
              <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300 font-medium">(+234)81-898-6971</a>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Area</h3>
              <p className="text-gray-300 mb-4">Covering the entire metro area</p>
              <p className="text-gray-300">And 50km surrounding</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-300 mb-1">Mon-Fri: 7am - 10pm</p>
              <p className="text-gray-300 mb-1">Sat-Sun: 8am - 9pm</p>
              <p className="text-gray-300">Emergency: 24/7</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo />
              <p className="mt-4 text-gray-400">
                Making car repairs convenient, transparent, and affordable since 2015.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Repairs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Battery Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tire Change</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Diagnostics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  {/* Icon would go here */}
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  {/* Icon would go here */}
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="sr-only">Instagram</span>
                  {/* Icon would go here */}
                </a>
              </div>
              <p className="mt-4 text-gray-400">
                Subscribe to our newsletter for tips and special offers
              </p>
              <div className="mt-2 flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 FixFast. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;