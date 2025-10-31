import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

interface HomeProps {
  onEnrollClick: (course: string) => void;
}

export default function Home({ onEnrollClick }: HomeProps) {
  return (
    <>
      <Hero onEnrollClick={onEnrollClick} />
      <Courses onEnrollClick={onEnrollClick} />
      <Features />
      <Stats />
      <Testimonials />
    </>
  );
}