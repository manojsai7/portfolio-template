import { personalData } from '../../../data/personal';

export default function About() {
  const { about } = personalData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {about.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {about.description}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {about.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-gray-800 dark:text-gray-200 font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
