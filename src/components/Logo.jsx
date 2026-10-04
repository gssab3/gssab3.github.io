export default function Logo({ src, name, size = 44 }) {
  const initial = (name || '?').trim().charAt(0).toUpperCase();
  return (
    <span
      className="timeline-logo"
      style={{ width: size, height: size, borderRadius: 10, fontSize: size * 0.42 }}
      title={name}
    >
      {src ? (
        <img src={src} alt={name} />
      ) : (
        <span className="timeline-logo-mono">{initial}</span>
      )}
    </span>
  );
}
