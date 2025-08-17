export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  id: string
) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -160; // chiều cao navbar
    const y =
      section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
