import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { extractLeadingEmoji } from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import type { Props } from '@theme/DocCard/Heading/Icon';
import {
  Calculator,
  ChartColumn,
  ChartPie,
  CircleArrowDown,
  CircleArrowUp,
  Compass,
  ExternalLink,
  FileText,
  Folder,
  GraduationCap,
  Landmark,
  Link,
  ListPlus,
  Lock,
  LockOpen,
  RefreshCw,
  RefreshCwOff,
  SlidersHorizontal,
  Sparkles,
  Split,
  SquarePen,
  TrendingUp,
  Unlink,
  Vault,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

import styles from './styles.module.css';

// Swizzled to replace Docusaurus's fallback emoji (📄 for docs, 🗃 for
// categories, 🔗 for external links) with Lucide line icons. 🗃 has no glyph
// in most system fonts and renders as a tofu box.
//
// A page picks its icon by name: `sidebar_custom_props: { icon: vault }` in a
// doc's frontmatter, or `"customProps": { "icon": "wallet" }` in a
// _category_.json. Names are Lucide's kebab-case names (lucide.dev/icons);
// add the import and an entry below to use a new one. A label that starts with
// its own emoji still gets that emoji, same as upstream.
const ICONS: Record<string, LucideIcon> = {
  calculator: Calculator,
  'chart-column': ChartColumn,
  'chart-pie': ChartPie,
  'circle-arrow-down': CircleArrowDown,
  'circle-arrow-up': CircleArrowUp,
  compass: Compass,
  'graduation-cap': GraduationCap,
  landmark: Landmark,
  link: Link,
  'list-plus': ListPlus,
  lock: Lock,
  'lock-open': LockOpen,
  'refresh-cw': RefreshCw,
  'refresh-cw-off': RefreshCwOff,
  'sliders-horizontal': SlidersHorizontal,
  sparkles: Sparkles,
  split: Split,
  'square-pen': SquarePen,
  'trending-up': TrendingUp,
  unlink: Unlink,
  vault: Vault,
  wallet: Wallet,
};

function iconFor(item: Props['item']): LucideIcon {
  const name = item.customProps?.icon;
  if (typeof name === 'string' && ICONS[name]) {
    return ICONS[name];
  }
  if (item.type === 'category') {
    return Folder;
  }
  return item.type === 'link' && !isInternalUrl(item.href) ? ExternalLink : FileText;
}

export default function DocCardHeadingIcon({ item, icon }: Props): ReactNode {
  const ownEmoji = 'label' in item ? extractLeadingEmoji(item.label).emoji : null;
  const Icon = iconFor(item);
  return (
    <span
      className={clsx(
        ThemeClassNames.docs.docCard.icon,
        ownEmoji ? styles.cardTitleEmoji : styles.cardTitleIcon,
      )}
    >
      {ownEmoji ? icon : <Icon strokeWidth={1.75} aria-hidden="true" />}
    </span>
  );
}
