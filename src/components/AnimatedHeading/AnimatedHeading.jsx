// import { useState, useEffect } from "react";
// import { home, img11, img12, img13, img14 } from "../../image";

// const images = [home, img11, img12, img13, img14]; 

// const AnimatedHeadingWithImage = () => {
//   const words = ["30% discount", "if you have membership", "card of this store", "Discover the latest fasion"];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//    <div className="p-6">
//      <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", display: "rounded-2xl" }}>
//       {/* Background Image (Slideshow) */}
//       <img
//         src={images[currentImageIndex]}
//         alt="Background"
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           position: "absolute",
//           transition: "opacity 1s ease-in-out",
//         }}
//       />

//       {/* Dark Overlay for Better Text Readability */}
//       <div className="absolute inset-0 bg-black/60 "></div>

//       {/* Text Overlay */}
//       <div style={{
//         position: "absolute",
//         top: "50%",
//         left: "16%",
//         transform: "translate(-50%, -50%)",
//         color: "white",
//         fontSize: "8rem",
//         fontWeight: "bold",
//         textAlign: "center",
//         textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
//       }}>
//         {words.map((word, index) => (
//           <span key={index} style={{ display: "block", opacity: 0, animation: `fadeIn 1s forwards`, animationDelay: `${index * 1}s` }}>
//             {word}
//           </span>
//         ))}
      
        
        
//       </div>

//       {/* Keyframe Animation */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             to {
//               opacity: 1;
//             }
//           }
//         `}
//       </style>
//     </div>
//    </div>
//   );
// };

// export default AnimatedHeadingWithImage;



import { useState, useEffect } from "react";
import { home, img11, img12, img13, img14 } from "../../image";

const images = [home, img11, img12, img13, img14]; 
const words = ["30% discount If you have a membership Card of this store Discover the latest fashion",
              "Style with purpose. Fashion that loves by the whole universe",
               "Sustainability crafted clothing for a better future made from organic, recycled, and ethically sourced materials.",
              "Embrace comfort with breathable fabrics, loose fits, and cozy layers, making everyday wear effortless, stylish, and perfect for relaxation.",
              "Matching cozy outfits for couples bring warmth and style—soft hoodies, comfy loungewear, and coordinated looks for ultimate togetherness."
];

const AnimatedHeadingWithImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
   <div className="p-6">
     <div className="relative w-full h-screen overflow-hidden rounded-2xl">
      {/* Background Image (Slideshow) */}
      <img
        src={images[currentIndex]}
        alt="Background"
        className="w-full h-full object-cover absolute transition-opacity duration-1000"
      />

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Overlay */}
      <div className="absolute top-[50%] left-[36%] transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-lg text-center">
        <span 
          key={currentIndex} 
          className="block opacity-0 animate-fadeIn duration-1000">
          {words[currentIndex]}
        </span>
      </div>

      {/* Keyframe Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
        `}
      </style>
    </div>
   </div>
  );
};

export default AnimatedHeadingWithImage;
