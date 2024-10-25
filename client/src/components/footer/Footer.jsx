import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <h3>Disclaimer</h3>
          <p>
            We are not affiliated or endorsed by an social media platform. We do
            not host any videos or images on our servers. All rights belong to
            their respective owners.
          </p>
        </div>
        <div>
          <h3>Legal</h3>
          <p>
            By using socialdownloader to download media you agree to the
            following.
          </p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div>
          <h3>My sites</h3>
          <a href="https://vicurl.vercel.app/">VicURL Shortener</a>
        </div>
      </div>
    </>
  );
}
