import React from 'react';

// Reusable SVG Icon component
const IconArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M11.120112 0.932856C10.955088 0.96228 10.710816 1.101432 10.59048 1.234536C10.530096 1.301328 10.447224 1.4262 10.406328 1.512C10.338576 1.6542 10.332 1.68924 10.332 1.9080000000000001C10.332 2.0560080000000003 10.344744 2.180208 10.36524 2.232C10.478736 2.518896 10.312007999999999 2.365992 15.320927999999999 6.776904L20.093880000000002 10.98 10.784928 10.992L1.476 11.004 1.338144 11.059656C1.087176 11.161032 0.886536 11.35932 0.763128 11.628C0.716736 11.728968 0.708 11.787984 0.708 12C0.708 12.224400000000001 0.715176 12.267336 0.7736160000000001 12.392064000000001C0.895104 12.651408000000002 1.08924 12.83724 1.350744 12.944591999999998L1.476 12.996 10.785984000000001 13.008000000000001L20.095992 13.02 15.321984000000002 17.223048C10.310928 21.634800000000002 10.478832 21.48084 10.36524 21.768C10.344744 21.819792 10.332 21.943992 10.332 22.092C10.332 22.310760000000002 10.338576 22.3458 10.406328 22.488C10.662744 23.026056 11.291208 23.23992 11.793216000000001 22.959936C11.999232000000001 22.845048 22.755552 13.368552000000001 22.903728 13.171415999999999C23.03892 12.991536 23.185008 12.696456 23.246016 12.48C23.305248000000002 12.269784 23.308368 11.761536000000001 23.25168 11.556000000000001C23.140296 11.152272 22.97364 10.869816 22.68492 10.59552C22.290912000000002 10.221216 11.934192 1.1209440000000002 11.835816 1.062648C11.628984 0.940032 11.356704 0.8906639999999999 11.120112 0.932856"
      stroke="none"
      fill="currentColor"
      fillRule="evenodd"
      strokeWidth="0.024"
    ></path>
  </svg>
);

const YouTubeBackground = ({ videoId, start, end }) => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <iframe
      className="h-full w-full object-cover"
      src={`https://www.youtube.com/embed/${videoId}?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&start=${start}&end=${end}`}
      title="Background video"
      
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        transform: 'scale(1.5)', // Adjust the scale to cover the container
      }}
    />
  </div>
);

const HeroVideo = () => {
  return (
    <div className="relative flex min-h-screen  overflow-hidden">
      {/* Video Background */}
      <YouTubeBackground videoId="XB_A4SdQfBg" start={2} end={19} />

      {/* Overlay to darken the video for better text visibility */}
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-20 text-white my-auto ml-8">
        <div className="">
          {/* Heading */}
          <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Modern living, timeless design
          </h1>
          {/* Text Editor */}
          <p className="mt-4 text-lg sm:text-xl">
            Explore our curated selection of handcrafted furniture and home
            accessories, rooted in Scandinavian simplicity and built to last.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <a
            href="#"
            className="group inline-flex items-center text-sm font-medium transition duration-300 ease-in-out "
          >
            <span className="flex items-center justify-center gap-4">
              <span className="elementor-button-text">Explore Now</span>
              <span className="mr-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                <IconArrow />
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;