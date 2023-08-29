export default function TextBox({ title }) {
  return (
    <div className="h-[300px] w-full cursor-pointer flex justify-center items-center">
      <span className="text-center fill-white break-all text-[40px]">
        {title}
      </span>
    </div>
  );
}
