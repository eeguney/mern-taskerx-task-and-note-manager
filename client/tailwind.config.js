module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    colors: {
      theme_blue: "#0084FE",
      theme_gray: "#f3f3f3",
      theme_gray2: "#dfdfdf",
      theme_gray3: "#f8f8f8",
      theme_gray4: "#ccc",
      theme_black: "#222222",
      theme_white: "#ffffff",
      theme_transparentWhite: "#ffffff17",
      theme_red: "#ff0000",
      theme_green: "#00B712"
    },
    minWidth: {
      "70px": "70px"
    },
    backgroundImage: {
      allTasks: "url('/public/images/alltasks.png')",
      hobby: "url('/public/images/hobby.jpg')",
      personal: "url('/public/images/personal.jpg')",
      shopping: "url('/public/images/shopping.jpg')",
      works: "url('/public/images/works.png')",
    },
    extend: {
      spacing: {
        "negative-1": "-1px"
      }
    },
  },
  plugins: [],
}
