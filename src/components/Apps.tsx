import { Component } from 'solid-js';

const Apps: Component = () => {
  return (
    <section id="apps" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Apps
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Privacy-first alternatives to the apps you use every day.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tracks */}
          <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Tracks</h3>
                <p class="text-gray-500">Location Tracking</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6">
              Share your real-time location with family and friends. View location history on a map,
              create geofences with notifications, and track multiple devices - all end-to-end encrypted.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Real-time location sharing
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Encrypted location history
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Geofence alerts
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Battery-efficient background tracking
              </li>
            </ul>
            <a
              href="https://tracks.pingolin.com"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Open Tracks
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Scales */}
          <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Scales</h3>
                <p class="text-gray-500">Personal Finance</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6">
              Connect your bank accounts, track spending, create budgets, and monitor your financial goals.
              All your financial data encrypted so only you can see it.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Bank account sync via Plaid
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Encrypted transaction history
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Budget tracking
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Spending analytics
              </li>
            </ul>
            <a
              href="https://scales.pingolin.com"
              class="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
            >
              Open Scales
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
