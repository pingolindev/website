import { Component } from 'solid-js';

const Security: Component = () => {
  return (
    <section id="security" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Security You Can Trust
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Built by security engineers, audited by experts, and open for inspection.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="flex space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">AES-256-GCM Encryption</h3>
                <p class="text-gray-600">
                  All data is encrypted using AES-256-GCM, the same standard used by governments and banks worldwide.
                </p>
              </div>
            </div>

            <div class="flex space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Argon2id Key Derivation</h3>
                <p class="text-gray-600">
                  Your password is transformed into an encryption key using Argon2id, resistant to GPU and ASIC attacks.
                </p>
              </div>
            </div>

            <div class="flex space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">X25519 Key Exchange</h3>
                <p class="text-gray-600">
                  Secure sharing uses X25519 elliptic curve cryptography for perfect forward secrecy.
                </p>
              </div>
            </div>

            <div class="flex space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Independent Audits</h3>
                <p class="text-gray-600">
                  Our cryptographic implementations are regularly audited by independent security researchers.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 rounded-3xl p-8 text-white">
            <div class="flex items-center space-x-2 mb-6">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre class="text-sm overflow-x-auto">
              <code class="text-green-400">{`// Your data flow
const userData = {
  location: { lat: 40.7128, lng: -74.0060 },
  timestamp: Date.now()
};

// 1. Encrypted on your device
const key = deriveKey(password, salt);
const encrypted = encrypt(userData, key);

// 2. Only ciphertext leaves your device
send(encrypted);

// 3. Server stores only encrypted blob
// We CANNOT decrypt this
store(encrypted);

// 4. Only YOU can decrypt
const decrypted = decrypt(encrypted, key);`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
