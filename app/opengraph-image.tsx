import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pietro Kucharski — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#080c10",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            display: "flex",
          }}
        />
        {/* Green glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: 50,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,135,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        {/* Ember glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -60,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,53,0.14) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Top label */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                background: "#00ff87",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#8893a0",
                fontSize: "18px",
                letterSpacing: "3px",
              }}
            >
              PORTFOLIO
            </span>
          </div>

          {/* Center: name block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "3px",
                  background: "#00ff87",
                  display: "flex",
                }}
              />
              <span
                style={{
                  color: "#00ff87",
                  fontSize: "19px",
                  letterSpacing: "4px",
                }}
              >
                FULL STACK DEVELOPER
              </span>
            </div>

            <div
              style={{
                fontSize: "90px",
                fontWeight: 800,
                color: "#f2f3f2",
                lineHeight: 1,
                display: "flex",
              }}
            >
              Pietro Kucharski
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "28px",
              }}
            >
              <div
                style={{
                  padding: "9px 20px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#8893a0",
                  fontSize: "17px",
                  display: "flex",
                }}
              >
                TypeScript
              </div>
              <div
                style={{
                  padding: "9px 20px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#8893a0",
                  fontSize: "17px",
                  display: "flex",
                }}
              >
                Next.js
              </div>
              <div
                style={{
                  padding: "9px 20px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#8893a0",
                  fontSize: "17px",
                  display: "flex",
                }}
              >
                Node.js
              </div>
              <div
                style={{
                  padding: "9px 20px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#8893a0",
                  fontSize: "17px",
                  display: "flex",
                }}
              >
                React
              </div>
            </div>
          </div>

          {/* Bottom: location */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "#8893a0", fontSize: "18px" }}>
              Brusque, SC — Brasil
            </span>
          </div>
        </div>

        {/* Gradient bar at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to right, #00ff87, #ff6b35)",
            display: "flex",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
