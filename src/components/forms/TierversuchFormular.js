import React, { useState } from 'react';

const TierversuchFormular = () => {
  const [formData, setFormData] = useState({
    antragsteller: '',
    institution: '',
    projektTitle: '',
    tierart: '',
    anzahlTiere: '',
    versuchsDauer: '',
    zweck: '',
    belastungsgrad: '',
    alternativen: '',
    rechtfertigung: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log('Antragsdaten:', formData);
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#FFFFFF',
      minHeight: '100vh'
    },
    header: {
      backgroundColor: '#2A2623',
      color: '#FFFFFF',
      padding: '20px',
      textAlign: 'center',
      marginBottom: '30px',
      borderRadius: '8px'
    },
    title: {
      margin: '0',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    subtitle: {
      margin: '10px 0 0 0',
      fontSize: '16px',
      opacity: '0.9'
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    fieldGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontWeight: 'bold',
      color: '#2A2623',
      fontSize: '14px'
    },
    input: {
      padding: '12px',
      border: `2px solid #2A2623`,
      borderRadius: '4px',
      fontSize: '16px',
      transition: 'border-color 0.3s ease',
      outline: 'none'
    },
    textarea: {
      padding: '12px',
      border: `2px solid #2A2623`,
      borderRadius: '4px',
      fontSize: '16px',
      minHeight: '100px',
      resize: 'vertical',
      fontFamily: 'Arial, sans-serif',
      outline: 'none'
    },
    select: {
      padding: '12px',
      border: `2px solid #2A2623`,
      borderRadius: '4px',
      fontSize: '16px',
      backgroundColor: '#FFFFFF',
      outline: 'none'
    },
    button: {
      backgroundColor: '#FFFC00',
      color: '#2A2623',
      border: 'none',
      padding: '15px 30px',
      fontSize: '18px',
      fontWeight: 'bold',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '20px'
    },
    successMessage: {
      backgroundColor: '#FFFC00',
      color: '#2A2623',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '18px'
    },
    required: {
      color: '#d32f2f'
    }
  };

  if (submitted) {
    return (
      <div style={styles.container}>
        <div style={styles.successMessage}>
          ✓ Ihr Tierversuchsantrag wurde erfolgreich eingereicht!
          <br />
          <div style={{ fontWeight: 'normal', marginTop: '10px' }}>
            Sie erhalten in Kürze eine Bestätigung per E-Mail.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Antrag auf Genehmigung von Tierversuchen</h1>
        <p style={styles.subtitle}>Baden-Württemberg</p>
      </header>

      <div style={styles.formContainer}>
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            1. Antragsteller/in <span style={styles.required}>*</span>
          </label>
          <input
            style={styles.input}
            type="text"
            name="antragsteller"
            value={formData.antragsteller}
            onChange={handleChange}
            placeholder="Vor- und Nachname"
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            2. Institution/Einrichtung <span style={styles.required}>*</span>
          </label>
          <input
            style={styles.input}
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            placeholder="Name der Forschungseinrichtung"
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            3. Projekttitel <span style={styles.required}>*</span>
          </label>
          <input
            style={styles.input}
            type="text"
            name="projektTitle"
            value={formData.projektTitle}
            onChange={handleChange}
            placeholder="Kurzer, aussagekräftiger Titel des Forschungsprojekts"
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            4. Tierart <span style={styles.required}>*</span>
          </label>
          <select
            style={styles.select}
            name="tierart"
            value={formData.tierart}
            onChange={handleChange}
          >
            <option value="">Bitte wählen...</option>
            <option value="maus">Maus</option>
            <option value="ratte">Ratte</option>
            <option value="kaninchen">Kaninchen</option>
            <option value="schwein">Schwein</option>
            <option value="primaten">Primaten</option>
            <option value="andere">Andere</option>
          </select>
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            5. Anzahl der Tiere <span style={styles.required}>*</span>
          </label>
          <input
            style={styles.input}
            type="number"
            name="anzahlTiere"
            value={formData.anzahlTiere}
            onChange={handleChange}
            placeholder="Geschätzte Gesamtzahl"
            min="1"
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            6. Versuchsdauer <span style={styles.required}>*</span>
          </label>
          <input
            style={styles.input}
            type="text"
            name="versuchsDauer"
            value={formData.versuchsDauer}
            onChange={handleChange}
            placeholder="z.B. 6 Monate, 2 Jahre"
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            7. Zweck des Tierversuchs <span style={styles.required}>*</span>
          </label>
          <select
            style={styles.select}
            name="zweck"
            value={formData.zweck}
            onChange={handleChange}
          >
            <option value="">Bitte wählen...</option>
            <option value="grundlagenforschung">Grundlagenforschung</option>
            <option value="translationale-forschung">Translationale/angewandte Forschung</option>
            <option value="regulatorische-studien">Regulatorische Studien</option>
            <option value="schutz-umwelt">Schutz der Umwelt</option>
            <option value="erhaltung-arten">Erhaltung der Arten</option>
            <option value="ausbildung">Ausbildung</option>
          </select>
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            8. Belastungsgrad <span style={styles.required}>*</span>
          </label>
          <select
            style={styles.select}
            name="belastungsgrad"
            value={formData.belastungsgrad}
            onChange={handleChange}
          >
            <option value="">Bitte wählen...</option>
            <option value="keine-wiederherstellung">Keine Wiederherstellung der Lebensfunktion</option>
            <option value="gering">Gering</option>
            <option value="mittel">Mittel</option>
            <option value="schwer">Schwer</option>
          </select>
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            9. Ersatz- und Ergänzungsmethoden <span style={styles.required}>*</span>
          </label>
          <textarea
            style={styles.textarea}
            name="alternativen"
            value={formData.alternativen}
            onChange={handleChange}
            placeholder="Beschreiben Sie, welche Alternativmethoden geprüft wurden und warum diese nicht ausreichen..."
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            10. Wissenschaftliche Rechtfertigung <span style={styles.required}>*</span>
          </label>
          <textarea
            style={styles.textarea}
            name="rechtfertigung"
            value={formData.rechtfertigung}
            onChange={handleChange}
            placeholder="Kurze Darstellung der wissenschaftlichen Fragestellung und erwarteten Erkenntnisse..."
          />
        </div>

        <button
          style={styles.button}
          onClick={handleSubmit}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#e6e300';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#FFFC00';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Antrag einreichen
        </button>
      </div>
    </div>
  );
};

export default TierversuchFormular;