import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo text-gradient">PK.</div>
                    <p className="footer-text">Built with React, Vanilla CSS, and passion.</p>
                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()} Pranith Kumar. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
