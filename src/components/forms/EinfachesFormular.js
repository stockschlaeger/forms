import React, { useState } from 'react';

const EinfachesFormular = () => {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    geburtsdatum: '',
    adresse: '',
    stadt: '',
    postleitzahl: '',
    beruf: '',
    nachricht: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Fehler löschen wenn der Benutzer anfängt zu tippen
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.vorname.trim()) {
      newErrors.vorname = 'Vorname ist erforderlich';
    }

    if (!formData.nachname.trim()) {
      newErrors.nachname = 'Nachname ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-Mail-Format ist ungültig';
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefonnummer ist erforderlich';
    }

    if (!formData.geburtsdatum) {
      newErrors.geburtsdatum = 'Geburtsdatum ist erforderlich';
    }

    if (!formData.postleitzahl.trim()) {
      newErrors.postleitzahl = 'Postleitzahl ist erforderlich';
    } else if (!/^\d{5}$/.test(formData.postleitzahl)) {
      newErrors.postleitzahl = 'Postleitzahl muss 5 Ziffern haben';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulardaten:', formData);
      setIsSubmitted(true);
      
      // Formular nach 3 Sekunden zurücksetzen
      setTimeout(() => {
        setIsSubmitted(false);
        resetForm();
      }, 3000);
    }
  };

  const resetForm = () => {
    setFormData({
      vorname: '',
      nachname: '',
      email: '',
      telefon: '',
      geburtsdatum: '',
      adresse: '',
      stadt: '',
      postleitzahl: '',
      beruf: '',
      nachricht: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Erfolgreich gesendet!</h2>
          <p className="text-gray-600 mb-4">Vielen Dank für Ihre Angaben. Das Formular wird automatisch zurückgesetzt.</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Kontaktformular</h1>
        <p className="text-gray-600">Bitte füllen Sie alle Felder aus, um fortzufahren.</p>
      </div>

      <div className="space-y-6">
        {/* Name Felder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vorname *
            </label>
            <input
              type="text"
              name="vorname"
              value={formData.vorname}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.vorname 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="Max"
            />
            {errors.vorname && (
              <p className="mt-1 text-sm text-red-600">{errors.vorname}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nachname *
            </label>
            <input
              type="text"
              name="nachname"
              value={formData.nachname}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.nachname 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="Mustermann"
            />
            {errors.nachname && (
              <p className="mt-1 text-sm text-red-600">{errors.nachname}</p>
            )}
          </div>
        </div>

        {/* E-Mail */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-Mail-Adresse *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
              errors.email 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="max.mustermann@email.de"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Telefon und Geburtsdatum */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefonnummer *
            </label>
            <input
              type="tel"
              name="telefon"
              value={formData.telefon}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.telefon 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="+49 123 456789"
            />
            {errors.telefon && (
              <p className="mt-1 text-sm text-red-600">{errors.telefon}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Geburtsdatum *
            </label>
            <input
              type="date"
              name="geburtsdatum"
              value={formData.geburtsdatum}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.geburtsdatum 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.geburtsdatum && (
              <p className="mt-1 text-sm text-red-600">{errors.geburtsdatum}</p>
            )}
          </div>
        </div>

        {/* Adresse */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Straße und Hausnummer
          </label>
          <input
            type="text"
            name="adresse"
            value={formData.adresse}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            placeholder="Musterstraße 123"
          />
        </div>

        {/* Stadt und PLZ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stadt
            </label>
            <input
              type="text"
              name="stadt"
              value={formData.stadt}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Berlin"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Postleitzahl *
            </label>
            <input
              type="text"
              name="postleitzahl"
              value={formData.postleitzahl}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.postleitzahl 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="12345"
              maxLength="5"
            />
            {errors.postleitzahl && (
              <p className="mt-1 text-sm text-red-600">{errors.postleitzahl}</p>
            )}
          </div>
        </div>

        {/* Beruf */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Beruf
          </label>
          <input
            type="text"
            name="beruf"
            value={formData.beruf}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            placeholder="Software-Entwickler"
          />
        </div>

        {/* Nachricht */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nachricht
          </label>
          <textarea
            name="nachricht"
            value={formData.nachricht}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-vertical"
            placeholder="Ihre Nachricht oder zusätzliche Informationen..."
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
          >
            Zurücksetzen
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex-1 sm:flex-none"
          >
            Absenden
          </button>
        </div>

        {/* Hinweis */}
        <div className="text-sm text-gray-500 border-t pt-4">
          <p>* Pflichtfelder müssen ausgefüllt werden</p>
        </div>
      </div>

      {/* Debug-Ansicht */}
      <details className="mt-8 p-4 bg-gray-50 rounded-lg">
        <summary className="cursor-pointer font-medium text-gray-700">
          Formulardaten (Debug)
        </summary>
        <pre className="mt-2 text-xs overflow-auto bg-white p-3 rounded border">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </details>
    </div>
  );
};

export default EinfachesFormular;