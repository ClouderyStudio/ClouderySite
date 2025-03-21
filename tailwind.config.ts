/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        keyframes: {
          "flip-text": {
            "10%": { transform: "translateY(-112%)" },
            "25%": { transform: "translateY(-100%)" },
            "35%": { transform: "translateY(-212%)" },
            "50%": { transform: "translateY(-200%)" },
            "60%": { transform: "translateY(-312%)" },
            "75%": { transform: "translateY(-300%)" },
            "85%": { transform: "translateY(-412%)" },
            "100%": { transform: "translateY(-400%)" },
          },
        },
        animation: {
          "flip-text": "flip-text 8s infinite",
        },
      }
    }
  }
  
  