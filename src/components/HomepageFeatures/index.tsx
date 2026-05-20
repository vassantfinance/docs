import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  accent: 'pink' | 'cyan';
  icon: ReactNode;
  description: ReactNode;
};

const PlanningIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 3v18h18" />
    <path d="M7 15l4-4 3 3 5-6" />
  </svg>
);

const LearningIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z" />
    <path d="M8 7h7M8 11h7M8 15h5" />
  </svg>
);

const ResearchIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

const FeatureList: FeatureItem[] = [
  {
    title: 'Strategic Investment Planning',
    accent: 'pink',
    icon: PlanningIcon,
    description: (
      <>Guidance for portfolio construction, allocation, and long-term planning
      tailored to your goals.</>
    ),
  },
  {
    title: 'Learning Platform',
    accent: 'cyan',
    icon: LearningIcon,
    description: (
      <>Walk-throughs, primers, and reference material to build financial
      fluency at your own pace.</>
    ),
  },
  {
    title: 'Research Tools',
    accent: 'pink',
    icon: ResearchIcon,
    description: (
      <>Deep-dive analyses, market data, and product guides to inform every
      decision.</>
    ),
  },
];

function Feature({title, accent, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={clsx(styles.iconWrap, styles[`accent_${accent}`])}>
          {icon}
        </div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
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
