import Image from "next/image";

/** A screenshot dressed as a browser window, with the address it came from. */
const BrowserFrame = ({
  src,
  alt,
  address,
  width,
  height,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  address: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) => (
  <figure className={`overflow-hidden border border-line bg-ink-3 ${className}`}>
    <div className="flex items-center gap-3 border-b border-line px-4 py-3">
      <span className="flex gap-1.5" aria-hidden>
        <i className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <i className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <i className="h-2.5 w-2.5 rounded-full bg-flame" />
      </span>
      <span className="truncate font-mono text-[11px] tracking-[0.08em] text-mute">
        {address}
      </span>
    </div>
    <div className="overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  </figure>
);

export default BrowserFrame;
