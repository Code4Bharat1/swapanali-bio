'use client';
import { useState, useEffect } from 'react';

const images = [
  { src: '/circle1.png', hoverSrc: '/circle2.png', rotate: -130 },
  { src: '/circle3.png', hoverSrc: '/circle4.png', rotate: -10 },
  { src: '/circle5.png', hoverSrc: '/circle6.png', rotate: -180 },
  { src: '/circle7.png', hoverSrc: '/circle8.png', rotate: 190 },
  { src: '/circle9.png', hoverSrc: '/circle10.png', rotate: 70 },
  { src: '/circle11.png', hoverSrc: '/circle12.png', rotate: 60 },
];

const centerImage = { src: '/circle.png' };

export default function ImageGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scale, setScale] = useState(1);
  const [dimensions, setDimensions] = useState({
    isMobile: false,
    imageWidth: 500,
    imageHeight: 320,
    radius: 300,
    centerImageWidth: 480,
    centerImageHeight: 240,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 768;
      const imageWidth = isMobile ? 250 : 500;
      const imageHeight = isMobile ? 210 : 420;
      const radius = isMobile ? 200 : 400;
      const centerImageWidth = isMobile ? 240 : 480;
      const centerImageHeight = isMobile ? 120 : 240;

      const viewportHeight = window.innerHeight;
      const galleryHeight = radius * 2 + imageHeight * 1.05 + 16;
      const newScale = Math.min(1, viewportHeight / galleryHeight);

      setDimensions({ isMobile, imageWidth, imageHeight, radius, centerImageWidth, centerImageHeight });
      setScale(Math.max(newScale, 0.7));
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const { isMobile, imageWidth, imageHeight, radius, centerImageWidth, centerImageHeight } = dimensions;

  return (
    <div className="flex justify-center items-center h-[900px] p-4 bg-gray-100">
      <div
        className="relative"
        style={{
          width: `${radius * 2 + imageWidth * 1.05}px`,
          height: `${radius * 2 + imageHeight * 1.05}px`,
          maxWidth: '100vw',
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 z-10 cursor-pointer"
          style={{
            transform: `translate(-50%, ${isMobile ? 'calc(-50% + 10px)' : 'calc(-50% + 20px)'})`,
          }}
          onMouseEnter={() => setHoveredIndex('center')}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={centerImage.src}
            alt="Center Image"
            width={centerImageWidth}
            height={centerImageHeight}
            role="img"
            aria-label="Center Image"
            className="object-cover"
            onError={(e) => {
              console.warn(`Failed to load center image: ${centerImage.src}`);
              e.target.style.display = 'none';
            }}
          />
        </div>

        {images.map((image, index) => {
          const angle = (index / images.length) * 360;
          const radian = (angle * Math.PI) / 180;
          const x = (radius * Math.cos(radian)).toFixed(2);
          const y = (radius * Math.sin(radian)).toFixed(2);

          return (
            <div
              key={index}
              className="absolute z-0 cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                top: '50%',
                left: '50%',
                marginLeft: `${-imageWidth / 2}px`,
                marginTop: `${-imageHeight / 2}px`,
                overflow: 'hidden',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={hoveredIndex === index ? image.hoverSrc : image.src}
                alt={`Gallery Image ${index + 1}`}
                width={imageWidth}
                height={imageHeight}
                role="img"
                aria-label={`Gallery Image ${index + 1}`}
                className="object-cover transition-all duration-300"
                style={{
                  transform: `rotate(${image.rotate}deg) ${
                    hoveredIndex === index && !isMobile ? 'scale(1.05)' : 'scale(1)'
                  }`,
                }}
                onError={(e) => {
                  console.warn(`Failed to load image: ${hoveredIndex === index ? image.hoverSrc : image.src}`);
                  e.target.src = '/placeholder.png';
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}