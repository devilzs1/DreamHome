import Image from '../assets/img/house-banner.jpg';
import Search from './Search';

const Banner = () => {
  return (
    <section className="h-full mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Experience</span> the Joy of
            Living in Your Dream House with Us
          </h1>
          <p className="max-w-[480px] mb-8">
            Experience the thrill of turning your dream into reality with us. We
            specialize in making homeownership dreams come true, offering a
            curated selection of exquisite properties that align with your
            aspirations.
          </p>
        </div>
        <div className="flex-1 lg:flex justify-end items-end overflow-hidden rounded-tl-[8rem] rounded-br-[8rem] lg:mr-16">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
