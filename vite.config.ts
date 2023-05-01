import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 导入 Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
      ],
    }),
  ],
  
})
