export default function SocialCircleIcon({ url, alt }) {
  return (
    <div className="h-6 w-6 ml-1">
      <img className="h-full w-full" src={url} alt={alt} />
    </div>
  );
}
