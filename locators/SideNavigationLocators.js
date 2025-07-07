export const SideNavigationLocators = {
  pimLink: 'a[role="link"]:has-text("PIM")', // More specific, combining role and text
  leaveLink: 'a[role="link"]:has-text("Leave")', // Using the same pattern as PIM for consistency
  // Example if it's an item in a list:
  // pimLink: '.oxd-main-menu-item-wrapper:has-text("PIM") a'
};
