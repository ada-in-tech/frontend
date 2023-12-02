import React from 'react';
import '../../styles/components.css';

const Footer = () => {
    return (
        <footer className="footer p-6 bg-primary-color text-white">
            <div className="grid md:grid-cols-4 gap-4">
                {/* About Section */}
                <div>
                    <h5 className="font-bold mb-2">About Ada in Tech</h5>
                    <p>Ada in Tech is committed to fostering an inclusive environment where women in technology can thrive, innovate, and lead. We offer resources, training, and a supportive community to help bridge the gender gap in tech.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h5 className="font-bold mb-2">Quick Links</h5>
                    <ul>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/workshops">Workshops</a></li>
                        <li><a href="/mentorship">Mentorship</a></li>
                        <li><a href="/events">Events</a></li>
                    </ul>
                </div>

                {/* Pages */}
                <div>
                    <h5 className="font-bold mb-2">Pages</h5>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Use</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h5 className="font-bold mb-2">Contact Us</h5>
                    <p>Email: info@adaintech.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Tech Lane, Innovation City</p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h5 className="font-bold mb-2">Follow Us</h5>
                    <ul>
                        <li><a href="https://www.facebook.com/AdaInTech">Facebook</a></li>
                        <li><a href="https://www.twitter.com/AdaInTech">Twitter</a></li>
                        <li><a href="https://www.instagram.com/AdaInTech">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/company/AdaInTech">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>© 2023 Ada in Tech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
