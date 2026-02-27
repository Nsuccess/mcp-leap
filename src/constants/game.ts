export const GAME_CONFIG = {
  // Canvas dimensions - mobile-friendly max width
  MAX_GAME_WIDTH: 480, // Mobile-friendly max width
  CANVAS_WIDTH:
    typeof window !== "undefined" ? Math.min(window.innerWidth, 480) : 480,
  CANVAS_HEIGHT: typeof window !== "undefined" ? window.innerHeight : 600,

  // Physics
  GRAVITY: 0.5,
  JUMP_FORCE: -15,
  MOVE_SPEED: 5,
  FRICTION: 0.8,

  // Platform settings
  PLATFORM_WIDTH: 120,
  PLATFORM_HEIGHT: 20,
  PLATFORM_SPACING: 120,
  PLATFORM_COUNT: 100,

  // Player settings
  PLAYER_WIDTH: 90,
  PLAYER_HEIGHT: 90,
  PLAYER_START_OFFSET: 120,

  // Game mechanics
  COLLISION_TOLERANCE: 3,
  GAME_OVER_OFFSET: 50, // Reduced offset for faster game over detection
  SCORE_MULTIPLIER: 10,

  // Visual - Elasticsearch-Inspired Cyber Fleet Theme
  BRAND_COLORS: {
    DARK: "#0A0A1F",      // Deep space background
    NAVY: "#16213e",      // Fleet depth gradient
    BLUE: "#0066FF",      // Primary brand (platforms)
    PURPLE: "#7D4CDB",    // Accent gradients
    CYAN: "#00D4FF",      // Sandbox preview glow
    CYAN_GLOW: "rgba(0, 212, 255, 0.6)", // Live URL highlight
  },
  BACKGROUND_COLOR: "#0A0A1F", // Elasticsearch Dark
  PLATFORM_COLOR: "#0066FF", // Elasticsearch Blue
  FALLBACK_PLAYER_COLOR: "#00D4FF", // Elasticsearch Cyan

  // Animation (keeping for future use if needed)
  GRADIENT_ANIMATION_SPEED: 0.0008,
  PARALLAX_SPEED: 0.0003,
} as const;
