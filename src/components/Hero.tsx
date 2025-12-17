import { Component } from 'solid-js';

const Hero: Component = () => {
  return (
    <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Privacy-First Apps for
          <span class="text-primary-500"> Modern Life</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          End-to-end encrypted location tracking and personal finance management.
          Your data stays yours - even we can't see it.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://account.pingolin.com/register"
            class="w-full sm:w-auto bg-primary-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
          >
            Start Free Trial
          </a>
          <a
            href="#apps"
            class="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
          >
            Explore Apps
          </a>
        </div>
        <p class="mt-6 text-sm text-gray-500">
          No credit card required. 14-day free trial.
        </p>
      </div>
    </section>
  );
};

export default Hero;
