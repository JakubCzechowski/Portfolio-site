import React from 'react';

export default function Footer() {
    return (
        <footer className="main-footer">
            <section className="footer-social">
                <div>
                    <a href="https://www.instagram.com/kubsun/" rel="noopener noreferrer" target="_blank"><img src="/assets/icons/instagram.svg" alt="Instagram" className="social-icon" /></a>
                </div>
                <div>
                    <a href="https://github.com/JakubCzechowski" rel="noopener noreferrer" target="_blank"><img src="/assets/icons/github.svg" alt="Github" className="social-icon" /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/czechowskijakub/" rel="noopener noreferrer" target="_blank"><img src="/assets/icons/linkedin.svg" alt="Linkedin" className="social-icon" /></a>
                </div>

            </section>
        </footer>
    )
}