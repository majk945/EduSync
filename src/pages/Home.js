import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BrandName from '../assets/brand-name.png';

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
        <>
            

            <div className="min-h-screen" style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #1e293b 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated background particles */}
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: '2px',
                                height: '2px',
                                background: 'rgba(255, 255, 255, 0.3)',
                                borderRadius: '50%',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>

                <Header />
                
                <div className="content container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className={`contentImg ${isVisible ? 'animate-fadeInUp' : ''}`}>
                        <img src={BrandName} alt="brand name" className="animate-float brand-glow" />
                    </div>
                    
                    <div>
                        <h2 className="h2Brand" style={{ 
                            fontSize: '2.5rem', 
                            marginBottom: '2rem',
                            background: 'linear-gradient(135deg, #ffffff, #5eead4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Study with ease</h2>
                        
                        <div className="container">
                            <h5 className="text-light" style={{ 
                                fontSize: '1.2rem', 
                                lineHeight: '1.6', 
                                color: '#cbd5e1',
                                maxWidth: '800px',
                                margin: '0 auto 3rem auto'
                            }}>
                                EduSync je moderná platforma pre študentov, ktorá zjednodušuje organizáciu štúdia a spoluprácu so spolužiakmi. Umožňuje zapisovať a spravovať úlohy, plánovať rozvrh s pripomienkami, kolaborovať na úlohách a projektoch a zdieľať študijné materiály, ako sú poznámky, prezentácie či dokumenty. EduSync spája všetky nástroje, ktoré študent potrebuje, do jednej prehľadnej platformy, aby štúdium bolo efektívnejšie a spolupráca jednoduchšia.
                            </h5>
                        </div>
                    </div>
                </div>

                {/* Enhanced feature grid */}
                <div className="container" style={{ marginBottom: '4rem' }}>
                    <div className="row g-4">
                        {features.map((feature, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <div 
                                    className={`feature-card ${index === activeFeature ? 'active' : ''}`}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: index === activeFeature ? '2px solid #5eead4' : '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '16px',
                                        padding: '2rem',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        minHeight: '120px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onMouseEnter={() => setActiveFeature(index)}
                                >
                                    <div style={{ 
                                        fontSize: '3rem', 
                                        marginBottom: '1rem',
                                        filter: index === activeFeature ? 'drop-shadow(0 0 10px #5eead4)' : 'none'
                                    }}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-light" style={{ 
                                        fontSize: '1.1rem', 
                                        fontWeight: '500',
                                        color: index === activeFeature ? '#5eead4' : '#ffffff'
                                    }}>
                                        {feature.title}
                                    </h3>
                                    {index === activeFeature && (
                                        <div style={{ 
                                            marginTop: '0.5rem', 
                                            fontSize: '0.85rem', 
                                            color: '#5eead4',
                                            opacity: 0.8
                                        }}>
                                            ✨ Aktívna funkcia
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits section */}
                <div className="container" style={{ marginBottom: '4rem' }}>
                    <h3 className="text-center text-light" style={{ 
                        fontSize: '2.2rem', 
                        marginBottom: '3rem',
                        color: '#5eead4'
                    }}>
                        Prečo EduSync?
                    </h3>
                    <div className="row g-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="col-12 col-md-4">
                                <div className="stats-card">
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-light" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                                        {benefit.title}
                                    </h4>
                                    <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enhanced CTA section */}
                <div className="container text-center mt-5">
                    <div style={{
                        background: 'rgba(20, 184, 166, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        padding: '3rem 2rem',
                        border: '1px solid rgba(94, 234, 212, 0.2)',
                        marginBottom: '3rem'
                    }}>
                        <h3 className="text-light" style={{ 
                            fontSize: '1.8rem', 
                            marginBottom: '1.5rem',
                            fontWeight: '300'
                        }}>
                            Pripoj sa k EduSync a sprav svoje štúdium efektívne a jednoducho
                        </h3>
                        <h5 className="text-light mb-4" style={{ 
                            color: '#cbd5e1',
                            fontSize: '1.1rem',
                            marginBottom: '2rem'
                        }}>
                            Sleduj svoje úlohy, zdieľaj materiály a spolupracuj s kamarátmi bez zbytočného stresu.
                        </h5>
                        
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="btn-enhanced">
                                <a href="/Register" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Registrovať sa →
                                </a>
                            </button>
                            <button className="btn-secondary">
                                <a href="/Login" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Prihlásiť sa
                                </a>
                            </button>
                        </div>
                    </div>

                    {/* Social proof */}
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        gap: '2rem',
                        flexWrap: 'wrap',
                        color: '#94a3b8'
                    }}>
                        <div className="stats-card" style={{ minWidth: '120px' }}>
                            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#5eead4' }}>1000+</div>
                            <div style={{ fontSize: '0.9rem' }}>Aktívnych študentov</div>
                        </div>
                        <div className="stats-card" style={{ minWidth: '120px' }}>
                            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#5eead4' }}>50+</div>
                            <div style={{ fontSize: '0.9rem' }}>Škôl</div>
                        </div>
                        <div className="stats-card" style={{ minWidth: '120px' }}>
                            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#5eead4' }}>99%</div>
                            <div style={{ fontSize: '0.9rem' }}>Spokojnosť</div>
                        </div>
                    </div>
                </div>

                {/* Floating AI assistant */}
                <div className="floating-assistant animate-pulse-glow">
                    <span style={{ fontSize: '1.5rem' }}>🤖</span>
                </div>
            </div>
        </>
    );
}