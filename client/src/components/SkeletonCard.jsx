export default function SkeletonCard() {
  return (
    <div className="card skeleton-card" aria-hidden="true">
      <div className="skeleton-image skeleton-shimmer" />
      <div className="card-body">
        <div className="row-between">
          <div className="skeleton-line skeleton-tag skeleton-shimmer" />
          <div className="skeleton-line skeleton-rating skeleton-shimmer" />
        </div>
        <div className="skeleton-line skeleton-title skeleton-shimmer" />
        <div className="skeleton-line skeleton-location skeleton-shimmer" />
        <div className="skeleton-line skeleton-price skeleton-shimmer" />
      </div>
    </div>
  );
}
