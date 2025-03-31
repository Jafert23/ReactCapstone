import React from 'react';
import '../styles/TeamMemberCard.css';

const TeamMemberCard = ({ name, bio, image }) => {
  return (
    <div className="team-member-card">
      {/* Photo */}
      <img src={image} alt={name} className="team-photo" />

      {/* Name and Bio */}
      <h3>{name}</h3>
      <p className="team-bio">{bio}</p>
    </div>
  );
};

export default TeamMemberCard; 