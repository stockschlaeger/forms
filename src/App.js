import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import forms from "./utils/loadForms";
import "./index.css"; // sicherstellen, dass es eingebunden ist

function App() {
    return (
        <>
            <nav className="navbar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/forms">Forms</Link>
            </nav>

            <main className="main-container">
                <Routes>
                    <Route
                        path="/"
                        element={<h1 className="page-title">Willkommen</h1>}
                    />

                    <Route
                        path="/forms"
                        element={
                            <section className="forms-section">
                                <h2 className="section-title">Verfügbare Formulare</h2>
                                <div className="forms-grid">
                                    {Object.keys(forms).map((formName) => (
                                        <Link
                                            key={formName}
                                            to={`/forms/${formName}`}
                                            className="form-card"
                                        >
                                            {formName}
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        }
                    />

                    {Object.entries(forms).map(([name, Component]) => (
                        <Route key={name} path={`/forms/${name}`} element={<Component />} />
                    ))}
                </Routes>
            </main>
        </>
    );
}

export default App;
