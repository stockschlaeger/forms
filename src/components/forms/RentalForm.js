import React, { useState } from 'react';

const RentalForm = () => {
  const [formData, setFormData] = useState({
    mieterName: '',
    mieterEmail: '',
    mieterTelefon: '',
    objektAdresse: '',
    objektTyp: '',
    zimmeranzahl: '',
    flaeche: '',
    kaltmiete: '',
    nebenkosten: '',
    kaution: '',
    mietbeginn: '',
    mietende: '',
    besonderheiten: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.mieterName.trim()) newErrors.mieterName = 'Name ist erforderlich';
    if (!formData.mieterEmail.trim()) newErrors.mieterEmail = 'E-Mail ist erforderlich';
    if (!formData.objektAdresse.trim()) newErrors.objektAdresse = 'Adresse ist erforderlich';
    if (!formData.kaltmiete.trim()) newErrors.kaltmiete = 'Kaltmiete ist erforderlich';
    if (!formData.mietbeginn) newErrors.mietbeginn = 'Mietbeginn ist erforderlich';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.mieterEmail && !emailRegex.test(formData.mieterEmail)) {
      newErrors.mieterEmail = 'Ungültige E-Mail-Adresse';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Vermietung erfasst:', formData);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          mieterName: '',
          mieterEmail: '',
          mieterTelefon: '',
          objektAdresse: '',
          objektTyp: '',
          zimmeranzahl: '',
          flaeche: '',
          kaltmiete: '',
          nebenkosten: '',
          kaution: '',
          mietbeginn: '',
          mietende: '',
          besonderheiten: ''
        });
      }, 2000);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box'
  };

  const errorStyle = {
    color: '#e74c3c',
    fontSize: '12px',
    marginTop: '4px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: '500',
    color: '#333'
  };

  const fieldsetStyle = {
    border: '1px solid #eee',
    borderRadius: '4px',
    padding: '20px',
    marginBottom: '20px'
  };

  const legendStyle = {
    padding: '0 10px',
    fontWeight: 'bold',
    color: '#555'
  };

  if (isSubmitted) {
    return (
      <div style={{
        maxWidth: '600px',
        margin: '20px auto',
        padding: '40px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <div style={{
          color: '#27ae60',
          fontSize: '48px',
          marginBottom: '16px'
        }}>✓</div>
        <h2 style={{ color: '#27ae60', marginBottom: '8px' }}>Erfolgreich gespeichert!</h2>
        <p style={{ color: '#666' }}>Die Vermietung wurde erfolgreich erfasst.</p>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '30px',
        color: '#333',
        fontSize: '24px'
      }}>
        Vermietung erfassen
      </h1>

      {/* Mieter-Informationen */}
      <div style={fieldsetStyle}>
        <div style={legendStyle}>Mieter-Informationen</div>
        
        <div style={{ marginBottom: '16px', marginTop: '16px' }}>
          <label style={labelStyle}>Name *</label>
          <input
            type="text"
            name="mieterName"
            value={formData.mieterName}
            onChange={handleChange}
            style={{
              ...inputStyle,
              borderColor: errors.mieterName ? '#e74c3c' : '#ddd'
            }}
          />
          {errors.mieterName && <div style={errorStyle}>{errors.mieterName}</div>}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>E-Mail *</label>
          <input
            type="email"
            name="mieterEmail"
            value={formData.mieterEmail}
            onChange={handleChange}
            style={{
              ...inputStyle,
              borderColor: errors.mieterEmail ? '#e74c3c' : '#ddd'
            }}
          />
          {errors.mieterEmail && <div style={errorStyle}>{errors.mieterEmail}</div>}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Telefon</label>
          <input
            type="tel"
            name="mieterTelefon"
            value={formData.mieterTelefon}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Objekt-Informationen */}
      <div style={fieldsetStyle}>
        <div style={legendStyle}>Objekt-Informationen</div>

        <div style={{ marginBottom: '16px', marginTop: '16px' }}>
          <label style={labelStyle}>Adresse *</label>
          <input
            type="text"
            name="objektAdresse"
            value={formData.objektAdresse}
            onChange={handleChange}
            style={{
              ...inputStyle,
              borderColor: errors.objektAdresse ? '#e74c3c' : '#ddd'
            }}
          />
          {errors.objektAdresse && <div style={errorStyle}>{errors.objektAdresse}</div>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={labelStyle}>Objekttyp</label>
            <select
              name="objektTyp"
              value={formData.objektTyp}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Bitte wählen</option>
              <option value="wohnung">Wohnung</option>
              <option value="haus">Haus</option>
              <option value="studio">Studio</option>
              <option value="zimmer">Zimmer</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Zimmeranzahl</label>
            <input
              type="number"
              name="zimmeranzahl"
              value={formData.zimmeranzahl}
              onChange={handleChange}
              style={inputStyle}
              min="0.5"
              step="0.5"
            />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Wohnfläche (m²)</label>
          <input
            type="number"
            name="flaeche"
            value={formData.flaeche}
            onChange={handleChange}
            style={inputStyle}
            min="0"
          />
        </div>
      </div>

      {/* Finanzielle Informationen */}
      <div style={fieldsetStyle}>
        <div style={legendStyle}>Finanzielle Informationen</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px', marginTop: '16px' }}>
          <div>
            <label style={labelStyle}>Kaltmiete (€) *</label>
            <input
              type="number"
              name="kaltmiete"
              value={formData.kaltmiete}
              onChange={handleChange}
              style={{
                ...inputStyle,
                borderColor: errors.kaltmiete ? '#e74c3c' : '#ddd'
              }}
              min="0"
              step="0.01"
            />
            {errors.kaltmiete && <div style={errorStyle}>{errors.kaltmiete}</div>}
          </div>

          <div>
            <label style={labelStyle}>Nebenkosten (€)</label>
            <input
              type="number"
              name="nebenkosten"
              value={formData.nebenkosten}
              onChange={handleChange}
              style={inputStyle}
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label style={labelStyle}>Kaution (€)</label>
            <input
              type="number"
              name="kaution"
              value={formData.kaution}
              onChange={handleChange}
              style={inputStyle}
              min="0"
              step="0.01"
            />
          </div>
        </div>
      </div>

      {/* Mietzeit */}
      <div style={fieldsetStyle}>
        <div style={legendStyle}>Mietzeit</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px', marginTop: '16px' }}>
          <div>
            <label style={labelStyle}>Mietbeginn *</label>
            <input
              type="date"
              name="mietbeginn"
              value={formData.mietbeginn}
              onChange={handleChange}
              style={{
                ...inputStyle,
                borderColor: errors.mietbeginn ? '#e74c3c' : '#ddd'
              }}
            />
            {errors.mietbeginn && <div style={errorStyle}>{errors.mietbeginn}</div>}
          </div>

          <div>
            <label style={labelStyle}>Mietende</label>
            <input
              type="date"
              name="mietende"
              value={formData.mietende}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Besonderheiten */}
      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Besonderheiten / Anmerkungen</label>
        <textarea
          name="besonderheiten"
          value={formData.besonderheiten}
          onChange={handleChange}
          rows="3"
          style={{
            ...inputStyle,
            resize: 'vertical',
            fontFamily: 'inherit'
          }}
          placeholder="Besondere Vereinbarungen, Einrichtung, etc."
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          width: '100%',
          padding: '14px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
      >
        Vermietung erfassen
      </button>
    </div>
  );
};

export default RentalForm;