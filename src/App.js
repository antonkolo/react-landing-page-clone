import styles from './App.module.css';
import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as PlayIcon } from './svg/play-icon.svg';
import { ReactComponent as LogoText } from './svg/text-logo.svg';

export default function App() {
  return (
    <>
      <figure className={styles.announcement}>
        <p>Wunderbucket is shutting down on Oct 1st</p>
      </figure>
      <header className={styles.header}>
        <figure className={styles['logo-group']}>
          <Logo className={styles.logo} />
          <LogoText className={styles['logo-text']} />
        </figure>
        <nav>
          <ul className={styles['nav-list']}>
            <li>
              <a href="/">Getting Started</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={styles['hero-section']}>
          <img
            alt="Hero"
            src={`${process.env.PUBLIC_URL}/assets/hero-img.png`}
          />
          <div className={styles['inside-wrapper']}>
            <h1>Turn local folders into websites</h1>
            <p>
              For designers & developers who want fast, secure websites without
              command lines, or configs. It’s like if Dropbox had a cute little
              static hosting service baby.
            </p>
            <button className={styles['play-button']}>
              <PlayIcon /> See how it works
            </button>
          </div>
        </section>
        <section className={styles['features-section']}>
          <div className={styles['inside-wrapper']}>
            <p>
              Here's some of the highlights of the features you get when you
              build sites with Wunderbucket.
            </p>
          </div>
          <ul className={styles['features-list']}>
            <li className={styles.feature}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/cloud-hosted.png`}
                alt="Fictional Charachter"
              />
              <div>
                <h2>Cloud Hosted</h2>
                <p>
                  All your content is hosted on Amazon's Cloud. This is the
                  infrastructure that powers the world's biggest websites, not a
                  server running out of a garage. You're in good hands.
                </p>
              </div>
            </li>
            <li className={styles.feature}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/instant-publish.png`}
                alt="Fictional Charachter"
              />
              <div>
                <h2>Instant Publish</h2>
                <p>
                  When you're done making changes in a local folder, just click
                  "publish" and it's live. No branch, merge, build, deploy just
                  to fix a typo or change a font. It lets you quickly iterate,
                  and tinker. It works how you work.
                </p>
              </div>
            </li>
            <li className={styles.feature}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/edit-anywhere.png`}
                alt="Fictional Charachter"
              />
              <div>
                <h2>Edit Anywhere</h2>
                <p>
                  Sync your site's code to multiple computers. Allow your
                  teammates to made edits and publish sites from multiple
                  desktops.
                </p>
              </div>
            </li>
            <li className={styles.feature}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/smart-localhost.png`}
                alt="Fictional Charachter"
              />
              <div>
                <h2>Smart Localhost</h2>
                <p>
                  When you add a folder to Wunderbucket, you get a localhost
                  server that will reload the page any time you change your
                  source code. You'll never need to hit refresh again.
                </p>
              </div>
            </li>
            <li className={styles.feature}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/mac-native.png`}
                alt="Fictional Charachter"
              />
              <div>
                <h2>Mac Native</h2>
                <p>
                  A totally different take on static hosting, Wunderbucket is
                  deeply integrated in the macOS experience. It makes publishing
                  static content a completely natural part of your normal Mac
                  workflow.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
