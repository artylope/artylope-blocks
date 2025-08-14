interface TimelineItemProps {
  phase: string;
  title: string;
  description: string;
  duration?: string;
  isLast?: boolean;
}

const TimelineItem = ({ phase, title, description, duration, isLast = false }: TimelineItemProps) => {
  return (
    <div className="flex items-start gap-4 pb-8">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-4 h-4 bg-primary-500 rounded-full border-2 border-white shadow-sm"></div>
        {!isLast && <div className="w-px h-16 bg-border-default mt-2"></div>}
      </div>
      <div className="flex-1 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-primary-600 uppercase tracking-wide">
            {phase}
          </span>
          {duration && (
            <span className="text-xs text-zinc-500">
              • {duration}
            </span>
          )}
        </div>
        <h4 className="font-semibold content-strong mb-2">{title}</h4>
        <p className="content-default leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;