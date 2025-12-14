import { experiences } from '../../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {new Date(exp.startDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                  })}{' '}
                  -{' '}
                  {exp.endDate === 'Present'
                    ? 'Present'
                    : new Date(exp.endDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                      })}
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
