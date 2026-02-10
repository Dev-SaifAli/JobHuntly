 import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import JobCard from './components/JobCard';

export default function Home() {
  const categories = [
    { icon: "🎨", title: "Design", openings: 235 },
    { icon: "💼", title: "Sales", openings: 756 },
    { icon: "📱", title: "Marketing", openings: 140 },
    { icon: "💻", title: "Engineering", openings: 436 },
    { icon: "📊", title: "Business", openings: 294 },
    { icon: "👥", title: "Human Resource", openings: 167 },
  ];

  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Explore by <span className="text-blue-600">category</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <CategoryCard
                key={index}
                icon={cat.icon}
                title={cat.title}
                openings={cat.openings}
              />
            ))}
          </div>
        </div>
      </section>

{/* Featured Jobs */}
<section className="py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">Featured <span className="text-blue-600">jobs</span></h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <JobCard
        title="Frontend Developer"
        company="Google"
        location="Remote"
        type="Full-time"
        salary="$80k-$120k"
      />
      {/* Add more JobCards */}
    </div>
  </div>
</section>    </main>
  );
}
