export function Banner() {
  return (
    <div className="bg-wo-blue px-6 py-2.5 text-left sm:px-3.5 md:text-center">
      <p className="text-sm/6 text-white">
        <a href="#">
          <strong className="font-semibold">AAO Winter Conference 2025</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Join us in Florida from January 24 - 26 to see what’s coming
          next&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  );
}
