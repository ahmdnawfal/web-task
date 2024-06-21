import Services from '@/components/services';
import LandingPage from '@/components/landing-page';
import Navbar from '@/components/navbar';
import Customers from '@/components/customers';
import Teams from '@/components/teams';
import { cookies } from 'next/headers';
import { getCookie } from 'cookies-next';

export default function Home() {
  const languange = getCookie('language', { cookies }) || 'id';

  return (
    <main>
      <Navbar language={languange} />
      <section id='home'>
        <LandingPage language={languange} />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='customers'>
        <Customers />
      </section>
      <section id='teams'>
        <Teams />
      </section>
    </main>
  );
}
