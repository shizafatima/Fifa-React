import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div>
            {/* hero section */}
            <section className="hero">
                <div className="hero-image">
                    <img src="src\assets\hero-banner.webp" alt="FIFA Highlight" />
                </div>

                <div className="hero-content">
                    <h1>FIFA World Cup™ 2025 is Coming</h1>
                    <p>Get the latest updates on teams, cities, and match schedules.</p>
                    <button className="hero-button">Explore Tournaments</button>
                </div>
            </section>
        </div>

    );
}

export default HeroSection;
