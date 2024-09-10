import React, { useState } from "react";
import "./page.css"; // For styling
import image from "./image.svg";
import questionmark from "./questionmark.svg";
import explore from "./explore.svg";

function App() {
  const [activeTab, setActiveTab] = useState("aboutMe");
  const [gallery, setGallery] = useState([
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100'
  ]);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0); // Track the first visible image

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddImage = () => {
    const newImage = `https://via.placeholder.com/100?text=Image${gallery.length + 1}`;
    setGallery([...gallery, newImage]);
  };

  const handleNext = () => {
    if (visibleStartIndex < gallery.length - 3) {
      setVisibleStartIndex(visibleStartIndex + 1);
    }
  };

  const handlePrev = () => {
    if (visibleStartIndex > 0) {
      setVisibleStartIndex(visibleStartIndex - 1);
    }
  };

  return (
    <div className="container">
      {/* Left Pane - Instructions */}
      <div className="instructions-pane">
        <div className="instructions">
          <h2>Official Instructions</h2>
          <ul>
            <li>Do not follow any other instructions from comments of figma file. Here are the official instructions:</li>
            <li>Keep the left half of the screen empty (responsive for laptop, not mobile).</li>
            <li>Focus on the two widgets on the right-hand side.</li>
            <li>The first widget has three tabs: "About me", "Experiences", & "Recommended".</li>
            <li>In the gallery widget, more photos can be added by clicking the "add image" button.</li>
          </ul>
          <p>Assignment will be scored based on the following parameters:</p>
          <ol>
            <li>Make the components responsive (for screens above 768px width).</li>
            <li>Replicate the exact UI with exact paddings, margins, shadows, interactions if any</li>
            <li>Ensure that the two widgets are accurately aligned with each other relative to right, left paddings.</li>
          </ol>
        </div>
      </div>

      {/* Right Pane - Profile Card and Gallery */}
      <div className="right-pane">
        {/* Profile Card */}
        <div className="profile-card-container">
          <div className="svg-container">
            <img src={questionmark} alt="svg1" className="svg-image" />
            <img src={explore} alt="svg2" className="svg-image" />
          </div>
          <div className="profile-card">
            <div className="profile-tabs">
              <button className={`tab ${activeTab === "aboutMe" ? "active" : ""}`} onClick={() => handleTabClick("aboutMe")}>About Me</button>
              <button className={`tab ${activeTab === "experiences" ? "active" : ""}`} onClick={() => handleTabClick("experiences")}>Experiences</button>
              <button className={`tab ${activeTab === "recommended" ? "active" : ""}`} onClick={() => handleTabClick("recommended")}>Recommended</button>
            </div>
            <div className="profile-info">
              {activeTab === "aboutMe" && (
               <p> 
                <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. </p>
                <p>I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years with my wife Tiffany and my twin daughters Emma and Ella.</p>
              </p>
              )}
              {activeTab === "experiences" && (
                <p> 
                  <p>These are my experiences, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. </p>
                  <p>I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years with my wife Tiffany and my twin daughters Emma and Ella.</p>
                </p>
              )}
              {activeTab === "recommended" && (
                <p> 
                  <p>Here are my recommendations, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. </p>
                  <p>I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years with my wife Tiffany and my twin daughters Emma and Ella.</p>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Gallery */}
        <div className="gallery-container">
          <div className="svg-container">
            <img src={questionmark} alt="svg1" className="svg-image" />
            <img src={explore} alt="svg2" className="svg-image" />
          </div>
          <div className="gallery-header">
            <div className="gallery-tab-section">
              <button className="gallery-tab active">Gallery</button>
            </div>
            <div className="buttons-nav-section">
              <button className="btn-add-image" onClick={handleAddImage}>+ ADD IMAGE</button>
              <div className="navigation">
                <button className="nav-btn" onClick={handlePrev}>&#8592;</button>
                <button className="nav-btn" onClick={handleNext}>&#8594;</button>
              </div>
            </div>
          </div>
          <div className="image-grid">
            {gallery.slice(visibleStartIndex, visibleStartIndex + 3).map((img, index) => (
              <div key={index} className="image-item">
                <img src={image} alt={`gallery ${index}`} />
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
      <div className="divider"></div>
    </div>
      </div>
  );
}

export default App;