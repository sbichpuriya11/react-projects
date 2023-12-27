import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandLord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`, {
          method: "GET",
        });
        const data = await res.json();
        setLandlord(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLandLord();
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>
            &nbsp;for&nbsp;
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            onChange={handleMessageChange}
            name="message"
            id="message"
            cols="30"
            rows="2"
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
};

export default Contact;

// Hi, I'm send this email to enquire one of your listing. Please call me on 8379890990
