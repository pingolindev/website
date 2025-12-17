import { Component, createSignal } from 'solid-js';

const Header: Component = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

  return (
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a href="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span class="text-xl font-bold text-gray-900">Pingolin</span>
            </a>
          </div>

          <div class="hidden md:flex items-center space-x-8">
            <a href="#features" class="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#apps" class="text-gray-600 hover:text-gray-900 transition-colors">Apps</a>
            <a href="#security" class="text-gray-600 hover:text-gray-900 transition-colors">Security</a>
            <a href="https://account.pingolin.com/login" class="text-gray-600 hover:text-gray-900 transition-colors">Sign In</a>
            <a href="https://account.pingolin.com/register" class="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
              Get Started
            </a>
          </div>

          <button
            class="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen())}
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={mobileMenuOpen() ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {mobileMenuOpen() && (
          <div class="md:hidden py-4 space-y-4">
            <a href="#features" class="block text-gray-600 hover:text-gray-900">Features</a>
            <a href="#apps" class="block text-gray-600 hover:text-gray-900">Apps</a>
            <a href="#security" class="block text-gray-600 hover:text-gray-900">Security</a>
            <a href="https://account.pingolin.com/login" class="block text-gray-600 hover:text-gray-900">Sign In</a>
            <a href="https://account.pingolin.com/register" class="block bg-primary-500 text-white px-4 py-2 rounded-lg text-center">
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
