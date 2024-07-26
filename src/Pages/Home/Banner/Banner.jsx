import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full" />
        <div className="absolute h-full left-0 top-0 pl-12 flex items-center gap-2 text-white my-auto bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="space-y-7  w-1/2">
            <h2 className="text-6xl">Affordable price for car servicing</h2>
            <p>
              There are many variations of passages of available,But The
              mejority have suffred alteration in some form
            </p>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end bottom-3 gap-2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full" />
        <div className="absolute h-full left-0 top-0 pl-12 flex items-center gap-2 text-white my-auto bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="space-y-7  w-1/2">
            <h2 className="text-6xl">Affordable price for car servicing</h2>
            <p>
              There are many variations of passages of available,But The
              mejority have suffred alteration in some form
            </p>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end bottom-3 gap-2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full" />
        <div className="absolute h-full left-0 top-0 pl-12 flex items-center gap-2 text-white my-auto bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="space-y-7  w-1/2">
            <h2 className="text-6xl">Affordable price for car servicing</h2>
            <p>
              There are many variations of passages of available,But The
              mejority have suffred alteration in some form
            </p>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end bottom-3 gap-2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full" />
        <div className="absolute h-full left-0 top-0 pl-12 flex items-center gap-2 text-white my-auto bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="space-y-7  w-1/2">
            <h2 className="text-6xl">Affordable price for car servicing</h2>
            <p>
              There are many variations of passages of available,But The
              mejority have suffred alteration in some form
            </p>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end bottom-3 gap-2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
