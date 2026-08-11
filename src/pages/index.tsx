import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        {/* The wordmark is the logo lockup; the h1 stays for a11y/SEO. Two
            files rather than a CSS filter — a filter would recolor the mark. */}
        <Heading as="h1" className={styles.heroTitleSr}>
          {siteConfig.title}
        </Heading>
        <img
          className={styles.heroLogoLight}
          src={useBaseUrl('/img/logo-full.svg')}
          alt=""
          aria-hidden="true"
        />
        <img
          className={styles.heroLogoDark}
          src={useBaseUrl('/img/logo-full-light.svg')}
          alt=""
          aria-hidden="true"
        />
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={clsx('button button--lg', styles.primaryButton)} to="/docs/intro">
            Read the docs →
          </Link>
          <Link className={clsx('button button--lg', styles.secondaryButton)} to="/blog">
            Latest updates
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Documentation and updates for Vassant.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
