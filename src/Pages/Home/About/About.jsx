import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"
          />
        </div>
        <div className=" lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in the field
          </h1>
          <p className="py-6">
            Our car servicing mechanic store offers expert maintenance and
            repair services for all vehicle types. With skilled technicians and
            quality parts, we ensure your car runs smoothly and safely. Visit us
            for reliable, efficient, and affordable auto care.
          </p>
          <p className="py-6">
            Our car servicing mechanic store offers expert maintenance and
            repair services for all vehicle types. With skilled technicians and
            quality parts, we ensure your car runs smoothly and safely. Visit us
            for reliable, efficient, and affordable auto care.
          </p>
          <button className="btn btn-warning">GET MORE INFO</button>
        </div>
      </div>
    </div>
  );
};

export default About;
