import React from 'react';
import '../styles/Background.css';

const Background = () => {
    return (
        <div className="background-wrapper">
            {/* Main gradient background */}
            <div className="background-gradient"></div>
            
            {/* Animated background particles */}
            <div className="particles-container">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>
            
            {/* Optional: Additional background effects */}
            <div className="background-overlay"></div>
        </div>
    );
};

export default Background;