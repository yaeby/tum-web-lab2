/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './index.html',
    './scripts/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      },
      colors: {
        'primary-bg': 'var(--primary-bg)',
        'text-color': 'var(--text-color)',
        'accent-color': 'var(--accent-color)',
        'input-bg': 'var(--input-bg)',
        'input-border': 'var(--input-border)',
      }
    }
  },
  plugins: [],
}