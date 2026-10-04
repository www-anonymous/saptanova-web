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
          background: "#ffffff",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main 4-point concave star in Official Saptanova Blue */}
          <path
            d="M50 0 C49 32 32 49 0 50 C32 51 49 68 50 100 C51 68 68 51 100 50 C68 49 51 32 50 0 Z"
            fill="#0052cc"
          />
          {/* Small top-right accent star */}
          <path
            d="M82 12 C81 20 74 24 68 25 C74 26 81 30 82 38 C83 30 90 26 96 25 C90 24 83 20 82 12 Z"
            fill="#0052cc"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}