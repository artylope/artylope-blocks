interface PointItemProps {
  title: string;
  description: string;
  icon?: string;
}

const PointItem = ({ title, description, icon }: PointItemProps) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      {icon && (
        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mt-1">
          <span className="text-primary-600">{icon}</span>
        </div>
      )}
      <div className="flex-1">
        <h4 className="font-semibold content-strong mb-2">{title}</h4>
        <p className="content-default leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default PointItem;