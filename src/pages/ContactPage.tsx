import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log(formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-8 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-900 p-6 flex flex-col items-center text-center">
              <Mail size={24} className="mb-4" />
              <h3 className="text-xl font-light mb-2">Email</h3>
              <p className="text-gray-400">support@monochrome.com</p>
              <p className="text-gray-400">info@monochrome.com</p>
            </div>
            
            <div className="bg-zinc-900 p-6 flex flex-col items-center text-center">
              <MapPin size={24} className="mb-4" />
              <h3 className="text-xl font-light mb-2">Location</h3>
              <p className="text-gray-400">123 Fashion Street</p>
              <p className="text-gray-400">New York, NY 10001</p>
            </div>
            
            <div className="bg-zinc-900 p-6 flex flex-col items-center text-center">
              <Phone size={24} className="mb-4" />
              <h3 className="text-xl font-light mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <p className="text-gray-400">Mon-Fri: 9am - 6pm EST</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-zinc-900 p-6">
                  <h3 className="text-xl font-light mb-2">Thank You!</h3>
                  <p className="text-gray-400">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-900 px-4 py-3 text-white focus:outline-none"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-900 px-4 py-3 text-white focus:outline-none"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-900 px-4 py-3 text-white focus:outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="Customer Service">Customer Service</option>
                      <option value="Order Inquiry">Order Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-zinc-900 px-4 py-3 text-white focus:outline-none"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-2xl font-light mb-6">Visit Our Store</h2>
              <div className="bg-zinc-900 h-[400px] mb-6">
                {/* In a real app, you would embed a Google Map here */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400">Map would be displayed here</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-light mb-3">Store Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-400">
                  <div>Monday - Friday</div>
                  <div>10:00 AM - 8:00 PM</div>
                  <div>Saturday</div>
                  <div>10:00 AM - 6:00 PM</div>
                  <div>Sunday</div>
                  <div>12:00 PM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;