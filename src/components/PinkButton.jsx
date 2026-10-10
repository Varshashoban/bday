/**
 * PinkButton — the primary interactive button throughout the site.
 * Supports an outline variant via className="button-outline".
 */
export default function PinkButton({ children, onClick, className = '', ...props }) {
  return (
    <button
      className={`pink-button ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
