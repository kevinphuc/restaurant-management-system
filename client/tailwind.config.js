/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'image-1': "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        // 'image-2': "url('https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        // 'image-3': "url('https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        // 'image-4': "url('https://images.unsplash.com/photo-1604328471151-b52226907017?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        // 'image-5': "url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        // 'image-6': "url('https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
        'image-7': "url('https://images.unsplash.com/photo-1618681462303-7a8bfebfdcca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'image-1': "url('../public/bar_restaurant.jpg')",
        'image-2': "url('../public/bar.jpg')",
        'image-3': "url('../public/restaurant_view.jpg')",
        'image-4': "url('../public/restaurant2.jpg')",
        'image-5': "url('../public/restaurant.jpg')",
        'image-6': "url('../public/food_background.jpg')",
      },
      colors: {
        brightColor: "#F4511F",
        backgroundColor: "#708238",
        lightText: "#959595",
      },
    },
  },
  plugins: [],
}