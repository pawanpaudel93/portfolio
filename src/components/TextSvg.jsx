export default function TextSvg({ title }) {
  return (
    <svg width="100%" height="300px">
      <rect x="0" y="0" fill="#95B3D7"></rect>
      <a
        href="https://www.google.com"
        className="cursor-pointer"
        target="_blank"
      >
        <text
          x="20"
          y="50%"
          className="text-center fill-white break-all text-[40px]"
        >
          {title}
        </text>
      </a>
    </svg>
  );
}
