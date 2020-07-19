export default (bloggers) => {
  const editedBloggers = [];
  for (let blogger of bloggers) {
    const keys = Object.keys(blogger.interests);
    const filtered = keys.filter((key) => blogger.interests[key]);
    blogger = { ...blogger, interests: filtered.join(",") };
    editedBloggers.push(blogger)
  }
  return editedBloggers;
};
