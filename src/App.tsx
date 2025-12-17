import { Component } from 'solid-js';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Apps from './components/Apps';
import Security from './components/Security';
import Footer from './components/Footer';

const App: Component = () => {
  return (
    <div class="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Apps />
        <Security />
      </main>
      <Footer />
    </div>
  );
};

export default App;
