import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-US",
  title: "CHEN.ZHANG's BLOG", // 強ければ強いほど責任を取りなさい
  base: "/vuepress-blog/",

  themeConfig: {
    logo: "",
    navbar: [
      {
        text: "俺の日本語",
        link: "/nihongo/",
      },
    ],
    sidebar: {
      "/nihongo/": [
        {
          text: "JLPT聴解",
          children: ["/nihongo/jlpt/n1.201707.md"],
        },
        {
          text: "文法",
          children: ["/nihongo/try/n1.md", "/nihongo/try/n2.md"],
        },
        {
          text: "好きな曲",
          children: [
            "/nihongo/kyoku/アイロニ.md",
            "/nihongo/kyoku/夜に駆ける.md",
            "/nihongo/kyoku/ドライフラワー.md",
            "/nihongo/kyoku/こたえあわせ.md",
            "/nihongo/kyoku/yama『Oz.』.md",
          ],
        },
      ],
    },
  },
});
