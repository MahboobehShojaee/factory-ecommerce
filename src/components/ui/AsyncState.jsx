import PropTypes from "prop-types";
import { useRTL } from "../../hooks/useRTL.js";

export function LoadingState({ label = "Loading..." }) {
  const { dirClass } = useRTL();

  return (
    <div className={`rounded-3xl border border-gray-200 bg-white/80 p-8 text-center shadow-sm ${dirClass}`}>
      <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-[#D4AF37] border-t-transparent" />
      <p className="text-sm font-semibold text-gray-500">{label}</p>
    </div>
  );
}

export function ErrorState({ title = "Something went wrong", description, onRetry }) {
  const { dirClass } = useRTL();

  return (
    <div className={`rounded-3xl border border-red-200 bg-red-50/70 p-8 text-center ${dirClass}`}>
      <p className="text-base font-bold text-red-700">{title}</p>
      {description ? <p className="mt-2 text-sm text-red-600">{description}</p> : null}
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-full bg-[#374151] px-5 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:bg-[#D4AF37]"
        >
          Retry
        </button>
      ) : null}
    </div>
  );
}

export function EmptyState({ title = "No data found", description }) {
  const { dirClass } = useRTL();

  return (
    <div className={`rounded-3xl border border-gray-200 bg-white/70 p-8 text-center ${dirClass}`}>
      <p className="text-base font-bold text-[#374151]">{title}</p>
      {description ? <p className="mt-2 text-sm text-gray-500">{description}</p> : null}
    </div>
  );
}

LoadingState.propTypes = {
  label: PropTypes.string,
};

ErrorState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onRetry: PropTypes.func,
};

EmptyState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
