/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "washed-Blue/washed-blue-50": "#fafafd",
        "washed-Blue/washed-blue-100": "#eeeff8",
        "washed-Blue/washed-blue-200": "#e6e7f4",
        "washed-Blue/washed-blue-300": "#dadcef",
        "washed-Blue/washed-blue-400": "#d3d5ec",
        "washed-Blue/washed-blue-500": "#c8cbe7",
        "washed-Blue/washed-blue-600": "#b6b9d2",
        "washed-Blue/washed-blue-700": "#8e90a4",
        "washed-Blue/washed-blue-800": "#6e707f",
        "washed-Blue/washed-blue-900": "#545561",
        "washed-Green/washed-green-50": "#f8fdfb",
        "washed-Green/washed-green-100": "#e8faf1",
        "washed-Green/washed-green-200": "#ddf7eb",
        "washed-Green/washed-green-300": "#cdf4e2",
        "washed-Green/washed-green-400": "#c4f1dc",
        "washed-Green/washed-green-500": "#b5eed3",
        "washed-Green/washed-green-600": "#a5d9c0",
        "washed-Green/washed-green-700": "#81a996",
        "washed-Green/washed-green-800": "#648374",
        "washed-Green/washed-green-900": "#4c6459",
        "Primary-Green/primary-green-50": "#e9f5ef",
        "Primary-Green/primary-green-100": "#bcdfce",
        "Primary-Green/primary-green-200": "#9bcfb6",
        "Primary-Green/primary-green-300": "#6eb995",
        "Primary-Green/primary-green-400": "#51ac81",
        "Primary-Green/primary-green-500": "#269761",
        "Primary-Green/primary-green-600": "#238958",
        "Primary-Green/primary-green-700": "#1b6b45",
        "Primary-Green/primary-green-800": "#155335",
        "Primary-Green/primary-green-900": "#103f29",
        "Primary-Blue/primary-blue-50": "#eeeffd",
        "Primary-Blue/primary-blue-100": "#c9cef9",
        "Primary-Blue/primary-blue-200": "#afb6f6",
        "Primary-Blue/primary-blue-300": "#8a95f2",
        "Primary-Blue/primary-blue-400": "#7481ef",
        "Primary-Blue/primary-blue-500": "#5161eb",
        "Primary-Blue/primary-blue-600": "#4a58d6",
        "Primary-Blue/primary-blue-700": "#3a45a7",
        "Primary-Blue/primary-blue-800": "#2d3581",
        "Primary-Blue/primary-blue-900": "#222963",
        "Neutrals/neutrals-1": "#ffffff",
        "Neutrals/neutrals-2": "#fcfcfd",
        "Neutrals/neutrals-3": "#f5f5f6",
        "Neutrals/neutrals-4": "#f0f0f1",
        "Neutrals/neutrals-5": "#d9d9dc",
        "Neutrals/neutrals-6": "#c0bfc4",
        "Neutrals/neutrals-7": "#8e8c95",
        "Neutrals/neutrals-8": "#5b5966",
        "Neutrals/neutrals-9": "#474553",
        "Neutrals/neutrals-10": "#292637",
        "Neutrals/neutrals-11": "#211f30",
        "Neutrals/neutrals-12": "#171427",
        "Neutrals/neutrals-13": "#030014",
        "brand/brand-washedBlue": "#c8cbe7",
        "brand/brand-washedGreen": "#b5eed3",
        "brand/brand-primaryGreen": "#269761",
        "brand/brand-primaryBlue": "#5161eb",
        "brand/brand-dark": "#030014"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}