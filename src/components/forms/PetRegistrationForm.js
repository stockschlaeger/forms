import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PetRegistrationForm() {
    const [formData, setFormData] = useState({
        ownerName: '',
        ownerEmail: '',
        petName: '',
        petType: '',
        petBreed: '',
        petAge: '',
        specialNeeds: '',
        vaccinations: false,
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Pet Registration Data:', formData);
        alert('Haustier erfolgreich für die Betreuung registriert! (Siehe Konsole für Details)');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-md mx-auto">
                {/* Back to Home Link */}
                <div className="mb-6">
                    <Link
                        to="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        ← Zurück zur Übersicht
                    </Link>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Haustier-Registrierung
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-1">
                                Besitzername *
                            </label>
                            <input
                                type="text"
                                id="ownerName"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Ihr vollständiger Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="ownerEmail" className="block text-sm font-medium text-gray-700 mb-1">
                                E-Mail des Besitzers *
                            </label>
                            <input
                                type="email"
                                id="ownerEmail"
                                name="ownerEmail"
                                value={formData.ownerEmail}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="ihre.email@beispiel.de"
                            />
                        </div>

                        <div>
                            <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-1">
                                Name des Haustiers *
                            </label>
                            <input
                                type="text"
                                id="petName"
                                name="petName"
                                value={formData.petName}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Bello, Luna, etc."
                            />
                        </div>

                        <div>
                            <label htmlFor="petType" className="block text-sm font-medium text-gray-700 mb-1">
                                Tierart *
                            </label>
                            <select
                                id="petType"
                                name="petType"
                                value={formData.petType}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Bitte wählen</option>
                                <option value="hund">Hund</option>
                                <option value="katze">Katze</option>
                                <option value="vogel">Vogel</option>
                                <option value="kleintier">Kleintier</option>
                                <option value="anderes">Anderes</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="petBreed" className="block text-sm font-medium text-gray-700 mb-1">
                                Rasse
                            </label>
                            <input
                                type="text"
                                id="petBreed"
                                name="petBreed"
                                value={formData.petBreed}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="z.B. Labrador, Perserkatze"
                            />
                        </div>

                        <div>
                            <label htmlFor="petAge" className="block text-sm font-medium text-gray-700 mb-1">
                                Alter des Haustiers
                            </label>
                            <input
                                type="number"
                                id="petAge"
                                name="petAge"
                                value={formData.petAge}
                                onChange={handleChange}
                                min="0"
                                max="50"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="3"
                            />
                        </div>

                        <div>
                            <label htmlFor="specialNeeds" className="block text-sm font-medium text-gray-700 mb-1">
                                Besondere Bedürfnisse
                            </label>
                            <textarea
                                id="specialNeeds"
                                name="specialNeeds"
                                value={formData.specialNeeds}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Allergien, Medikamente, etc."
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="vaccinations"
                                name="vaccinations"
                                checked={formData.vaccinations}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="vaccinations" className="ml-2 block text-sm text-gray-700">
                                Impfungen auf dem neuesten Stand
                            </label>
                        </div>

                        <div>
                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                                Zusätzliche Notizen
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Alles, was wir wissen sollten..."
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Registrieren
                        </button>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded-md">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Aktuelle Eingaben:</h3>
                        <pre className="text-xs text-gray-600 overflow-auto">
                            {JSON.stringify(formData, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
