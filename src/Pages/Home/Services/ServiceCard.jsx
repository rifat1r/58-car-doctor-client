import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-7 pt-10">
        <img src={img} className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500 ">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
