import { useEffect } from "react";

const AnimatedHeading = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  const words = ["30% discount", "if you have membership", "card of this store"];
  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "500",
    lineHeight: "1.5",
    whiteSpace: "nowrap",
    overflow: "hidden",
  };

  const wordStyle = (index) => ({
    display: "inline-block",
    opacity: 0,
    animation: `fadeIn 1s forwards`,
    animationDelay: `${index * 1}s`,
    marginRight: "10px",
  });
  const fadeInKeyframes = `
    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  `;

  // Inject the keyframe animation into the document's head dynamically
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = fadeInKeyframes;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div>
      <style>{fadeInKeyframes}</style>
      <h1 style={headingStyle}>
        {words.map((word, index) => (
          <span key={index} style={wordStyle(index)}>
            {word}
          </span>
        ))}
      </h1>
     
    </div>
  );
};

export default AnimatedHeading;
