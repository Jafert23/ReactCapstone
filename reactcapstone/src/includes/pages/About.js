import React from 'react';
import '../styles/About.css';
import TeamMemberCard from './TeamMemberCard';
import mario from '../images/Mario.png';
import adrian from '../images/Adrian.png';

const About = () => {
  const team = [
    {
      name: 'Adrian',
      bio: 'Adrian is our head chef and co-founder. He brings a modern twist to classic Mediterranean dishes.',
      image: adrian,
    },
    {
      name: 'Mario',
      bio: 'Mario, co-owner and operations lead, ensures every guest has an amazing experience.',
      image: mario,
    },
  ];

  return (
    <section className="about-section">
      {/* Page Title */}
      <h2>Meet Our Team</h2>

      {/* Cards Container */}
      <div className="team-grid">
        {team.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            bio={member.bio}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
