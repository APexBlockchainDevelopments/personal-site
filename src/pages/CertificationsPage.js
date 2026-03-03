import SiteNav from '../components/SiteNav';
import Certs from '../Certs';

export default function CertificationsPage() {
  return (
    <div className="App">
      <SiteNav />
      <main>
        <Certs />
      </main>
    </div>
  );
}
