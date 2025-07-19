import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EventDetails.css';

function EventDetails({ events, onPay }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="event-details-container">
      <div className="event-details-content">
        <div className="event-details-image-wrapper">
          <img src={event.image} alt={event.title} className="event-detail-image" />
        </div>

        <div className="event-details-text">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{event.date} - {event.location}</p>
          <p>Price: {event.price} ETH</p>
          <h4>Organizer Information:</h4>
          <p>Host: {event.hostName || "John Doe"}</p>
          <p>Contact: {event.hostContact || "9912348567"}</p>
        </div>
      </div>

      <div className="event-details-buttons">
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={onPay}>Pay & Register</button>
      </div>
    </div>
  );
}

export default EventDetails;
