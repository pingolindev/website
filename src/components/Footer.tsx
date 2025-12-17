import { Component } from 'solid-js';

const Footer: Component = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span class="text-xl font-bold">Pingolin</span>
            </div>
            <p class="text-gray-400 max-w-md">
              Privacy-first applications for location tracking and personal finance.
              Your data stays yours - encrypted end-to-end so even we can't see it.
            </p>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Products</h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="https://tracks.pingolin.com" class="hover:text-white transition-colors">
                  Tracks
                </a>
              </li>
              <li>
                <a href="https://scales.pingolin.com" class="hover:text-white transition-colors">
                  Scales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Account</h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="https://account.pingolin.com/login" class="hover:text-white transition-colors">
                  Sign In
                </a>
              </li>
              <li>
                <a href="https://account.pingolin.com/register" class="hover:text-white transition-colors">
                  Create Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            &copy; {currentYear} Pingolin. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 sm:mt-0">
            <a href="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" class="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
