interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepListProps {
  steps: Step[];
  orientation?: "vertical" | "horizontal";
  light?: boolean;
}

export default function StepList({
  steps,
  orientation = "vertical",
  light = false,
}: StepListProps) {
  if (orientation === "horizontal") {
    return (
      <div className="relative">
        <div className="hidden md:block absolute top-8 left-16 right-16 h-px bg-white/20 z-0" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center z-10"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 ${
                  light
                    ? "bg-white text-smoky-forest"
                    : "bg-amber text-white"
                }`}
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                {step.number}
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  light ? "text-hollow" : "text-white"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  light ? "text-slate" : "text-white/75"
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <ol className="relative space-y-0">
      {steps.map((step, index) => (
        <li key={step.number} className="flex gap-6">
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-full bg-smoky-forest text-white flex items-center justify-center text-base font-bold flex-shrink-0"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {step.number}
            </div>
            {index < steps.length - 1 && (
              <div className="w-px bg-smoky-forest/25 flex-1 mt-2 mb-2" style={{ minHeight: "2rem" }} />
            )}
          </div>
          <div className={`pb-8 ${index === steps.length - 1 ? "pb-0" : ""}`}>
            <h3 className="text-hollow font-semibold text-lg mb-1">
              {step.title}
            </h3>
            <p className="text-slate leading-relaxed">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
