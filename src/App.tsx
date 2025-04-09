import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, Send } from 'lucide-react';
import pathpulseLogo from './logo.jpg'; // Import your logo file

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:anuragdutta2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#222222]">
      {/* Header */}
      <header className="bg-[#333333] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <img 
              src={pathpulseLogo} // Use the imported logo
              alt="PathPulse Logo" 
              className="w-20 h-20 rounded-xl"
            />
            <div>
              <h1 className="text-3xl font-bold">Path<span className="text-[#40cbd8]"> Pulse</span></h1>
              <p className="mt-2 text-white">Your Smart Travel Companion</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Terms and Conditions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#40cbd8] mb-6">Terms and Conditions</h2>
            
            <div className="space-y-4">
              {[
                {
                  title: '1. Acceptance of Terms',
                  content: 'By accessing and using PathPulse, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy.'
                },
                {
                  title: '2. User Registration',
                  content: 'Users must provide accurate and complete information during registration. You are responsible for maintaining the confidentiality of your account.'
                },
                {
                  title: '3. Location Services',
                  content: 'PathPulse requires access to your location to provide navigation and safety features. You can control location permissions through your device settings.'
                },
                {
                  title: '4. Emergency Services',
                  content: 'While PathPulse provides emergency contact features, it should not be relied upon as the sole means of emergency communication.'
                }
              ].map((section, index) => (
                <div key={index} className="bg-[#333333] rounded-lg shadow-sm">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                    onClick={() => toggleSection(section.title)}
                  >
                    <span className="font-medium text-[#40cbd8]">{section.title}</span>
                    <ChevronDown
                      className={`transform transition-transform text-[#40cbd8] ${
                        activeSection === section.title ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeSection === section.title && (
                    <div className="px-6 py-4 border-t border-gray-700">
                      <p className="text-white">{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#40cbd8] mb-6">Contact Us</h2>
            
            <div className="bg-[#333333] rounded-lg shadow-sm p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#40cbd8] bg-opacity-10 p-3 rounded-full">
                    <Mail className="text-[#40cbd8] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#40cbd8]">Email</h3>
                    <p className="text-white">anuragdutta2004@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#40cbd8] bg-opacity-10 p-3 rounded-full">
                    <Phone className="text-[#40cbd8] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#40cbd8]">Phone</h3>
                    <p className="text-white">+91 6294013920</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#40cbd8] bg-opacity-10 p-3 rounded-full">
                    <MapPin className="text-[#40cbd8] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#40cbd8]">Address</h3>
                    <p className="text-white">SRMIST Potheri Chengalpattu Tamil Nadu  603203</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#40cbd8] bg-opacity-10 p-3 rounded-full">
                    <Clock className="text-[#40cbd8] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#40cbd8]">Business Hours</h3>
                    <p className="text-white">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#40cbd8]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md bg-[#222222] border-gray-600 text-white shadow-sm focus:border-[#40cbd8] focus:ring focus:ring-[#40cbd8] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#40cbd8]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md bg-[#222222] border-gray-600 text-white shadow-sm focus:border-[#40cbd8] focus:ring focus:ring-[#40cbd8] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#40cbd8]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md bg-[#222222] border-gray-600 text-white shadow-sm focus:border-[#40cbd8] focus:ring focus:ring-[#40cbd8] focus:ring-opacity-50"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#40cbd8] hover:bg-[#3bb8c4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40cbd8]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;