export default function PhotoCredit({ credit }) {
  if (!credit) return null;
  return <span className="photo-credit">Photo by {credit} on Unsplash</span>;
}
