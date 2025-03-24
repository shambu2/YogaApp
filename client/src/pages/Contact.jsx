import React from "react";
import Navbar from "../components/Navbar";
import { MapPin, Phone, Mail, Send, Bot as Lotus } from 'lucide-react';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        {/* Header */}
        

        {/* Main Content */}
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Begin your journey towards holistic wellness. Reach out to us
                for personalized Yoga and Ayurvedic consultations.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-700">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                    //   value={formData.email}
                    //   onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                    //   value={formData.subject}
                    //   onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                    //   value={formData.message}
                    //   onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white placeholder-slate-400"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden border border-slate-700">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif text-white mb-6">
                      Visit Our Center
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-white">Our Location</p>
                          <p className="text-slate-300">123 Ub road</p>
                          <p className="text-slate-300">
                            Bangalore District, KA 585306
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-white">Phone</p>
                          <p className="text-slate-300">+91 8523697410</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-white">Email</p>
                          <p className="text-slate-300">info@yogaayurveda.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
                    alt="Yoga meditation space"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
