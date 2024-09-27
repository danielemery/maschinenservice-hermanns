// ESM syntax (e.g. `export default`) is supported in Eleventy v3.0+
export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
