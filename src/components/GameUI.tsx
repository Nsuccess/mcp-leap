import React from "react";

interface GameUIProps {
  score: number;
  gameOver: boolean;
  onRestart: () => void;
  children: React.ReactNode;
}

export const GameUI: React.FC<GameUIProps> = ({
  score,
  gameOver,
  onRestart,
  children,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // OpenAgent Official Brand Theme - Cyber Fleet
        background:
          "linear-gradient(135deg, #0A0A1F 0%, #16213e 50%, #0f172a 100%)",
      }}
    >
      {/* Game Container - centered with mobile max width */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "480px", // Mobile-friendly max width
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "transparent", // Let the game render its own background
        }}
      >
        {/* Game Canvas */}
        {children}
      </div>

      {/* OpenAgent Branding Badge - Sandbox Preview Glow */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "8px 16px",
          borderRadius: "8px",
          backgroundColor: "rgba(10, 10, 31, 0.95)",
          border: "1px solid rgba(0, 212, 255, 0.6)",
          boxShadow: "0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 102, 255, 0.2), inset 0 0 20px rgba(22, 33, 62, 0.5)",
          fontSize: "12px",
          color: "#00D4FF",
          textShadow: "0 0 10px #00D4FF, 0 0 20px rgba(0, 212, 255, 0.5)",
          fontWeight: "600",
          letterSpacing: "0.5px",
          zIndex: 10,
          pointerEvents: "none",
          background: "linear-gradient(135deg, rgba(22, 33, 62, 0.8), rgba(10, 10, 31, 0.95))",
        }}
      >
        ⚡ Powered by OpenAgent
      </div>

      {/* UI Overlay */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 10,
          width: "min(400px, calc(100vw - 40px))",
        }}
      >
        {/* Title and Score Container */}
        <div
          style={{
            padding: "10px 20px",
            borderRadius: "15px",
            backgroundColor: "rgba(10, 10, 31, 0.9)",
            backdropFilter: "blur(10px)",
            border: "1px solid #7D4CDB",
            boxShadow: "0 0 25px rgba(0, 102, 255, 0.6)",
            textAlign: "center",
            marginBottom: "15px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontSize: "24px" }}>🎮</span>
            <h1
              style={{
                margin: "0",
                background: "linear-gradient(135deg, #0066FF, #00D4FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "clamp(20px, 5vw, 28px)",
                fontWeight: "900",
                fontFamily: "'Orbitron', 'Rajdhani', sans-serif",
                filter: "drop-shadow(0 0 15px rgba(0, 212, 255, 0.8))",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              JUMP
            </h1>
          </div>
          <div
            style={{
              fontSize: "clamp(14px, 3.5vw, 18px)",
              fontWeight: "700",
              color: "#00D4FF",
              fontFamily: "'Rajdhani', 'Exo 2', sans-serif",
              textShadow: "0 0 20px rgba(0, 212, 255, 0.9), 0 0 40px rgba(0, 102, 255, 0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#7D4CDB", fontSize: "0.85em" }}>SCORE</span> {score}
          </div>
        </div>

        {/* Controls Hint */}
        <div
          style={{
            padding: "8px 16px",
            borderRadius: "10px",
            backgroundColor: "rgba(10, 10, 31, 0.8)",
            backdropFilter: "blur(8px)",
            border: "1px solid #7D4CDB",
            fontSize: "12px",
            color: "#00D4FF",
            textShadow: "0 0 10px #00D4FF",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Use ← → arrow keys to move
        </div>
      </div>

      {/* Game Over Overlay */}
      {gameOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "auto",
            zIndex: 20,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              backgroundColor: "rgba(10, 10, 31, 0.95)",
              backdropFilter: "blur(20px)",
              border: "2px solid #0066FF",
              borderRadius: "15px",
              boxShadow: "0 0 40px rgba(0, 102, 255, 0.8)",
              maxWidth: "350px",
              width: "min(350px, calc(100vw - 40px))",
            }}
          >
            {/* Game Over Title */}
            <h2
              style={{
                margin: "0 0 20px 0",
                color: "#ff4444",
                fontSize: "36px",
                fontWeight: "bold",
                fontFamily: "'Press Start 2P', 'Courier New', monospace",
                textShadow:
                  "3px 3px 0px rgba(0,0,0,0.8), 6px 6px 0px rgba(0,0,0,0.3)",
                letterSpacing: "2px",
                imageRendering: "pixelated",
                textRendering: "geometricPrecision",
                textTransform: "uppercase",
              }}
            >
              Game Over
            </h2>

            {/* Final Score */}
            <div
              style={{
                margin: "0 0 25px 0",
                padding: "12px 20px",
                backgroundColor: "rgba(10, 10, 31, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid #7D4CDB",
                borderRadius: "10px",
                fontSize: "16px",
                color: "#00D4FF",
                fontFamily: "'Press Start 2P', 'Courier New', monospace",
                textShadow: "0 0 15px #00D4FF",
                letterSpacing: "1px",
                imageRendering: "pixelated",
                textRendering: "geometricPrecision",
              }}
            >
              Final Score: {score}
            </div>

            {/* Play Again Button */}
            <button
              onClick={onRestart}
              style={{
                padding: "12px 32px",
                fontSize: "14px",
                fontFamily: "'Press Start 2P', 'Courier New', monospace",
                background: "linear-gradient(45deg, #0066FF, #7D4CDB)",
                backdropFilter: "blur(10px)",
                color: "white",
                border: "2px solid #00D4FF",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "0 0 25px rgba(0, 212, 255, 0.6)",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px",
                imageRendering: "pixelated",
                textRendering: "geometricPrecision",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(45deg, #7D4CDB, #9d4edd)";
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 50px rgba(0, 212, 255, 0.9)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(45deg, #0066FF, #7D4CDB)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 212, 255, 0.6)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(0px) scale(0.98)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 212, 255, 0.5)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 50px rgba(0, 212, 255, 0.9)";
              }}
            >
              Play Again
            </button>

            {/* Additional game-like decoration */}
            <div
              style={{
                marginTop: "20px",
                fontSize: "10px",
                color: "rgba(255, 255, 255, 0.7)",
                fontFamily: "'Press Start 2P', 'Courier New', monospace",
                letterSpacing: "1px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              Press ENTER or SPACE to continue...
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
