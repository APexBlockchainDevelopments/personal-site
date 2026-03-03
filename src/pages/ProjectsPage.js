import SiteNav from '../components/SiteNav';
import Projects from '../Projects';

export default function ProjectsPage() {
  return (
    <div className="App">
      <SiteNav />
      <main>
        <Projects />
      </main>
    </div>
  );
}
