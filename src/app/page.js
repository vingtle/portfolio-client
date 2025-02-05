'use client'
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeProvider from './components/ThemeProvider';
import VideoIntro from './components/VideoIntro';


export default function Home() {
  const [videoFinished, setVideoFinished] = useState(false);

  return (
    <ThemeProvider>
      {!videoFinished ? (
        <VideoIntro onVideoEnd={() => setVideoFinished(true)} />
      ) : (
        <>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </>
    )}
  </ThemeProvider>
);
}