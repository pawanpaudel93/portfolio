export default function TextSvg({ title }) {
  return (
    <svg width="100%">
      <rect x="0" y="0" fill="#95B3D7"></rect>
      <a
        href="https://www.google.com"
        style={{ cursor: "pointer" }}
        target="_blank"
      >
        <text
          x="10"
          y="100"
          className="text-center"
          style={{
            fontSize: "40px",
            fill: "white",
            wordBreak: "break-all",
          }}
        >
          {title}
        </text>
      </a>
    </svg>
  );
}