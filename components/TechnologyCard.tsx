'use client';

type TechnologyCardProps = {
  name: string;
  gradientId: string;
  svgPath: string;
};

export default function TechnologyCard({ name, gradientId, svgPath }: TechnologyCardProps) {
  return (
    <div className="p-3 rounded-2xl transition flex flex-col items-center w-[200px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={
          name === "Swift" || name === ".Net" || name === "Flutter" || name === "React.js"
            ? "0 0 24 24"
            : "0 0 128 128"
        }
        className="w-16 h-16"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ce9f8" />
            <stop offset="100%" stopColor="#1B1198" />
          </linearGradient>
        </defs>

        {name === "React.js" && (
          <circle cx="12" cy="11.999" r="2.147" fill={`url(#${gradientId})`} />
        )}

        <path fill={`url(#${gradientId})`} d={svgPath} />
      </svg>
      <span className="mt-5 text-white font-medium">{name}</span>
    </div>
  );
}
