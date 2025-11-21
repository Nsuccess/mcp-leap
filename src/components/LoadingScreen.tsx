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
        background: "linear-gradient(135deg, #0A0A1F 0%, #16213e 50%, #0F172A 100%)",
      }}
    >
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
        {/* E2B Logo and Title - High Contrast */}
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
              background: "linear-gradient(90deg, #0066FF 0%, #7D4CDB 50%, #00D4FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "56px",
              fontWeight: "bold",
              fontFamily: "'Press Start 2P', 'Courier New', monospace",
              filter: "drop-shadow(0 0 30px rgba(0, 212, 255, 0.8))",
              letterSpacing: "6px",
              imageRendering: "pixelated",
              textRendering: "geometricPrecision",
            }}
          >
            E2B FLEETJUMP
          </h1>
          <div
            style={{
              color: "#00D4FF",
              fontSize: "16px",
              fontWeight: "600",
              textShadow: "0 0 15px #00D4FF, 0 0 30px #0066FF",
              letterSpacing: "2px",
            }}
          >
            ⚡ Powered by E2B Sandboxes
          </div>
        </div>

        {/* Animated GIF - E2B Style with Glow */}
        <div
          style={{
            marginBottom: "60px",
            padding: "20px",
            backgroundColor: "rgba(0, 102, 255, 0.1)",
            borderRadius: "20px",
            border: "2px solid #00D4FF",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.8)",
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
              filter: "drop-shadow(0 0 20px #00D4FF) brightness(1.2)",
            }}
          />
        </div>

        {/* Loading Bar Container - Clean E2B Style */}
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

        {/* Loading Text - Bright and Readable */}
        <div
          style={{
            marginTop: "30px",
            color: "#00D4FF",
            fontSize: "20px",
            fontWeight: "300",
            textShadow: "0 0 15px #00D4FF",
            letterSpacing: "2px",
            textAlign: "center",
          }}
        >
          Loading... {Math.round(progress)}%
        </div>

        {/* E2B Subtitle */}
        <div
          style={{
            marginTop: "15px",
            color: "#00D4FF",
            fontSize: "12px",
            fontFamily: "'Press Start 2P', 'Courier New', monospace",
            textShadow: "0 0 10px #00D4FF",
            letterSpacing: "1px",
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          Preparing your sandbox fleet...
        </div>
      </div>
    </div>
  );
};
