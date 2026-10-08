import Image from "next/image";

import "./industries.css";

const industries = [
  { number: "01", title: "Real Estate & Architecture", description: "Digital solutions for property, construction, interior and architecture businesses.", image: "/images/realestate.webp", tone: "blue" },
  { number: "02", title: "Retail & Fashion", description: "Scalable online stores and brand experiences that drive sales and loyalty.", image: "/images/e-commerce.webp", tone: "peach" },
  { number: "03", title: "Healthcare & Wellness", description: "Secure and patient-centric digital solutions for a healthier tomorrow.", image: "/images/pharma.webp", tone: "sky" },
  { number: "04", title: "Hotels & Restaurants", description: "Engaging digital experiences to attract, serve and retain your customers.", image: "/images/hotel.webp", tone: "sand" },
  { number: "05", title: "Professional Services", description: "Build trust with professional designs and secure, scalable solutions.", image: "/images/clientsgrid.webp", tone: "rose" },
  { number: "06", title: "Construction & Industrial", description: "Custom solutions to streamline operations and boost productivity.", image: "/images/construction.webp", tone: "yellow" },
  { number: "07", title: "Technology & SaaS", description: "High-performance digital products for innovative businesses.", image: "/images/Tech.webp", tone: "lilac" },
  { number: "08", title: "Education & EdTech", description: "Engaging learning platforms for a brighter, smarter future.", image: "/images/education.webp", tone: "blue" },
  { number: "09", title: "Automotive & Mobility", description: "Digital solutions for modern mobility and automotive brands.", image: "/images/Automotive.webp", tone: "ice" },
  { number: "10", title: "Luxury & Beauty", description: "Premium digital experiences to showcase your brand's uniqueness.", image: "/images/e-commerce.webp", tone: "peach" },
  { number: "11", title: "Logistics & B2B", description: "Efficient digital solutions for a connected and faster supply chain.", image: "/images/Logistics.webp", tone: "sky" },
  { number: "12", title: "Agriculture & Food", description: "Grow your brand with digital solutions for a better tomorrow.", image: "/images/realestate.webp", tone: "green" },
];

export default function IndustriesSection() {
  return (
    <section className="site-section industries-section" id="industries">
      <div className="industries-container">
        <header className="industries-header">
          <div className="industries-eyebrow"><span /> INDUSTRIES WE SERVE</div>
          <h2>Different Industries. <strong>Real Impact.</strong></h2>
          <p>Tailored digital solutions for every industry, helping businesses grow faster and smarter.</p>
        </header>

        <div className="industries-grid">
          {industries.map((industry) => (
            <article className={`industry-card industry-card-${industry.tone}`} key={industry.number}>
              <div className="industry-image-wrap">
                <Image src={industry.image} alt={industry.title} fill sizes="(max-width: 650px) 34vw, (max-width: 1000px) 23vw, 145px" className="industry-image" />
              </div>
              <div className="industry-copy">
                <h3>{industry.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}