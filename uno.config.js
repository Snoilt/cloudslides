import { defineConfig, presetUno } from "unocss";
import { presetIcons } from "unocss/preset-icons";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      collections: {
        mdi: () =>
          import("@iconify-json/mdi/icons.json").then((i) => i.default),
      },
    }),
  ],
});
