/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/scripts/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/keywords.json',
  ],
  theme: {
    fontFamily: {
      monospace: ['Fira Code', 'monospace']
    },
    colors: {
      'blue-highlight': '#313347',
      'blue-1': '#282a3a',
      'blue-2': '#1e1f2b',
      'blue-3': '#161821',
      'white': '#eaf2f1',
      'red': '#ff657a',
      'orange-1': '#ffefe6',
      'orange-2': '#ffab79',
      'orange-3': '#ff9b5e',
      'yellow': '#ffd76d',
      'blue': '#9cd1bb',
      'purple': '#c39ac9',
      'green': '#bad761',
      'green-node': '#83cd29',
      'blue-react': '#00d8ff',
      'blue-tailwind': '#16bdb8',
      'white-prisma': '#f2f2f2'
    },
    extend: {
      width: {
        'subtopic-clamp': 'clamp(0px, 90%, 1000px)',
        'home-clamp': 'clamp(0px, 90%, 850px)',
        'posts-clamp': 'clamp(0px, 90%, 1200px)',
        'post-view-clamp': 'clamp(0px, 90%, 1300px)',
        '404-clamp': 'clamp(150px, 90%, 320px)',
      },
      boxShadow: {
        card: '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)',
      },
      screens: {
        tc: '895px'
      }
    }
  },
  plugins: [],
};