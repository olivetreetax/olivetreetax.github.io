/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './*.md',
    './_services/**/*.md',
    './_team/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'mfa-evergreen': '#1F3D2B',
        'mfa-cream':     '#F7F6F2',
        'mfa-gold':      '#C6A75E',
        'mfa-sage':      '#9EB5A3',
        'mfa-slate':     '#4A4F55',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'serif'],
        sans:  ['Inter', 'sans-serif'],
        ui:    ['DM Sans', 'sans-serif'],
      },
      borderRadius: { 'mfa': '4px' },
      boxShadow: {
        'mfa-card': '0 4px 6px -1px rgba(31,61,43,0.1), 0 2px 4px -1px rgba(31,61,43,0.06)',
      }
    }
  },
  plugins: [],
}