const FORM_URL = "https://forms.gle/89Gd8xpGdkywUtWH9";

export default function Home() {
  return (
    <main>
      <header>
        <h1>
          dibslist<span className="dot">.</span>
        </h1>
        <div className="tag">object-aware checkout for the internet</div>
      </header>

      <p className="lede">
        Before you buy new, check if someone nearby already has it.
      </p>

      <div className="pitch">
        What if checkout knew whether the item already exists nearby?
        <em>object-aware checkout</em>
      </div>

      <p>
        Most of what we buy already exists within a mile of us. Dibslist turns
        purchase receipts into a private inventory of things people already
        own, then quietly shows up at checkout to ask whether the item is
        available used, locally, rented, or repaired — before you click buy.
      </p>

      <h2>how it works</h2>
      <ul>
        <li>connect Gmail or upload a purchase-history export</li>
        <li>your receipts become a private catalog of what you own</li>
        <li>
          when someone nearby wants one of those things, you decide: sell, lend,
          rent, keep, or ignore
        </li>
        <li>
          the browser extension intercepts new-purchase intent and routes you
          to used, local, rental, repair, or refurbished options first
        </li>
      </ul>

      <h2>why it&rsquo;s different</h2>
      <ul>
        <li>demand activates supply — no one has to list anything manually</li>
        <li>neighbor-to-neighbor resale stays free; affiliate revenue from new-purchase fallbacks pays for it</li>
        <li>
          objects don&rsquo;t disappear after a sale — they transfer, and stay
          in the graph for the next owner
        </li>
      </ul>

      <div className="cta">
        <div className="cta-row">
          <a className="button" href={FORM_URL} target="_blank" rel="noopener noreferrer">
            request early access &rarr;
          </a>
          <span className="small">
            we&rsquo;ll email when the extension is ready
          </span>
        </div>
      </div>

      <p className="small">
        building toward a permissioned object graph for physical goods.
        every purchase is a latent listing; every resale is an ownership
        transfer.
      </p>

      <footer>
        <div>dibslist &middot; pre-launch &middot; 2026</div>
        <div>
          questions? <a href={FORM_URL}>say hi</a>
        </div>
      </footer>
    </main>
  );
}
