import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.proflare.dev",
  integrations: [
    starlight({
      title: "ProFlare Docs",
      customCss: ["./src/styles/custom.css"],
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/darkflareplays8" },
      ],
      sidebar: [
        {
          label: "npm",
          items: [
            {
              label: "sigv4-lite",
              items: [
                { label: "Overview", link: "/npm/sigv4-lite/" },
                { label: "API", link: "/npm/sigv4-lite/api/" },
                { label: "Examples", link: "/npm/sigv4-lite/examples/" },
              ],
            },
            {
              label: "ascii-stream",
              items: [
                { label: "Overview", link: "/npm/ascii-stream/" },
                { label: "CLI Reference", link: "/npm/ascii-stream/cli/" },
                { label: "Examples", link: "/npm/ascii-stream/examples/" },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
