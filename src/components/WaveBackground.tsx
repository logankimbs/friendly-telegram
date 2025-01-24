import React from 'react';

export function WaveBackground(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 390"
      className="absolute bottom-0 left-0 h-[490px] w-screen transition delay-150 duration-300 ease-in-out"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <path
        d="M 0,400 L 0,175 C 185.86666666666667,170.46666666666667 371.73333333333335,165.93333333333334 537,170 C 702.2666666666667,174.06666666666666 846.9333333333334,186.73333333333332 994,189 C 1141.0666666666666,191.26666666666668 1290.5333333333333,183.13333333333333 1440,175 L 1440,400 L 0,400 Z"
        className="wave-t fill-wo-light-blue transition-all delay-150 duration-300 ease-in-out"
      />
      <path
        d="M 0,400 L 0,275 C 108.80000000000001,278.4666666666667 217.60000000000002,281.93333333333334 401,280 C 584.4,278.06666666666666 842.3999999999999,270.7333333333333 1028,269 C 1213.6000000000001,267.2666666666667 1326.8000000000002,271.1333333333333 1440,275 L 1440,400 L 0,400 Z"
        className="wave-b fill-wo-blue transition-all delay-150 duration-300 ease-in-out"
      />
    </svg>
  );
}
