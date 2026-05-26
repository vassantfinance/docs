import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  accent: 'pink' | 'cyan';
  icon: ReactNode;
  description: ReactNode;
  to: string;
};

const DiscoverIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <polygon points="15.5 8.5 13 13 8.5 15.5 11 11" />
  </svg>
);

const ModelIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
    <circle cx="9" cy="6" r="2" fill="currentColor" />
    <circle cx="15" cy="12" r="2" fill="currentColor" />
    <circle cx="8" cy="18" r="2" fill="currentColor" />
  </svg>
);

const InvestIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 17l6-6 4 4 8-9" />
    <polyline points="15 6 21 6 21 12" />
  </svg>
);

const FeatureList: FeatureItem[] = [
  {
    title: 'Discover',
    accent: 'cyan',
    icon: DiscoverIcon,
    to: '/docs/category/discover',
    description: <>Get the lay of the land and learn how Vassant thinks about investing.</>,
  },
  {
    title: 'Model',
    accent: 'pink',
    icon: ModelIcon,
    to: '/docs/category/model',
    description: <>Set up your budget and allocations. Tell Vassant what you're working with.</>,
  },
  {
    title: 'Invest',
    accent: 'cyan',
    icon: InvestIcon,
    to: '/docs/category/invest',
    description: <>Once your model is dialed in, this is where the actual investing happens.</>,
  },
];

function Feature({ title, accent, icon, description, to }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <Link to={to} className={styles.featureCard}>
        <div className={clsx(styles.iconWrap, styles[`accent_${accent}`])}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDesc}>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
