import React, {useEffect, useState} from 'react';
import {readConsent, writeConsent, updateGtagConsent, type ConsentValue} from './consent';
import styles from './ConsentBanner.module.css';

/**
 * Docusaurus wraps the entire app in this component (src/theme/Root), and it
 * is NOT remounted across client-side navigation — a good home for the cookie
 * consent banner. Analytics defaults to denied (see headTags in the config);
 * this banner lets the visitor grant/deny and records the choice in a shared
 * parent-domain cookie.
 */
export default function Root({children}: {children: React.ReactNode}): React.ReactNode {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only if no prior decision is stored.
    if (readConsent() === null) setVisible(true);
  }, []);

  function decide(value: ConsentValue) {
    writeConsent(value);
    updateGtagConsent(value);
    setVisible(false);
  }

  return (
    <>
      {children}
      {visible && (
        <div
          className={styles.banner}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <p className={styles.text}>
            We use Google Analytics to understand how these docs are used. No
            analytics cookies are set until you accept.
          </p>
          <div className={styles.actions}>
            <button
              type="button"
              className="button button--secondary button--sm"
              onClick={() => decide('denied')}
            >
              Decline
            </button>
            <button
              type="button"
              className="button button--primary button--sm"
              onClick={() => decide('granted')}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
