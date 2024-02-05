"use client"
import React, { useRef, useEffect } from 'react';
import Team from "./components/Team";
import Landing from "./components/Landing";
import Rov from "./components/Rov";
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="scroll-container">
        <Landing />
        <Rov />
        <Team />
        <Footer/>
    </main>
  );
}