// 11ty configuration
module.exports = config => {
  // Input directory: src
  // Output directory: public
  
  // The following copies to `public/assets`
  config.addPassthroughCopy("src/assets");

  // Copy CSS files
  config.addPassthroughCopy('src/style/style.css')

  // Find and copy any `jpg` files, maintaining directory structure.
  // eleventyConfig.addPassthroughCopy("**/*.jpg");

  // 11ty defaults
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: '_site',
    }
  };
};


// module.exports = function(eleventyConfig) {
//   eleventyConfig.addPassthroughCopy('css')
//   return {
//     passthroughFileCopy: true
//   }
// }