// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "";
  const name = "Bhumit";
  const email = "bhumit@example.com";
  const phone = "8947265284";
  const address = "loni";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="user-photo" />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">📧{email}</p>
      <p className="user-phone">📞 {phone}</p>
      <p className="user-address">📍 {address}</p>
    </div>
  );
};

export default Usercard;
