import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
                   
            "DESIGNER_CONTENT": "Get acquainted with our team of talented furniture designers who bring innovation and creativity to our handmade bamboo, rattan, and sarkanda furniture. Learn about their expertise, qualifications, and unique design philosophies that inspire our exceptional furniture pieces. Our designers blend traditional craftsmanship with contemporary trends to create sustainable and eco-friendly furniture that stands out. Explore their portfolios and discover the passion and dedication they bring to every project. Collaborate with our skilled designers to bring your custom furniture ideas to life. Experience the artistry and expertise that sets our furniture apart and make a statement in your spaces.",
            "DESIGNER_HEADER": "Meet Our Talented Furniture Designers | Handmade Bamboo, Rattan, and Sarkanda Furniture",     
            "SERVICES_CONTENT": "Discover our comprehensive range of services tailored to meet your unique requirements. With our expertise in customization, OEM/ODM capabilities, efficient packaging solutions, and meticulous design process, we ensure every aspect of your furniture manufacturing journey is seamless and satisfying. From concept to completion, our skilled artisans bring your vision to life, creating exquisite handmade bamboo, rattan, and sarkanda furniture that exceeds your expectations. Experience our commitment to quality, sustainability, and innovation as we collaborate to deliver exceptional products that reflect your style and values. Trust us to handle every detail with precision and care, ensuring a successful partnership and a remarkable end result.",
            "SERVICES_HEADER": "Customization, OEM/ODM, Packaging, and Design Process | Handmade Bamboo, Rattan, and Sarkanda Furnituree", 
            "CONTACT_CONTENT": "Have a question, inquiry, or special request? Contact [Your Company Name] today to connect with our friendly and knowledgeable team. We are here to assist you with any queries related to our exquisite handmade bamboo, rattan, and sarkanda furniture. Fill out our convenient contact form, and we will promptly respond to your message. Experience exceptional customer service and discover how our eco-friendly products can enhance your space. Reach out to us now and let's begin a conversation about your furniture needs. We look forward to hearing from you and assisting you in every possible way.",
            "CONTACT_HEADER": "Get in Touch with Us | Contact Ecowoodies for Handmade Bamboo, Rattan, and Sarkanda Furniture",  
            "WHYUS_CONTENT": "Discover why we are the preferred choice for handmade bamboo, rattan, and sarkanda furniture. Learn about our rich history, craftsmanship, and commitment to eco-friendly practices. Our passion for creating sustainable and unique furniture sets us apart. Experience the meticulous attention to detail and artistry that goes into each piece. Explore our story and understand the values that drive us. From our skilled artisans to our eco-friendly materials, we take pride in delivering exceptional furniture that enhances your spaces while respecting the environment. Choose us for quality, craftsmanship, and a greener future.",
            "WHYUS_HEADER": "Choose Us for Handmade Bamboo, Rattan, and Sarkanda Furniture | Our Story, Craftsmanship, and Eco-Friendly Products",  
            "PARTNER_CONTENT": "Explore our esteemed partners and clients who have chosen our handmade bamboo, rattan, and sarkanda furniture. Discover the collaborations and projects we have undertaken together to create beautiful and sustainable spaces. Our strong relationships reflect our commitment to excellence and customer satisfaction. From residential to commercial projects, our furniture has adorned diverse settings, leaving a lasting impression. Join our network of satisfied partners and clients who appreciate the quality, craftsmanship, and eco-friendly nature of our products. Experience the difference of working with us and be inspired by the possibilities we can create together.",
            "PARTNER_HEADER": "Our Trusted Partners and Clients | Handmade Bamboo, Rattan, and Sarkanda Furniture",            
            "CATEGORY_HEADER": "Handmade Bamboo and Rattan Products | Bamboo Handicrafts Manufactures in India | Bamboo Products Exporters in India – Ecowoodies ",
            "CATEGORY_DESCRIPTION": "Well Established Exporters for Indian Handicrafts. We have wide range of  wooden, Rattan and bamboo handicrafts at great discounts with quality",
            "TITLE": "Ecowoodies - Handicraft Bamboo, Rattan and Sarkanda Chair Table Props Exporter and Manufactures",
            "DESCRIPTION": "Discover exquisite handmade furniture made from sustainable bamboo, rattan, and sarkanda at unbeatable prices. Our furniture manufacturing company specializes in eco-friendly and durable products perfect for export. Explore our extensive collection of chairs, tables, sofas, and newborn photography props, all meticulously crafted by skilled artisans. With our commitment to quality, affordability, and timely delivery, we are the preferred choice for customers seeking exceptional bamboo and rattan handicrafts. Benefit from our competitive rates and elevate your spaces with our distinctive furniture pieces. Choose us for your export needs and experience excellence in craftsmanship and service by Indian Artisian"
        }
    }
};
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });