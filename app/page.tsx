const FORM_URL = "https://forms.gle/89Gd8xpGdkywUtWH9";

export default function Home() {
  return (
    <main>
      <header>
        <h1>
          dibslist<span className="dot">.org</span>
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
        purchase receipts into a private inventory of what people own, then
        quietly checks — at checkout — whether someone in your neighborhood
        already has one and isn&rsquo;t using it.
      </p>

      <h2>how it works</h2>
      <ul>
        <li>upload your Amazon receipts by connecting our app to your email</li>
        <li>your receipts become a private catalog of what you own</li>
        <li>
          the dibslist extension checks, while you shop, whether anyone in your
          neighborhood already owns one and isn&rsquo;t using it
        </li>
      </ul>

      <h2>why it&rsquo;s different</h2>
      <ul>
        <li>demand activates supply — no one has to list anything manually</li>
        <li>
          objects don&rsquo;t disappear after a sale — they transfer, and stay
          in the graph for the next owner to continue receiving offers
        </li>
      </ul>

      <h2>how it feels to buy</h2>
      <p>
        When you are on a product page on Amazon, you click our extension and
        see local alternatives.
      </p>

      <h2>how it feels to sell</h2>
      <p>
        Open the app, see a list of offers for the various items you own that
        you aren&rsquo;t using.
      </p>

      <div className="cta">
        <div className="cta-row">
          <a className="button" href={FORM_URL} target="_blank" rel="noopener noreferrer">
            reserve your spot in our early access &rarr;
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
