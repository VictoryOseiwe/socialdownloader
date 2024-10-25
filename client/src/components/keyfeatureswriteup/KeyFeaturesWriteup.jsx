import { Download, Forward, Quality, Settings } from "../ReactIcons";
import "./KeyFeaturesWriteup.css";
import KeyFeatureCard from "./keyfeaturecard/KeyFeatureCard";

export default function KeyFeaturesWriteup() {
  return (
    <>
      <div className="keyfeaturegrid">
        <div className="keyfeaturegridfirstitem">
          <h2>Key Features</h2>
          <p>
            Our video downloader offers a range of powerful features to make
            your life easier.
          </p>
        </div>
        <div className="keyfeaturegridseconditem">
          <KeyFeatureCard
            delay="1000"
            icon={Forward}
            title="Fast and Reliable"
            description="Our video downloader is lightning-fast and ensures a smooth downloading experience."
          />
          <KeyFeatureCard
            delay="1200"
            title="Download Any Video"
            description="Easily download videos from a wide range of platforms, including YouTube, Facebook, Instagram, and more."
            icon={Download}
          />
          <KeyFeatureCard
            delay="300"
            title="High-Quality Downloads"
            description="Enjoy high-quality downloads with the option to choose different resolutions."
            icon={Quality}
          />
          <KeyFeatureCard
            delay="400"
            title="Customizable Settings"
            description="Customize your download settings to fit your preferences and needs."
            icon={Settings}
          />
        </div>
      </div>
    </>
  );
}
