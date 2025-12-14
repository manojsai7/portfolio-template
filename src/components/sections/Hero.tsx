import { personalData } from '../../../data/personal';

export default function Hero() {
  const { hero } = personalData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
          {hero.title}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
          {hero.subtitle}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={hero.cta.primary.href}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            {hero.cta.primary.text}
          </a>
          <a
            href={hero.cta.secondary.href}
            className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            {hero.cta.secondary.text}
          </a>
        </div>
      </div>
    </section>
  );
}
