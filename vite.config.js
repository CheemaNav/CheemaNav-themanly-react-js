import React from 'react';

import { defineConfig } from 'vite';

// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://api.themanly.in', // Backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
};

