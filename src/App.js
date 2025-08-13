import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ContactForm } from './components/forms';

function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Company Forms
                    </h1>
                    <p className="text-lg text-gray-600">
                        Access all company forms from one central location
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FormCard
                        title="Contact Form"
                        description="General contact and inquiry form"
                        link="/contact"
                        icon="✉️"
                    />

                    {/* Add more forms here */}
                    <FormCard
                        title="Feedback Form"
                        description="Share your feedback with us"
                        link="/feedback"
                        icon="💭"
                        comingSoon
                    />

                    <FormCard
                        title="Registration Form"
                        description="Register for events and services"
                        link="/registration"
                        icon="📝"
                        comingSoon
                    />
                </div>
            </div>
        </div>
    );
}

function FormCard({ title, description, link, icon, comingSoon }) {
    const CardContent = () => (
        <div className={`bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 ${comingSoon ? 'opacity-60' : 'hover:shadow-lg cursor-pointer'}`}>
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            {comingSoon ? (
                <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                    Coming Soon
                </span>
            ) : (
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Available
                </span>
            )}
        </div>
    );

    return comingSoon ? (
        <CardContent />
    ) : (
        <Link to={link}>
            <CardContent />
        </Link>
    );
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactForm />} />
                {/* Add more form routes here */}
                {/* <Route path="/feedback" element={<FeedbackForm />} /> */}
                {/* <Route path="/registration" element={<RegistrationForm />} /> */}
            </Routes>
        </div>
    );
}

export default App;