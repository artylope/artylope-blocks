interface ImpactMetricProps {
  value: string;
  unit?: string;
  label: string;
  description?: string;
}

const ImpactMetric = ({ value, unit, label, description }: ImpactMetricProps) => {
  return (
    <div className="text-center p-6">
      <div className="mb-2">
        <span className="text-4xl md:text-5xl font-bold content-primary">
          {value}
        </span>
        {unit && (
          <span className="text-2xl md:text-3xl font-bold content-primary">
            {unit}
          </span>
        )}
      </div>
      <div className="font-semibold content-strong mb-2">
        {label}
      </div>
      {description && (
        <p className="text-sm content-default leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default ImpactMetric;