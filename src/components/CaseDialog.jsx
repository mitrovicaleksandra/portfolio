
import { useEffect } from 'react';
import {
  X,
  LockKeyhole,
  FileSpreadsheet,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

export default function CaseDialog({ selected, onClose }) {
  useEffect(() => {
    if (!selected) return;

    function keyDown(event) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', keyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', keyDown);
      document.body.style.overflow = '';
    };
  }, [selected, onClose]);

  if (!selected) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section
        className="case-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-case-title"
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Close case study"
          onClick={onClose}
        >
          <X />
        </button>

        {/* PUBLIC CASE STUDY */}

        <p className="eyebrow gold">
          IMPACT / {selected.category.toUpperCase()}
        </p>

        <h2 id="dialog-case-title">
          {selected.title}
        </h2>

        <div className="dialog-metric">
          <strong>{selected.value}</strong>
          <span>{selected.result}</span>
        </div>

        <div className="dialog-sections">
          <div>
            <h3>The challenge</h3>
            <p>{selected.context}</p>
          </div>

          <div>
            <h3>The work</h3>
            <p>{selected.work}</p>
          </div>

          <div>
            <h3>The outcome</h3>
            <p>{selected.outcome}</p>
          </div>
        </div>

        <div className="dialog-tags">
          {selected.methods.map((method) => (
            <span key={method}>{method}</span>
          ))}
        </div>

        <p className="dialog-disclaimer">
          Selected experiences are summarized at a high
          level to protect confidential business information.
        </p>

        {/* PREMIUM CASE STUDY */}

        <div className="case-paywall">
          <div className="case-paywall-icon">
            <LockKeyhole size={26} />
          </div>

          <p className="eyebrow gold">
            PREMIUM ANALYSIS
          </p>

          <h3>Unlock the Full Case Study</h3>

          <p className="case-paywall-description">
            Explore the financial methodology, analytical
            framework, and scenario modeling behind this
            business decision.
          </p>

          <div className="case-paywall-features">
            <div>
              <CheckCircle2 size={18} />
              <span>Detailed financial methodology</span>
            </div>

            <div>
              <BarChart3 size={18} />
              <span>Scenario and sensitivity analysis</span>
            </div>

            <div>
              <FileSpreadsheet size={18} />
              <span>Illustrative financial model</span>
            </div>
          </div>

          <div className="case-paywall-price">
            <strong>CA$29</strong>
            <span>One-time purchase</span>
          </div>

          {/* STRIPE CHECKOUT */}

          {selected.stripePaymentUrl ? (
            <a
              className="case-paywall-button"
              href={selected.stripePaymentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Unlock with Stripe — CA$29
            </a>
          ) : (
            <button
              type="button"
              className="case-paywall-button"
              disabled
            >
              Stripe Checkout — Coming Soon
            </button>
          )}

          <p className="case-paywall-note">
            {selected.stripePaymentUrl
              ? 'Secure payment through Stripe. Premium access is not yet automated.'
              : 'Preview only. Payments are not yet enabled.'}
          </p>
        </div>
      </section>
    </div>
  );
}
