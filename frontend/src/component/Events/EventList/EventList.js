import React from "react";
import "./EventList.js";
import EventItem from "./EventItem/EventItem";
const eventList = (props) => {
  const events = props.events.map((event) => {
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        userId={props.authUserId}
        creatorId={event.creator._id}
        price={event.price}
        date={event.date}
        onDetail={props.onViewDetail}
      />
    );
  });
  return <ul className="event__list">{events}</ul>;
};

export default eventList;
