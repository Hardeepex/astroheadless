import { Link } from 'remix';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to the about page of our website. Here you can find information about our company, our values, and our team.</p>
      <nav>
        <Link to="/">Go back to Home</Link>
      </nav>
    </div>
  );
}

export default About;
