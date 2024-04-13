export default function Loading() {
  //   return <h2 className="global">Loading...</h2>;
  return (
    <main>
      <div className="container h-96 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          height="170"
          display="block"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 100 100"
        >
          <g fill="#703bf7">
            <path d="M19 19H39V39H19z">
              <animate
                attributeName="fill"
                begin="0s"
                calcMode="discrete"
                dur="1s"
                keyTimes="0;0.125;1"
                repeatCount="indefinite"
                values="#141414;#703bf7;#703bf7"
              ></animate>
            </path>
            <path d="M40 19H60V39H40z">
              <animate
                attributeName="fill"
                begin="0.125s"
                calcMode="discrete"
                dur="1s"
                keyTimes="0;0.125;1"
                repeatCount="indefinite"
                values="#141414;#703bf7;#703bf7"
              ></animate>
            </path>
            <path d="M61 19H81V39H61z">
              <animate
                attributeName="fill"
                begin="0.25s"
                calcMode="discrete"
                dur="1s"
                keyTimes="0;0.125;1"
                repeatCount="indefinite"
                values="#141414;#703bf7;#703bf7"
              ></animate>
            </path>
            <path d="M19 40H39V60H19z">
              <animate
                attributeName="fill"
                begin="0.875s"
                calcMode="discrete"
                dur="1s"
                keyTimes="0;0.125;1"
                repeatCount="indefinite"
                values="#141414;#703bf7;#703bf7"
              ></animate>
            </path>
            <path d="M61 40H81V60H61z">
              <animate
                attributeName="fill"
                begin="0.375s"
                calcMode="discrete"
                dur="1s"
                keyTimes="0;0.125;1"
                repeatCount="indefinite"
                values="#141414;#703bf7;#703bf7"
              ></animate>
            </path>
            <path d="M19 61H39V81H19z">
              <animate
                attributeName="fill"
                begin="0.75s"
                calcMode="discrete"
                dur="1s"
                keyTimes="0;0.125;1"
                repeatCount="indefinite"
                values="#141414;#703bf7;#703bf7"
              ></animate>
            </path>
            <path d="M40 61H60V81H40z">
              <animate
                attributeName="fill"
                begin="0.625s"
                calcMode="discrete"
                dur="1s"
                keyTimes="0;0.125;1"
                repeatCount="indefinite"
                values="#141414;#703bf7;#703bf7"
              ></animate>
            </path>
            <path d="M61 61H81V81H61z">
              <animate
                attributeName="fill"
                begin="0.5s"
                calcMode="discrete"
                dur="1s"
                keyTimes="0;0.125;1"
                repeatCount="indefinite"
                values="#141414;#703bf7;#703bf7"
              ></animate>
            </path>
          </g>
        </svg>
      </div>
    </main>
  );
}
