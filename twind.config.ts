import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  // darkMode: "class",
  theme: {
    extend: {
      width: {
        sidebar: '318px',
        price: '44px',
        content: "475px"
      }
    }
  }, 
} as Options;
