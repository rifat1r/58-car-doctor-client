import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-4">
        <h3 className="text-2xl font-bold text-orange-500">Services</h3>
        <h2 className="text-5xl">Our Servie Area</h2>
        <p>
          Our car servicing mechanic store offers expert maintenance and repair
          services for all vehicle types. <br /> With skilled technicians and
          quality parts, we ensure your car runs smoothly and safely.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
