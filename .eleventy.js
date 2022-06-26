// 11ty configuration
module.exports = config => {
  // Input directory: src
  // Output directory: public

  // The following copies to `public/assets`
  config.addPassthroughCopy("src/assets");

  // Find and copy any `jpg` files, maintaining directory structure.
  // eleventyConfig.addPassthroughCopy("**/*.jpg");

  // 11ty defaults
  return {
    dir: {
      input: 'src',
      output: '_site',
    }
  };
};

