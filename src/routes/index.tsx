import { Link, Outlet } from 'remix';

export default function Index() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {/* Additional navigation links can be added here */}
      </nav>
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
    </div>
  );
}
