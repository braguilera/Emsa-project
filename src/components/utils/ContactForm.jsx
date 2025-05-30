import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactForm = ({ onClose }) => {
  const { t } = useTranslation('form');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
    
      const response = await fetch("https://formspree.io/f/xeogwley", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, phone, message})
      })

      if (response.ok){
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
      } else {
        setError('Error!');
      }
    } catch (error) {
      setError('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
      console.error('Error al enviar el formulario:', err);
    } finally {
      setLoading(false);
    }
  };

  if (showSuccessPopup) {
    return (
      <div className="bg-secondary rounded-3xl p-8 text-slate-50 relative max-w-xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-primary rounded-full p-2">
            <CheckCircle className="h-6 w-6 " />
          </div>
        </div>
        
        <h2 className="text-xl uppercase font-bold mb-3">
          {t("sendTitle")}
        </h2>
        
        <p className="text-center">
          {t("sendText")}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-300 rounded-3xl p-8 relative max-w-xl mx-auto">
      <button 
        onClick={onClose} 
        className="absolute cursor-pointer top-4 right-4 bg-black rounded-full p-1"
      >
        <X className="h-5 w-5 text-white" />
      </button>

      <h2 className="text-lg uppercase font-bold tracking-wider mb-6 text-indigo-900">
          {t("title")}
      </h2>

      <form onSubmit={handleSubmit} className=" space-y-4">
        <div>
          <input
            type="text"
            name="name"
            maxLength={50}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("name")}
            className="w-full p-3 bg-gray-100 rounded-md placeholder:text-secondary text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            maxLength={250}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="w-full p-3 placeholder:text-secondary text-secondary  bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <input
            type="number"
            name="phone"
            maxLength={20}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t("phone")}
            className="w-full p-3 placeholder:text-secondary text-secondary  bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("query")}
            rows="4"
            className="w-full p-3 placeholder:text-secondary text-secondary  bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-secondary cursor-pointer text-white py-2 px-8 rounded-md uppercase font-medium hover:bg-primary transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Enviando...' : t("button")}
          </button>
        </div>
        
        {error && (
          <div className="text-red-600 font-medium">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;