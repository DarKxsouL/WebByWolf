

const RightTrapezoid = () => {
  return (
    
      <div 
        className={`
          overflow-hidden absolute top-0 right-0 w-180 h-160 animate-hero-right
          [clip-path:polygon(0%_100%,_100%_100%,_100%_0%,_20%_0%)]
        `}
      >
        <img src={'./hero_img.webp'} alt="" />
      </div>
   
  );
};

export default RightTrapezoid;