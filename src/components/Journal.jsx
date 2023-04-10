import { Icon } from "@iconify/react";

function Journal(props) {
  return (
    <section className="journal">
      <img className="journal__image" src={props.imageUrl} alt="" />
      <div className="journal__content">
        <div className="journal__location-info">
          <Icon
            className="location-info__icon"
            icon="ic:baseline-location-on"
          />
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="journal__location">{props.title}</h2>
        <p className="journal__date">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="journal__info">{props.description}</p>
      </div>
    </section>
  );
}

export default Journal;
