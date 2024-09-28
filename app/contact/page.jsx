import React from 'react';

export default function Contact() {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
        },
        heading: {
            color: '#333',
            marginBottom: '10px',
        },
        subheading: {
            color: '#555',
            margin: '10px 0',
        },
        paragraph: {
            color: '#777',
            margin: '10px 0',
        },
        iframe: {
            border: '0',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '80%',
            maxWidth: '500px',
            height: '300px',
            margin: '20px auto',
            display: 'block',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Contact Us</h1>
            <h2 style={styles.subheading}>Phone: +91 982606646</h2>
            <p style={styles.paragraph}>
                Email: <a href="mailto:valimohd3233@gmail.com">valimohd3233@gmail.com</a>
            </p>
            <h2 style={styles.heading}>Our Location:</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.546536016553!2d75.8144949743762!3d22.70791877939555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd39aa13e0b%3A0x4867a31a6029042b!2sSystem%20AD%20Solutions%20False%20Ceiling%20all%20Kinds%20of%20Work!5e0!3m2!1sen!2sin!4v1725885902243!5m2!1sen!2sin" 
                style={styles.iframe} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}
