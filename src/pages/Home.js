import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import Background from '../components/Background';
import Header from '../components/Header';


export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 6);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        { icon: "📅", title: "Rozvrh", color: "linear-gradient(135deg, #3b82f6, #06b6d4)" },
        { icon: "✅", title: "Úlohy", color: "linear-gradient(135deg, #10b981, #059669)" },
        { icon: "📚", title: "Materiály", color: "linear-gradient(135deg, #8b5cf6, #ec4899)" },
        { icon: "👥", title: "Kolaborácia na zadaniach", color: "linear-gradient(135deg, #f97316, #ef4444)" },
        { icon: "📊", title: "Progress tracker", color: "linear-gradient(135deg, #eab308, #f97316)" },
        { icon: "🤖", title: "AI buddy", color: "linear-gradient(135deg, #6366f1, #8b5cf6)" }
    ];

    const benefits = [
        { icon: "⚡", title: "Rýchlejšie štúdium", desc: "Automatizácia opakujúcich sa úloh" },
        { icon: "🎯", title: "Lepšie výsledky", desc: "Sledovanie pokroku v reálnom čase" },
        { icon: "⭐", title: "Jednoduchosť", desc: "Všetko na jednom mieste" }
    ];

    return (
        <div className="page-container">
            {/* Background Component */}
            <Background />
            <Header/>

            
            <div className="content">
                <div className={isVisible ? 'animate-fadeInUp' : ''}>
                    <div className="brand-name">
                        EduSync
                    </div>
                </div>
                
                <div>
                    <h2 className="subtitle">Study with ease</h2>
                    
                    <div>
                        <p className="description">
                            EduSync je moderná platforma pre študentov, ktorá zjednodušuje organizáciu štúdia a spoluprácu so spolužiakmi. Umožňuje zapisovať a spravovať úlohy, plánovať rozvrh s pripomienkami, kolaborovať na úlohách a projektoch a zdieľať študijné materiály, ako sú poznámky, prezentácie či dokumenty. EduSync spája všetky nástroje, ktoré študent potrebuje, do jednej prehľadnej platformy, aby štúdium bolo efektívnejšie a spolupráca jednoduchšia.
                        </p>
                    </div>
                </div>
            </div>

            {/* Enhanced feature grid */}
            <div 
                style={{ padding: '0 20px', marginBottom: '4rem' }}
                onMouseLeave={() => setActiveFeature(-1)}
            >
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className={`feature-card ${index === activeFeature ? 'active' : ''}`}
                            onMouseEnter={() => setActiveFeature(index)}
                        >
                            <div className={`feature-icon ${index === activeFeature ? 'active' : ''}`}>
                                {feature.icon}
                            </div>
                            <h3 className={`feature-title ${index === activeFeature ? 'active' : ''}`}>
                                {feature.title}
                            </h3>
                            {index === activeFeature && (
                                <div className="feature-status">
                                    ✨ Aktívna funkcia
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits section */}
            <div className="benefits-container">
                <h3 className="benefits-title">
                    Prečo EduSync?
                </h3>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card hover-stats">
                            <div className="benefit-icon">
                                {benefit.icon}
                            </div>
                            <h4 className="benefit-title">
                                {benefit.title}
                            </h4>
                            <p className="benefit-description">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced CTA section */}
            <div className="cta-container">
                <div className="cta-box">
                    <h3 className="cta-title">
                        Pripoj sa k EduSync a sprav svoje štúdium efektívne a jednoducho
                    </h3>
                    <p className="cta-description">
                        Sleduj svoje úlohy, zdieľaj materiály a spolupracuj s kamarátmi bez zbytočného stresu.
                    </p>
                    
                    <div className="button-container">
                        <a href="/Register" className="btn-primary hover-scale">
                            Registrovať sa →
                        </a>
                        <a href="/Login" className="btn-secondary hover-secondary">
                            Prihlásiť sa
                        </a>
                    </div>
                </div>

                {/* Social proof */}
                <div className="stats-container mb-xl">
                    <div className="stats-card hover-stats">
                        <div className="stats-number">1</div>
                        <div className="stats-label">Aktívnych študentov</div>
                    </div>
                    <div className="stats-card hover-stats">
                        <div className="stats-number">1</div>
                        <div className="stats-label">Škôl</div>
                    </div>
                    <div className="stats-card hover-stats">
                        <div className="stats-number">99%</div>
                        <div className="stats-label">Spokojnosť</div>
                    </div>
                </div>
            </div>

            {/* Floating AI assistant */}
            <div className="floating-assistant hover-assistant">
                <span className="floating-assistant-icon">🤖</span>
            </div>
        </div>
    );
}