import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // E2B Official Brand Colors
  const brandColors = [
    "#0A0A1F", // E2B Dark
    "#16213e", // E2B Navy
    "#0066FF", // E2B Blue
    "#7D4CDB", // E2B Purple
    "#00D4FF", // E2B Cyan
  ];



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
      }}
    >
      {/* Background color stripes */}
      {brandColors.map((color) => (
        <div
          key={color}
          style={{
            width: "20%",
            height: "100%",
            backgroundColor: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      ))}

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
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Slight overlay for better contrast
        }}
      >
        {/* Logo and Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <span style={{ fontSize: "80px" }}>🎮</span>
          <h1
            style={{
              margin: 0,
              color: "#fff",
              fontSize: "48px",
              fontWeight: "bold",
              fontFamily: "'Press Start 2P', 'Courier New', monospace",
              textShadow:
                "3px 3px 0px rgba(0,0,0,0.8), 6px 6px 0px rgba(0,0,0,0.3)",
              letterSpacing: "3px",
              imageRendering: "pixelated",
              textRendering: "geometricPrecision",
            }}
          >
            Jump
          </h1>
        </div>

        {/* Animated GIF - E2B Style */}
        <div
          style={{
            marginBottom: "60px",
            padding: "20px",
            backgroundColor: "rgba(10, 10, 31, 0.8)",
            borderRadius: "20px",
            border: "2px solid #00D4FF",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)",
          }}
        >
          <img
            src="/lechat.gif"
            alt="Player Character"
            style={{
              width: "120px",
              height: "120px",
              imageRendering: "pixelated",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Loading Bar Container */}
        <div
          style={{
            width: "400px",
            maxWidth: "80vw",
            height: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            overflow: "hidden",
            position: "relative",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {/* Loading Bar - E2B Theme */}
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

        {/* Loading Text */}
        <div
          style={{
            marginTop: "30px",
            color: "#fff",
            fontSize: "16px",
            fontFamily: "'Press Start 2P', 'Courier New', monospace",
            textShadow: "2px 2px 0px rgba(0,0,0,0.8)",
            letterSpacing: "2px",
            textAlign: "center",
          }}
        >
          Loading... {Math.round(progress)}%
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: "15px",
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "12px",
            fontFamily: "'Press Start 2P', 'Courier New', monospace",
            textShadow: "1px 1px 0px rgba(0,0,0,0.8)",
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          Preparing your adventure...
        </div>
      </div>
    </div>
  );
};
