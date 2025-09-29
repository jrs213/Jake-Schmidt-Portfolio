import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  theme: {
    colors: {
      primary: '#1e293b', // deep slate blue
      primaryDark: '#0f172a', // even deeper slate
      background: '#f8fafc', // very light blue-gray
      surface: '#fff', // card/section backgrounds
      text: '#1e293b', // slate for main text
      textMuted: '#64748b', // muted slate
      accentGreen: '#22c55e', // modern green accent
      accentSand: '#f5e9da', // sand for warmth
      accentBlue: '#2563eb', // blue accent for links/buttons
    },
  },
})
