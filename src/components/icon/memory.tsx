import React from "react";

const Memory_Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 28 28"
    fill="#F9BF8D"
    {...props}
  >
    <path d="M8.75 2A3.75 3.75 0 0 0 5 5.75v16.5A3.75 3.75 0 0 0 8.75 26h13.5a.75.75 0 0 0 0-1.5H8.75a2.25 2.25 0 0 1-2.236-2H21.5A1.5 1.5 0 0 0 23 21V5.75A3.75 3.75 0 0 0 19.25 2zM21.5 21h-15V5.75A2.25 2.25 0 0 1 8.75 3.5h10.5a2.25 2.25 0 0 1 2.25 2.25zM9.75 5.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25zM10 9V7h8v2z" />
  </svg>
);

export default Memory_Icon;
