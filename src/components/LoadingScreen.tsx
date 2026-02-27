import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Animate progress bar over 2 seconds
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms for smooth animation
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          // Start exit animation immediately
          setTimeout(() => {
            setIsAnimatingOut(true);
            // Call onLoadingComplete at the same time as animation starts
            onLoadingComplete();
          }, 100);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        zIndex: 9999,
        transform: isAnimatingOut ? "translateY(-100vh)" : "translateY(0)",
        opacity: isAnimatingOut ? 0 : 1,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(0, 102, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(125, 76, 219, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 70%),
          linear-gradient(135deg, #0A0A1F 0%, #0F172A 50%, #0A0A1F 100%)
        `,
      }}
    >
      {/* Animated scanline effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #00D4FF, transparent)",
          animation: "scanline 4s linear infinite",
          opacity: 0.3,
        }}
      />
      
      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          opacity: 0.5,
        }}
      />
      {/* Content overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Elasticsearch Logo and Title - High Contrast */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              margin: 0,
              background: "linear-gradient(135deg, #0066FF 0%, #00D4FF 50%, #7D4CDB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
              fontSize: "clamp(28px, 7vw, 56px)",
              fontWeight: "900",
              fontFamily: "'Orbitron', 'Rajdhani', 'Exo 2', sans-serif",
              filter: "drop-shadow(0 0 40px rgba(0, 212, 255, 0.9)) drop-shadow(0 0 80px rgba(0, 102, 255, 0.5))",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              position: "relative",
              whiteSpace: "nowrap",
            }}
          >
            <style>{`
              @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              @keyframes scanline {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100vh); }
              }
            `}</style>
            ELASTICSEARCH FLEETJUMP
          </h1>
          <div
            style={{
              color: "#00D4FF",
              fontSize: "clamp(12px, 3vw, 18px)",
              fontWeight: "300",
              fontFamily: "'Rajdhani', 'Exo 2', sans-serif",
              textShadow: "0 0 20px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.4)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              animation: "float 3s ease-in-out infinite",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              background: "linear-gradient(135deg, rgba(22, 33, 62, 0.6), rgba(10, 10, 31, 0.8))",
            }}
          >
            <span style={{ fontSize: "1.5em", marginRight: "8px" }}>⚡</span>
            Powered by Elasticsearch Sandboxes
          </div>
        </div>

        {/* Animated GIF - Floating with Holographic Effect */}
        <div
          style={{
            marginBottom: "60px",
            padding: "24px",
            background: "linear-gradient(135deg, rgba(0, 102, 255, 0.15), rgba(125, 76, 219, 0.15))",
            borderRadius: "24px",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            position: "relative",
            animation: "float 4s ease-in-out infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "24px",
              padding: "2px",
              background: "linear-gradient(135deg, #0066FF, #00D4FF, #7D4CDB)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <img
            src="/lechat.gif"
            alt="Player Character"
            style={{
              width: "140px",
              height: "140px",
              imageRendering: "pixelated",
              borderRadius: "16px",
              filter: "drop-shadow(0 0 30px rgba(0, 212, 255, 0.9)) brightness(1.3) contrast(1.1)",
            }}
          />
        </div>

        {/* Loading Bar Container - Clean Elasticsearch Style */}
        <div
          style={{
            width: "400px",
            maxWidth: "80vw",
            height: "24px",
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            borderRadius: "12px",
            border: "2px solid rgba(0, 102, 255, 0.5)",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 0 20px rgba(0, 102, 255, 0.3)",
          }}
        >
          {/* Loading Bar - Elasticsearch Theme */}
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background:
                "linear-gradient(90deg, #0066FF, #7D4CDB, #00D4FF)",
              borderRadius: "8px",
              transition: "width 0.02s linear",
              position: "relative",
              boxShadow: "0 0 20px rgba(0, 212, 255, 0.8)",
            }}
          >
            {/* Shine effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "50%",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
                borderRadius: "8px 8px 0 0",
              }}
            />
          </div>
        </div>

        {/* Loading Text - Cyberpunk Style */}
        <div
          style={{
            marginTop: "30px",
            color: "#00D4FF",
            fontSize: "clamp(18px, 4vw, 28px)",
            fontWeight: "700",
            fontFamily: "'Rajdhani', sans-serif",
            textShadow: "0 0 20px rgba(0, 212, 255, 0.9), 0 0 40px rgba(0, 102, 255, 0.5)",
            letterSpacing: "0.15em",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#7D4CDB" }}>LOADING</span> {Math.round(progress)}%
        </div>

        {/* Elasticsearch Subtitle - Glitch Effect */}
        <div
          style={{
            marginTop: "20px",
            color: "rgba(0, 212, 255, 0.9)",
            fontSize: "clamp(11px, 2.5vw, 15px)",
            fontFamily: "'Rajdhani', 'Exo 2', sans-serif",
            fontWeight: "500",
            textShadow: "0 0 15px rgba(0, 212, 255, 0.6)",
            letterSpacing: "0.2em",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          › Initializing Sandbox Fleet
        </div>
      </div>
    </div>
  );
};
