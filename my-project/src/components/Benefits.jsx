import React, { useState, useEffect } from 'react';
import { 
  Heart, Shield, Clock, DollarSign, Star, Trophy, 
  Users, CheckCircle, Zap, Gift, Sparkles, Crown,
  Phone, MapPin, Wrench, Battery, Car, Settings,
  ThumbsUp, Award, Smile, Coffee, Calendar, 
  TrendingUp, Target, Globe, Handshake
} from 'lucide-react';

const Benefits = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [countUp, setCountUp] = useState({
    customers: 0,
    satisfaction: 0,
    years: 0,
    savings: 0
  });
  const [sparkles, setSparkles] = useState([]);

  // Counter animation
  useEffect(() => {
    const targets = { customers: 10000, satisfaction: 99, years: 15, savings: 500 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCountUp(prev => ({
        customers: Math.min(prev.customers + Math.ceil(targets.customers / steps), targets.customers),
        satisfaction: Math.min(prev.satisfaction + Math.ceil(targets.satisfaction / steps), targets.satisfaction),
        years: Math.min(prev.years + Math.ceil(targets.years / steps), targets.years),
        savings: Math.min(prev.savings + Math.ceil(targets.savings / steps), targets.savings)
      }));
    }, interval);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  // Sparkle animation
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 2
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "I've never felt so cared for at a mechanic shop. They treated my old car like it was a luxury vehicle!",
      author: "Sarah M.",
      rating: 5,
      service: "Engine Repair"
    },
    {
      text: "Saved me over $800 compared to the dealership quote. Plus they came to my house!",
      author: "Mike R.",
      rating: 5,
      service: "Brake Service"
    },
    {
      text: "24/7 support isn't just a promise - they actually answered at 2 AM when I was stranded!",
      author: "Lisa K.",
      rating: 5,
      service: "Emergency Service"
    }
  ];

  // Testimonial rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const primaryBenefits = [
    {
      icon: Heart,
      title: "We Actually Care About You",
      sweetLine: "Not just your wallet, but YOU as a person 💝",
      description: "Every interaction is built on genuine care and respect. We remember your name, your car's history, and your coffee preference. Because great service isn't just about fixing cars - it's about building relationships that last a lifetime.",
      features: [
        "Personal relationship with your dedicated mechanic",
        "We remember your car's service history",
        "Free coffee and WiFi while you wait",
        "Birthday discounts and anniversary rewards"
      ],
      color: "from-pink-500 to-red-500",
      stats: "98% say we exceed expectations"
    },
    {
      icon: DollarSign,
      title: "Transparent, Fair Pricing",
      sweetLine: "No surprises, no hidden fees, just honest value 💰",
      description: "What you see is what you pay. Our upfront pricing means no shock bills, no surprise charges, and no regrets. We believe trust is built one honest transaction at a time.",
      features: [
        "Written estimates before any work begins",
        "Price match guarantee on comparable services",
        "Multiple payment options including financing",
        "Loyalty rewards that actually save you money"
      ],
      color: "from-green-500 to-emerald-600",
      stats: "Average savings of $200 vs competitors"
    },
    {
      icon: Clock,
      title: "Lightning-Fast Service",
      sweetLine: "Your time is precious - we protect it like gold ⏰",
      description: "We know you have a life to live beyond car repairs. That's why we've perfected the art of fast, efficient service without cutting corners on quality.",
      features: [
        "Most services completed same day",
        "Express lanes for quick services",
        "Online booking with real-time updates",
        "Mobile service brings us to you"
      ],
      color: "from-blue-500 to-cyan-500",
      stats: "3x faster than industry average"
    },
    {
      icon: Shield,
      title: "Bulletproof Guarantees",
      sweetLine: "Sleep easy knowing you're completely protected 🛡️",
      description: "Our guarantees aren't just words on paper - they're promises backed by action. If something goes wrong, we make it right. No questions, no hassle, no stress.",
      features: [
        "Lifetime warranty on major repairs",
        "30-day money-back satisfaction guarantee",
        "Free roadside assistance for 6 months",
        "Guaranteed work stands the test of time"
      ],
      color: "from-purple-500 to-indigo-600",
      stats: "99.9% warranty claim satisfaction"
    }
  ];

  const uniquePerks = [
    {
      icon: Gift,
      title: "VIP Treatment",
      description: "Priority scheduling, exclusive discounts, and special perks just for being awesome",
      perk: "Members save 15% on all services"
    },
    {
      icon: Phone,
      title: "24/7 Support Hotline",
      description: "Real humans answer, not robots. Day or night, we're here when you need us",
      perk: "Average response time: 2 minutes"
    },
    {
      icon: Handshake,
      title: "Referral Rewards",
      description: "Share the love and earn rewards. Your friends get great service, you get great savings",
      perk: "$50 credit for each referral"
    },
    {
      icon: Calendar,
      title: "Maintenance Reminders",
      description: "Never miss an oil change again. We track everything and remind you proactively",
      perk: "Automated care calendar included"
    },
    {
      icon: Target,
      title: "Precision Diagnostics",
      description: "State-of-the-art equipment finds problems others miss, saving you time and money",
      perk: "99.8% diagnostic accuracy rate"
    },
    {
      icon: Coffee,
      title: "Comfort Amenities",
      description: "Comfortable waiting area with premium coffee, snacks, and high-speed WiFi",
      perk: "Rated #1 waiting experience in city"
    }
  ];

  const BenefitCard = ({ benefit, index }) => (
    <div 
      className={`relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 transition-all duration-700 overflow-hidden group`}
      style={{ animationDelay: `${index * 300}ms` }}
    >
      {/* Animated gradient header */}
      <div className={`bg-gradient-to-br ${benefit.color} p-8 text-white relative overflow-hidden`}>
        <div className="absolute -top-4 -right-4 opacity-20 transform rotate-12 scale-150">
          <benefit.icon size={120} />
        </div>
        <div className="relative z-10">
          <benefit.icon size={48} className="mb-4 animate-pulse" />
          <h3 className="text-3xl font-bold mb-3">{benefit.title}</h3>
          <p className="text-xl opacity-95 font-medium leading-relaxed">{benefit.sweetLine}</p>
        </div>
        {/* Floating sparkles */}
        <div className="absolute top-2 right-2 text-yellow-300 animate-bounce">✨</div>
        <div className="absolute bottom-4 left-4 text-yellow-200 animate-pulse">⭐</div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{benefit.description}</p>
        
        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
            Amazing Benefits:
          </h4>
          <ul className="space-y-3">
            {benefit.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-700">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-4 animate-pulse"></div>
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-2xl">
          <div className="flex items-center justify-center">
            <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
            <span className="font-bold text-gray-800">{benefit.stats}</span>
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16 relative overflow-hidden">
      {/* Animated sparkles background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-ping"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              fontSize: `${sparkle.size}px`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: '3s'
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 text-purple-800 px-8 py-4 rounded-full text-lg font-bold mb-8 animate-bounce shadow-lg">
            <Crown className="w-6 h-6 mr-3 text-yellow-500" />
            Benefits That Will Blow Your Mind
            <Sparkles className="w-6 h-6 ml-3 text-pink-500" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-gray-800 mb-8 leading-tight">
            Why Everyone
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
              Loves Us
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            It's not just about fixing cars - it's about creating an experience so amazing, 
            you'll actually <span className="text-pink-600 font-bold">look forward</span> to car maintenance. 
            Here's why thousands of customers choose us again and again...
          </p>

          {/* Animated Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-4xl font-black text-blue-600 mb-2">{countUp.customers.toLocaleString()}+</div>
              <div className="text-gray-600 font-semibold">Happy Customers</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-4xl font-black text-green-600 mb-2">{countUp.satisfaction}%</div>
              <div className="text-gray-600 font-semibold">Satisfaction Rate</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-4xl font-black text-purple-600 mb-2">{countUp.years}+</div>
              <div className="text-gray-600 font-semibold">Years of Excellence</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-4xl font-black text-orange-600 mb-2">${countUp.savings}+</div>
              <div className="text-gray-600 font-semibold">Average Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-800 mb-6">
              Benefits That Make You <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Smile</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              These aren't just benefits - they're life-changing advantages that make car care actually enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {primaryBenefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Unique Perks Grid */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Exclusive Perks You Won't Find Anywhere Else</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              These special touches turn ordinary service into extraordinary experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniquePerks.map((perk, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <perk.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{perk.title}</h3>
                <p className="text-center opacity-90 mb-4 leading-relaxed">{perk.description}</p>
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center py-2 px-4 rounded-lg font-bold text-sm">
                  {perk.perk}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-pink-100 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-12">What Our Customers Say</h2>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
            
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={32} className="text-yellow-400 fill-current mx-1" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="font-bold text-xl text-gray-800">
                - {testimonials[currentTestimonial].author}
              </div>
              <div className="text-blue-600 font-semibold">
                {testimonials[currentTestimonial].service}
              </div>
            </div>
            
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <Smile size={100} className="mx-auto mb-6 animate-bounce" />
          </div>
          <h2 className="text-6xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-2xl mb-10 opacity-90 leading-relaxed">
            Join the family of customers who've discovered what exceptional car care really means. 
            Your first service comes with our happiness guarantee!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-2xl hover:bg-gray-100 transition-colors flex items-center justify-center group shadow-2xl">
              <Phone className="w-8 h-8 mr-4 group-hover:animate-pulse" />
              Call Now: (555) 123-CARE
            </button>
            <button className="border-3 border-white text-white px-12 py-5 rounded-2xl font-bold text-2xl hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center shadow-2xl">
              Book Your First Service
              <Heart className="w-8 h-8 ml-4" />
            </button>
          </div>
          <p className="text-xl mt-8 opacity-75">
            🎁 New customers get 20% off their first service + free coffee for a year!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Benefits;