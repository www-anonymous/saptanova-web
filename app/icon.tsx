import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070E1E",
          borderRadius: "6px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Saptanova Primary Star */}
          <path
            d="M50 0 C49 32 32 49 0 50 C32 51 49 68 50 100 C51 68 68 51 100 50 C68 49 51 32 50 0 Z"
            fill="#38BDF8"
          />
          {/* Secondary Star */}
          <path
            d="M82 12 C81 20 74 24 68 25 C74 26 81 30 82 38 C83 30 90 26 96 25 C90 24 83 20 82 12 Z"
            fill="#0066FF"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}