import Footer from "../../components/footer/Footer";
import Header from "../../components/head/Header";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="body-container">
        <Header />
        <h1 className="notfound">404 Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go to homepage</Link>
        <p>
          If you believe this is an error, please contact the website
          administrator. Using the contact form <a href="/">here</a>
        </p>
        <p>Thank you.</p>
        <Footer />
      </div>
    </>
  );
}
