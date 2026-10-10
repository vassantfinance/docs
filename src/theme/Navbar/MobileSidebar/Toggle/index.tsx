import React, { type ReactNode } from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';

// Swizzled to render the marketing site's three-bar toggle (js/layout.js
// `.nav-toggle`) instead of Docusaurus's SVG icon. The bars are plain spans so
// custom.css can morph them into an X while the drawer is open — on marketing
// this button is the drawer's only close control, and it stays visible beside
// the panel.
export default function MobileSidebarToggle(): ReactNode {
  const { toggle, shown } = useNavbarMobileSidebar();
  return (
    <button
      onClick={toggle}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
        description: 'The ARIA label for hamburger menu button of mobile navigation',
      })}
      aria-expanded={shown}
      className="navbar__toggle clean-btn"
      type="button"
    >
      <span />
      <span />
      <span />
    </button>
  );
}
