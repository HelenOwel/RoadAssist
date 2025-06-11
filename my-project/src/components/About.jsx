import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Truck, 
  Wrench, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Zap, 
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Target,
  Heart,
  Cog
} from 'lucide-react';

const About = () => {
  const [animatedVehicles, setAnimatedVehicles] = useState([]);
  const [floatingTools, setFloatingTools] = useState([]);

  // Vehicle animation setup
  useEffect(() => {
    const vehicles = [
      { id: 1, type: 'car', x: -100, speed: 1.8, delay: 0, lane: 1 },
      { id: 2, type: 'truck', x: -180, speed: 1.3, delay: 3000, lane: 2 },
      { id: 3, type: 'car', x: -120, speed: 2.1, delay: 6000, lane: 3 },
      { id: 4, type: 'truck', x: -200, speed: 1.5, delay: 9000, lane: 1 },
    ];
    setAnimatedVehicles(vehicles);

    // Floating tools animation
    const tools = [
      { id: 1, icon: '🔧', x: 100, y: 50, speedX: 0.5, speedY: 0.3 },
      { id: 2, icon: '🔩', x: 200, y: 150, speedX: -0.4, speedY: 0.6 },
      { id: 3, icon: '⚙️', x: 300, y: 100, speedX: 0.3, speedY: -0.4 },
      { id: 4, icon: '🛠️', x: 150, y: 200, speedX: -0.6, speedY: 0.2 },
    ];
    setFloatingTools(tools);

    // Animate vehicles
    const vehicleInterval = setInterval(() => {
      setAnimatedVehicles(prev => 
        prev.map(vehicle => ({
          ...vehicle,
          x: vehicle.x >= window.innerWidth + 100 ? -250 : vehicle.x + vehicle.speed
        }))
      );
    }, 50);

    // Animate floating tools
    const toolsInterval = setInterval(() => {
      setFloatingTools(prev =>
        prev.map(tool => ({
          ...tool,
          x: tool.x + tool.speedX > window.innerWidth ? 0 : tool.x < 0 ? window.innerWidth : tool.x + tool.speedX,
          y: tool.y + tool.speedY > 300 ? 50 : tool.y < 50 ? 300 : tool.y + tool.speedY,
        }))
      );
    }, 100);

    return () => {
      clearInterval(vehicleInterval);
      clearInterval(toolsInterval);
    };
  }, []);

  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Customers', color: 'text-blue-600' },
    { icon: Clock, number: '15+', label: 'Years Experience', color: 'text-green-600' },
    { icon: Award, number: '500+', label: 'Projects Completed', color: 'text-purple-600' },
    { icon: Star, number: '4.9', label: 'Average Rating', color: 'text-yellow-600' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We use only the finest parts and materials, ensuring every repair meets the highest standards of quality and durability.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Time is valuable. Our efficient processes and skilled technicians ensure quick turnaround without compromising quality.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We build lasting relationships through honest service and transparent communication.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Precision Work',
      description: 'Every bolt, every component is handled with precision. Our attention to detail ensures your vehicle runs perfectly.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      name: 'Michael Johnson',
      role: 'Head Mechanic',
      experience: '20+ Years',
      specialty: 'Engine Diagnostics',
      image: '👨‍🔧',
      description: 'Master technician with expertise in all vehicle types'
    },
    {
      name: 'Sarah Williams',
      role: 'Electrical Specialist',
      experience: '15+ Years',
      specialty: 'Auto Electronics',
      image: '👩‍🔧',
      description: 'Expert in modern vehicle electrical systems'
    },
    {
      name: 'David Chen',
      role: 'Service Manager',
      experience: '12+ Years',
      specialty: 'Customer Relations',
      image: '👨‍💼',
      description: 'Ensures exceptional customer service experience'
    }
  ];

  const VehicleIcon = ({ type, style, lane }) => (
    <div 
      className={`absolute text-3xl transition-all duration-100 ${type === 'truck' ? 'text-orange-500' : 'text-blue-500'}`}
      style={{
        ...style,
        top: `${80 + (lane * 120)}px`,
      }}
    >
      {type === 'truck' ? '🚛' : '🚗'}
    </div>
  );

  const FloatingTool = ({ tool, style }) => (
    <div 
      className="absolute text-2xl opacity-20 transition-all duration-200"
      style={style}
    >
      {tool.icon}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Moving Vehicles */}
        {animatedVehicles.map((vehicle) => (
          <VehicleIcon
            key={vehicle.id}
            type={vehicle.type}
            lane={vehicle.lane}
            style={{
              left: `${vehicle.x}px`,
            }}
          />
        ))}
        
        {/* Floating Tools */}
        {floatingTools.map((tool) => (
          <FloatingTool
            key={tool.id}
            tool={tool}
            style={{
              left: `${tool.x}px`,
              top: `${tool.y}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
            <Cog className="w-4 h-4 mr-2 animate-spin" />
            Trusted Auto Care Since 2008
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Our Story
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            For over 15 years, we've been the trusted automotive partner for thousands of customers. 
            Our passion for excellence and commitment to quality has made us the premier choice for all your vehicle needs.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <IconComponent className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008 by Master Mechanic Michael Johnson, our company began as a small 
                  neighborhood garage with a simple mission: provide honest, reliable automotive service 
                  that customers can trust.
                </p>
                <p>
                  What started as a one-man operation has grown into a full-service automotive center, 
                  but our core values remain unchanged. We believe in treating every customer like family 
                  and every vehicle like it's our own.
                </p>
                <p>
                  Today, we're proud to serve over 10,000 satisfied customers with state-of-the-art 
                  equipment, certified technicians, and an unwavering commitment to excellence.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">ASE Certified</span>
                </div>
                <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Award Winning</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="text-6xl mb-6 text-center">🏆</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Excellence Award</h3>
                <p className="text-center opacity-90 mb-6">
                  Recognized as the "Best Auto Service Center" for three consecutive years
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">2021</div>
                    <div className="text-sm opacity-80">Service Excellence</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2022</div>
                    <div className="text-sm opacity-80">Customer Choice</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2023</div>
                    <div className="text-sm opacity-80">Quality Leader</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2024</div>
                    <div className="text-sm opacity-80">Innovation Award</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals bring decades of combined experience to serve you better
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center text-white">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="opacity-90">{member.role}</p>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {member.experience}
                    </span>
                    <span className="text-sm text-gray-600">{member.specialty}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust us with their vehicles
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Visit Us</div>
                <div className="text-sm opacity-80">123 Auto Street, Port Harcourt</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Call Us</div>
                <div className="text-sm opacity-80">+234 (0) 123-456-7890</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div className="text-sm opacity-80">info@automechanic.com</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Service
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Get Quote
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

export default About;