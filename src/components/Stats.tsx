import { TrendingUp, Users, Building2, Star } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '5000+',
      label: 'Students Trained',
      description: 'Across all courses',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      value: '200+',
      label: 'Hiring Partners',
      description: 'Top MNCs and startups',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Placement Rate',
      description: 'Within 3 months',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Student Rating',
      description: 'Based on 2000+ reviews',
      gradient: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600">Numbers that speak for our excellence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
