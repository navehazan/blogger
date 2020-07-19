export default (selectedBloggers, bloggers) => {
  return bloggers
    .map((blogger, index) => {
      if (selectedBloggers.includes(index)) {
        return blogger.email;
      } else {
        return;
      }
    })
    .filter((email) => email);
};
