module.exports = (children) => {
  let parsedChildren = children.join("");

  // Parse inline code
  parsedChildren = parsedChildren.replace(
    /`(.*?)`/g,
    '<code className="inline">$1</code>'
  );

  return parsedChildren;
};
