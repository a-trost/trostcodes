module.exports = (children) => {
  let parsedChildren = children.join("");

  // Parse inline code
  parsedChildren = parsedChildren.replace(
    /`(.*?)`/g,
    '<code class="inline">$1</code>'
  );

  return parsedChildren;
};
