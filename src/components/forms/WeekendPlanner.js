import React, { useState } from 'react';

const WeekendPlanner = () => {
  const [formData, setFormData] = useState({
    saturday: {
      morning: '',
      afternoon: '',
      evening: ''
    },
    sunday: {
      morning: '',
      afternoon: '',
      evening: ''
    },
    budget: '',
    weather: '',
    priority: 'entspannung',
    notes: ''
  });

  const [savedPlans, setSavedPlans] = useState([]);

  const handleInputChange = (day, timeSlot, value) => {
    setFormData(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [timeSlot]: value
      }
    }));
  };

  const handleGeneralChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    const newPlan = {
      ...formData,
      id: Date.now(),
      created: new Date().toLocaleDateString('de-DE')
    };
    setSavedPlans(prev => [newPlan, ...prev]);
    
    // Formular zurücksetzen
    setFormData({
      saturday: { morning: '', afternoon: '', evening: '' },
      sunday: { morning: '', afternoon: '', evening: '' },
      budget: '',
      weather: '',
      priority: 'entspannung',
      notes: ''
    });
  };

  const deletePlan = (id) => {
    setSavedPlans(prev => prev.filter(plan => plan.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          🌟 Wochenendplanung
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formular */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Neuen Plan erstellen</h2>
            
            <div className="space-y-6">
              {/* Samstag */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-blue-800 mb-3 flex items-center">
                  📅 Samstag
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Vormittag (9-12 Uhr)
                    </label>
                    <input
                      type="text"
                      value={formData.saturday.morning}
                      onChange={(e) => handleInputChange('saturday', 'morning', e.target.value)}
                      placeholder="z.B. Frühstück im Café"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Nachmittag (12-18 Uhr)
                    </label>
                    <input
                      type="text"
                      value={formData.saturday.afternoon}
                      onChange={(e) => handleInputChange('saturday', 'afternoon', e.target.value)}
                      placeholder="z.B. Spaziergang im Park"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Abend (18+ Uhr)
                    </label>
                    <input
                      type="text"
                      value={formData.saturday.evening}
                      onChange={(e) => handleInputChange('saturday', 'evening', e.target.value)}
                      placeholder="z.B. Kino oder Restaurant"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Sonntag */}
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-green-800 mb-3 flex items-center">
                  📅 Sonntag
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Vormittag (9-12 Uhr)
                    </label>
                    <input
                      type="text"
                      value={formData.sunday.morning}
                      onChange={(e) => handleInputChange('sunday', 'morning', e.target.value)}
                      placeholder="z.B. Ausschlafen und lesen"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Nachmittag (12-18 Uhr)
                    </label>
                    <input
                      type="text"
                      value={formData.sunday.afternoon}
                      onChange={(e) => handleInputChange('sunday', 'afternoon', e.target.value)}
                      placeholder="z.B. Familie besuchen"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Abend (18+ Uhr)
                    </label>
                    <input
                      type="text"
                      value={formData.sunday.evening}
                      onChange={(e) => handleInputChange('sunday', 'evening', e.target.value)}
                      placeholder="z.B. Woche vorbereiten"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Zusätzliche Optionen */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    💰 Budget (€)
                  </label>
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) => handleGeneralChange('budget', e.target.value)}
                    placeholder="z.B. 100"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    🌤️ Wetterplan
                  </label>
                  <select
                    value={formData.weather}
                    onChange={(e) => handleGeneralChange('weather', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Wetter berücksichtigen...</option>
                    <option value="sonnig">☀️ Sonnig - Outdoor Aktivitäten</option>
                    <option value="regnerisch">🌧️ Regnerisch - Indoor Aktivitäten</option>
                    <option value="bewölkt">☁️ Bewölkt - Flexibel</option>
                    <option value="egal">🤷‍♀️ Egal - Wetterunabhängig</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  🎯 Priorität
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) => handleGeneralChange('priority', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="entspannung">😌 Entspannung & Erholung</option>
                  <option value="abenteuer">🚀 Abenteuer & Neues erleben</option>
                  <option value="sozial">👥 Zeit mit Familie/Freunden</option>
                  <option value="produktiv">⚡ Produktiv & organisiert</option>
                  <option value="sport">🏃‍♀️ Sport & Fitness</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  📝 Notizen
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleGeneralChange('notes', e.target.value)}
                  placeholder="Besondere Wünsche, Ideen oder Erinnerungen..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                ✨ Wochenendplan speichern
              </button>
            </div>
          </div>

          {/* Gespeicherte Pläne */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Gespeicherte Pläne</h2>
            
            {savedPlans.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-2">📋</div>
                <p>Noch keine Pläne gespeichert.</p>
                <p className="text-sm">Erstelle deinen ersten Wochenendplan!</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {savedPlans.map((plan) => (
                  <div key={plan.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm text-gray-500">Plan vom {plan.created}</span>
                      <button
                        onClick={() => deletePlan(plan.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        ❌
                      </button>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-blue-700 mb-1">Samstag</h4>
                          {plan.saturday.morning && <p><span className="font-medium">Vormittag:</span> {plan.saturday.morning}</p>}
                          {plan.saturday.afternoon && <p><span className="font-medium">Nachmittag:</span> {plan.saturday.afternoon}</p>}
                          {plan.saturday.evening && <p><span className="font-medium">Abend:</span> {plan.saturday.evening}</p>}
                        </div>
                        <div>
                          <h4 className="font-medium text-green-700 mb-1">Sonntag</h4>
                          {plan.sunday.morning && <p><span className="font-medium">Vormittag:</span> {plan.sunday.morning}</p>}
                          {plan.sunday.afternoon && <p><span className="font-medium">Nachmittag:</span> {plan.sunday.afternoon}</p>}
                          {plan.sunday.evening && <p><span className="font-medium">Abend:</span> {plan.sunday.evening}</p>}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                        {plan.budget && <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">💰 {plan.budget}€</span>}
                        {plan.weather && <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">🌤️ {plan.weather}</span>}
                        {plan.priority && <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">🎯 {plan.priority}</span>}
                      </div>
                      
                      {plan.notes && (
                        <div className="mt-2 pt-2 border-t border-gray-100">
                          <p className="text-gray-600 italic">{plan.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekendPlanner;