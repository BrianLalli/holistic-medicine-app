import React from "react";
import styles from "./ResultsPage.module.scss";
import { Link } from "react-router-dom";

function ResultsPage() {
    const mockPhysicians = [
        {
            name: "Dr. Jane Doe",
            specialization: "Herbal Medicine",
            description: "With over 10 years of experience in herbal treatments, Dr. Doe is renowned for her holistic approach and personalized care.",
            location: "Denver, CO",
            contact: {
                phone: "(720) 123-4567",
                email: "jane.doe@herbalclinic.com",
                address: "101 Herbal Way, Denver, CO 80202"
            }
        },
        {
            name: "Dr. John Smith",
            specialization: "Acupuncture",
            description: "A leading expert in acupuncture treatments, Dr. Smith has successfully treated numerous patients with a variety of ailments.",
            location: "Boulder, CO",
            contact: {
                phone: "(303) 987-6543",
                email: "john.smith@acuclinic.com",
                address: "259 Boulder St, Boulder, CO 80302"
            }
        },
        {
            name: "Dr. Emily Martin",
            specialization: "Chiropractic",
            description: "Dr. Martin's chiropractic sessions are highly sought after due to her attention to detail and patient-centric care approach.",
            location: "Aurora, CO",
            contact: {
                phone: "(720) 789-0123",
                email: "emily.martin@chiroclinic.com",
                address: "334 Spine Blvd, Aurora, CO 80012"
            }
        },
        {
            name: "Dr. William Johnson",
            specialization: "Homeopathy",
            description: "Having studied homeopathy in various parts of the world, Dr. Johnson brings a unique and effective approach to his treatments.",
            location: "Golden, CO",
            contact: {
                phone: "(303) 456-7890",
                email: "william.johnson@homeoclinic.com",
                address: "477 Natural Pl, Golden, CO 80401"
            }
        },
        {
            name: "Dr. Rachel Green",
            specialization: "Reflexology",
            description: "With a strong belief in the power of touch, Dr. Green has helped numerous patients alleviate pain and stress through reflexology.",
            location: "Arvada, CO",
            contact: {
                phone: "(720) 234-5678",
                email: "rachel.green@reflexclinic.com",
                address: "922 Touch Ln, Arvada, CO 80004"
            }
        },
        {
            name: "Dr. Robert Brown",
            specialization: "Naturopathy",
            description: "Dr. Brown combines modern science with traditional practices, offering patients a comprehensive approach to health and wellness.",
            location: "Denver, CO",
            contact: {
                phone: "(303) 123-4567",
                email: "robert.brown@naturoclinic.com",
                address: "550 Wellness Dr, Denver, CO 80203"
            }
        }
    ];
    

  return (
    <div className={styles.resultsPage}>
      <h2>Recommended Physicians</h2>
      <ul>
        {mockPhysicians.map((physician, index) => (
          <li key={index} className={styles.physicianCard}>
            <h3>{physician.name}</h3>
            <p>
              <strong>Specialization:</strong> {physician.specialization}
            </p>
            <p>{physician.description}</p>
            {/* Link to view more details about the physician */}
            <Link to={`/physician/${index}`} className={styles.learnMoreButton}>
              Learn More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsPage;
