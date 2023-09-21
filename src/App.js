import styles from './App.module.scss';
import FinanceImg from './image.png';

export default function App() {
  const classNames = {
    body: styles.body,
    eclipseLogo: styles.eclipseLogo,
    navItems: styles.navItems,
    startNowButton: styles.startNowButton,
    startNow: `${styles.navItems} ${styles.startNowButton}`,
    financeTextBox: styles.financeTextBox,
    financeText: styles.financeText,
    financeParagraph: styles.financeParagraph,
    getStartedButton: styles.getStartedButton,
    imgWrapper: styles.imgWrapper,
    purpleBackground: styles.purpleBackground,
    financeImg: styles.financeImg,
  };

  return (
    <div className={classNames.body}>
      <header className={styles.relative}>
        <nav>
          <div>
            <a href="/#" className={classNames.eclipseLogo}>
              ECLIPSE
            </a>
          </div>
          <ul>
            <li>
              <a href="/#" className={classNames.navItems}>
                Features
              </a>
            </li>
            <li>
              <a href="/#" className={classNames.navItems}>
                Pricing
              </a>
            </li>
            <li>
              <a href="/#" className={classNames.navItems}>
                FAQs
              </a>
            </li>
          </ul>
          <div className={classNames.startNow}>
            <a href="/#" className={classNames.startNow}>
              Start Now{' '}
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <div className={classNames.financeTextBox}>
              <h1 className={classNames.financeText}>
                All-in-one Finance App you always wanted
              </h1>
              <p className={classNames.financeParagraph}>
                Gain control of your finances with our all-in-one finance app.
                Track your spending, find investment opportunities, and learn.
              </p>
              <div>
                <a className={classNames.getStartedButton}>Get Started</a>
              </div>
            </div>

            <div className={classNames.imgWrapper}>
              <div className={classNames.purpleBackground}> </div>
              <img src="https://eclipsefin.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freadme1.f23860ab.png&w=3840&q=75" />
            </div>
          </div>
        </section>
        <section>
          <div>sec2</div>
        </section>
      </main>
    </div>
  );
}
