import React from 'react';
import '../css/contactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <div className="contact-details">
                <h2>Contact Information</h2>
                <p><strong>Address:</strong> 123 Oil Road, Energy City, EC 45678</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> contact@adequateoil.com</p>
            </div>
            <div className="map">
                {/* Replace with actual map integration */}
                <iframe 
                    title="Company Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...!2d...!3d..." 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
    );
};

export default ContactInfo;
