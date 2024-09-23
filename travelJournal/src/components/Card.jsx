import { FaLocationDot } from "react-icons/fa6";

export default function Card({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return (
        <div className="card">
            <div>
                <h4 className="card--title">{title}</h4>
                <img className="card--image" src={imageUrl} alt={description} />
            </div>
            <div className="card--context">
                <div className="card--location">
                    <FaLocationDot />
                    <h6 className="card--place--name">{location}</h6>
                    <p><a href={googleMapsUrl} className="google--maps--link" target="_blank">View On Google Maps</a></p>
                </div>
                <h3 className="card--title">{title}</h3>
                <h5 className="card--travel--period">{startDate} - {endDate}</h5>
                <p className="card--description">{description}</p>
            </div>
        </div>
    )
}