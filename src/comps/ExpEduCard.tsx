import { Calendar } from 'lucide-react';

interface ExpEduCardProps {
  logo?: string;
  title: string;
  subtitle: string;
  description: string;
  skills?: string[];
  startDate: Date;
  endDate: Date | null;
}

export const ExpEduCard = ({
  logo,
  title,
  subtitle,
  description,
  skills,
  startDate,
  endDate,
}: ExpEduCardProps) => {
  const duration =
    Math.floor((endDate || new Date()).getTime() - startDate.getTime()) /
    (1000 * 60 * 60 * 24 * 365);

  const durationText =
    duration < 1
      ? '< 1 year'
      : `${Math.round(duration)} year${Math.round(duration) > 1 ? 's' : ''}`;

  return (
    <div className="max-h flex flex-row gap-4 mb-6 p-4 bg-gray-50 rounded-lg transition-shadow duration-300">
      {logo && (
        <img className="w-12 h-12 object-contain" src={logo} alt={subtitle} />
      )}

      <div className="w-full flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <span className="text-sm text-gray-500 flex items-center shrink-0 ml-4">
            <Calendar className="w-4 h-4 mr-1" />
            {`${startDate.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
            })} - ${
              endDate
                ? endDate.toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                  })
                : 'Present'
            } (${durationText})`}
          </span>
        </div>
        <p className="text-pink-600 font-medium mb-2">{subtitle}</p>
        <p className="text-gray-600 mb-3 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills?.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
