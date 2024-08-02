/**
 * @author        guang <531311582@qq.com>
 * @date          2024-08-03 00:22:33
 * Copyright © YourCompanyName All rights reserved
 */
module.exports = {
  // 从标准配置中继承规则
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "prettier",
  ],
  plugins: ["stylelint-prettier", "stylelint-scss"],
  overrides: [
    // 扫描.vue和.html文件中的<style>标签内的样式
    {
      files: ["**/*.{vue,html}"],
      customSyntax: "postcss-html",
    },
    // 可能需要为.scss文件设置单独的customSyntax
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
