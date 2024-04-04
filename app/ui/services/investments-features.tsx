import {
  ChartBarIcon,
  FireIcon,
  LightBulbIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Heading from "../page-heading";
import Card from "./card";

export default function InvestmentsFeatures() {
  return (
    <section
      id="achievements"
      className="container flex flex-col lg:flex-row xs:pb-2 xl:pb-12 desktop:pb-[54px] items-center desktop:items-start gap-10 xl:gap-[50px] desktop:gap-[60px] mt-20 laptop:mt-[120px] desktop:mt-[150px]"
    >
      <div className="flex flex-col gap-[30px] xs:gap-10 desktop:gap-[50px] lg:max-w-[32.1875%] desktop:max-w-[519px]">
        <Heading
          heading="Smart Investments, Informed Decisions"
          paragraph="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
        />
        <div className="overflow-hidden relative p-6 xl:p-10 desktop:p-[50px] bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[10px] desktop:rounded-xl transition-colors duration-300 ease-in-out hover:bg-signal-black">
          <svg
            className="absolute top-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 519 340"
          >
            <g strokeMiterlimit="10" clipPath="url(#clip0_104_11962)">
              <path
                stroke="url(#paint0_linear_104_11962)"
                d="M.848 490.471c182.12-50.22 336.791-.615 509.377 56.171 85.602 28.162 170.972 49.245 260.187 26.162 135.731-35.113 224.203-141.966 338.278-213.962 185.25-116.881 267.8 143.402 429.42 176.54 69.96 14.363 109.53-30.291 171.38-51.861 78.32-27.316 150.62 21.878 213.54 63.916"
              ></path>
              <path
                stroke="url(#paint1_linear_104_11962)"
                d="M.848 455.051c176.712-57.12 312.392 7.078 474.676 70.713 87.625 34.344 176.251 62.198 269.618 33.805 138.422-42.09 228.637-156.739 343.068-236.481 194.55-135.553 258.42 154.097 425.52 188.159 71.12 14.491 115.03-35.062 175.92-59.249 86.01-34.164 164.97 23.982 233.38 71.765"
              ></path>
              <path
                stroke="url(#paint2_linear_104_11962)"
                d="M.848 420.271c79.168-30.189 156.44-37.14 238.324-12.773 75.606 22.493 140.525 67.917 211.876 100.055 84.268 37.96 170.843 71.252 263.057 41.012 146.47-48.04 234.634-178.489 354.165-265.028 193.55-140.144 249.86 158.586 408.76 198.88 80.45 20.391 127.07-38.729 195.47-65.763 92.45-36.549 178.82 31.676 250.53 83.358"
              ></path>
              <path
                stroke="url(#paint3_linear_104_11962)"
                d="M.848 386.697c71.249-32.292 142.241-42.346 217.488-17.108 74.119 24.854 134.322 77.177 202.598 113.393 79.424 42.141 161.155 84.435 252.549 57.453 153.236-45.193 249.422-191.698 368.337-286.496 202.78-161.664 236.43 163.433 402.56 200.855 85.24 19.211 138.32-49.348 211.52-76.074 98.46-35.934 192.91 42.577 267.1 97.516"
              ></path>
              <path
                stroke="url(#paint4_linear_104_11962)"
                d="M.848 354.815C165.514 266.327 264.417 371 398.534 455.589c76.17 48.04 158.183 103.621 251.524 72.688 151.16-50.092 250.601-200.701 365.192-300.859 73.96-64.634 144.77-79.639 208.13 2.129 54.95 70.893 90.24 173 188.01 193.545 85.14 17.877 145.27-52.298 218.31-80.896 107.49-42.115 213.9 49.964 293.33 110.315"
              ></path>
              <path
                stroke="url(#paint5_linear_104_11962)"
                d="M.848 325.165c159.489-100.312 258.879 3.848 384.666 98.389 67.097 50.425 143.062 120.267 233.712 96.593 55.179-14.415 104.105-55.376 146.239-91.54 80.988-69.483 148.213-151.456 225.101-224.862 73.704-70.381 146.364-98.081 209.564-5.233 47.11 69.2 83.25 176.104 177.95 191.211 90.03 14.364 155.92-62.942 234.89-89.668 113.89-38.575 228.71 65.097 310.06 128.654"
              ></path>
              <path
                stroke="url(#paint6_linear_104_11962)"
                d="M.848 298.286c62.176-44.757 130.785-72.843 206.544-45.578 67.456 24.289 119.893 80.716 171.741 127.73 58.434 52.99 132.246 147.07 221.947 128.577 50.49-10.413 94.905-49.091 132.631-82.024 83.269-72.714 156.26-156.945 231.123-237.969 70.066-75.869 147.726-130.45 213.076-24.854 44.01 71.073 78.17 183.491 177.97 187.441 88.58 3.514 155.13-67.276 234.97-93.387 122.46-40.037 246.68 77.639 332.2 146.762"
              ></path>
              <path
                stroke="url(#paint7_linear_104_11962)"
                d="M.848 273.612c63.816-49.759 134.911-82.794 215.515-54.119 68.019 24.187 124.352 79.331 174.636 128.91 52.283 51.58 122.456 152.892 208.057 135.605 47.901-9.67 90.035-48.425 125.352-79.87 80.757-71.945 152.877-153.969 225.843-233.557 66.819-72.868 145.289-139.298 211.569-34.19 43.36 68.764 76.3 178.515 174.23 179.874 87.8 1.206 161.02-62.582 243.01-84.435 127.61-34.036 252.32 77.536 343.97 148.814"
              ></path>
              <path
                stroke="url(#paint8_linear_104_11962)"
                d="M.848 246.116c70.403-55.427 145.522-85.231 231.584-46.758 71.172 31.83 133.502 92.054 188.579 145.377 49.412 47.861 110.64 128.628 188.553 103.467 47.542-15.363 88.881-56.401 124.352-89.386 71.095-66.096 137.167-137.682 204.238-207.805 63.916-66.867 141.476-131.912 210.186-38.679 48.87 66.328 79.99 172.411 177.56 177.259 86.9 4.309 170.94-53.068 254.72-68.457 126.71-23.289 244.56 64.122 342.43 131.475"
              ></path>
              <path
                stroke="url(#paint9_linear_104_11962)"
                d="M.848 215.569c75.708-57.813 152.851-83.23 241.297-37.576 67.764 34.959 130.299 91.258 186.042 142.633 51.95 47.886 115.741 130.398 194.242 93.874 40.981-19.057 74.709-55.35 106.899-86.052C797.04 263.814 861.087 195.28 927.21 129.056c68.404-68.508 145.91-121.627 216.87-30.548 48.85 62.711 84.04 161.433 176.66 165.537 85.22 3.796 169.87-37.063 253.04-50.657 128.38-20.98 242.35 44.527 349.27 107.648"
              ></path>
              <path
                stroke="url(#paint10_linear_104_11962)"
                d="M.848 182.533c87.318-63.044 170.612-77.305 263.595-18.647 66.815 42.141 128.581 99.235 188.373 150.712 49.926 42.987 106.079 110.469 175.944 71.38 37.418-20.929 68.558-58.248 98.364-88.436 63.458-64.302 125.25-130.167 190.552-192.622C985.337 40.208 1062.79-6.498 1134.81 75.27c53.77 61.044 91 158.407 183.4 167.23 81.42 7.771 170.15-24.084 250.24-36.498 127.99-19.827 240.61 25.443 354.55 80.716"
              ></path>
              <path
                stroke="url(#paint11_linear_104_11962)"
                d="M.848 147.625c94.597-63.686 181.582-70.508 276.384-3.873 71.53 50.272 135.808 113.803 203.828 168.897 46.773 37.857 98.518 89.77 156.978 46.27 38.648-28.752 70.198-72.073 102.285-107.365C794.58 191.92 850.195 133.082 909.885 78.861c73.146-66.456 152.465-97.85 226.125-17.749 53.92 58.633 95.24 150.147 183.84 160.073 83.86 9.388 174.53-12.644 257.6-24.058 122.14-16.774 230.86 10.542 345.58 53.042"
              ></path>
              <path
                stroke="url(#paint12_linear_104_11962)"
                d="M.848 111.384c107.847-67.482 199.522-60.3 298.527 18.8 75.119 60.018 139.14 129.859 217.437 186.492 53.719 38.832 92.444 60.761 141.473 6.643 83.32-91.977 150.801-196.803 248.422-276.108C978.366-10.986 1057.2-32.685 1128.6 35.053c60.33 57.222 100.93 145.069 188.02 165.691 80.4 19.005 181.3.256 262.13-10.773 119.31-16.287 226.97-6.72 344.3 22.212"
              ></path>
              <path
                stroke="url(#paint13_linear_104_11962)"
                d="M.848 74.424C121.612 3.916 219.95 26.82 321.775 117.078c72.94 64.66 133.604 139.529 216.386 192.647 60.767 39.012 92.752 45.911 134.322-16.21C738.35 195.101 804.652 94.507 900.607 21.921c77.58-58.71 156.183-71.893 231.993-4.206 63.13 56.375 108.05 147.069 197.32 167.024 79.17 17.697 171.56 9.285 251.37-1.59 115.87-15.8 224.72-22.93 341.76-9.875"
              ></path>
              <path
                stroke="url(#paint14_linear_104_11962)"
                d="M.848 37.336C132.479-35.378 235.456.453 339.792 99.944c73.837 70.406 134.706 156.406 225.613 206.318 67.481 37.063 91.162 17.801 123.353-45.731C739.964 159.501 804.729 57.393 899.582-8.422 979.878-64.156 1061.1-65.875 1136.52-1.83c65.79 55.889 113.72 144.223 201.86 168.999 189.04 53.145 394.76-26.289 584.67-32.881"
              ></path>
              <path
                stroke="url(#paint15_linear_104_11962)"
                d="M.848.684C66.33-34.224 127.89-54.948 201.164-29.53 261.777-8.498 311.421 35.643 355.887 80.605c73.351 74.227 136.065 174.103 233.789 218.219 73.299 33.087 90.65-11.49 115.382-73.688 40.314-101.467 101.183-205.42 196.293-264.823C1108.64-169.188 1183.45 92.84 1348.37 149.65c192.61 66.354 386.34-17.364 574.68-53.862"
              ></path>
              <path
                stroke="url(#paint16_linear_104_11962)"
                d="M.848-34.942C69.149-71.107 132.094-91.267 206.7-63.797 269.287-40.765 319.878 6.3 365.216 53.982c71.3 74.971 145.035 204.753 251.396 234.608 74.452 20.904 86.19-48.809 105.053-104.928 33.011-98.235 89.907-206.55 185.093-258.514C1104.36-182.73 1203.88 59.83 1353.06 128.39c195.73 89.95 385.26-2.283 569.97-69.944"
              ></path>
              <path
                stroke="url(#paint17_linear_104_11962)"
                d="M.848-68.927c68.968-37.55 131.092-57.94 207.006-31.343 62.945 22.058 114.382 71.278 159.131 119.241 72.607 77.844 150.442 225.709 263.338 247.767 76.734 15.004 87.498-61.711 104.259-119.318 28.782-98.824 80.604-208.216 180.07-254.179 197.878-91.437 304.598 141.427 450.558 216.732 75.99 39.191 174.38 59.274 259.03 45.629 107.31-17.287 205.45-80.922 298.81-132.553"
              ></path>
              <path
                stroke="url(#paint18_linear_104_11962)"
                d="M.848-100.731c73.453-42.5 144.445-66.995 225.766-30.266C287.637-103.424 336.05-52.742 379.799-3.548c65.559 73.714 148.187 229.017 258.469 240.662 83.013 8.771 93.495-81.948 111.282-143.197 27.5-94.67 77.015-196.161 176.686-232.685C1122.63-210.764 1236.19 5.122 1377.9 89.48c71.61 42.628 165.2 71.816 248.96 61.377 112.2-14.004 209.31-95.26 296.14-160.792"
              ></path>
              <path
                stroke="url(#paint19_linear_104_11962)"
                d="M.848-129.74c69.352-44.218 137.628-74.997 219.564-41.884 65.662 26.546 117.945 82.896 163.052 135.553 64.483 75.279 145.573 229.838 260.135 232.557 81.68 1.924 96.801-90.104 116.074-151.558 29.807-94.952 76.939-187.056 181.48-213.91 200.187-51.452 311.337 145.94 454.587 240.636 70.12 46.372 163.64 84.615 249.06 72.278 111.72-16.159 201.47-109.084 278.23-183.62"
              ></path>
              <path
                stroke="url(#paint20_linear_104_11962)"
                d="M.848-155.363c63.662-46.193 129.785-84.897 210.748-57.761 63.098 21.135 112.793 72.894 155.26 121.985 69.558 80.383 139.525 223.375 259.264 232.506 91.035 6.925 114.69-81.614 140.883-151.66 35.727-95.568 85.524-176.49 194.935-191.289C1155.9-227.82 1267.67-60.924 1402.42 44.133c67.56 52.656 159.03 103.082 247.43 94.464 117.25-11.44 203.54-120.55 273.18-204.19"
              ></path>
              <path
                stroke="url(#paint21_linear_104_11962)"
                d="M.848-175.574c63.355-44.244 128.683-80.665 208.031-54.811 61.792 20.134 110.974 69.61 152.928 117.214 67.584 76.639 139.115 223.759 255.42 227.786 89.932 3.104 120.713-76.612 152.954-146.685 41.34-89.796 97.288-172 203.392-186.337 187.167-25.29 304.087 130.628 436.927 230.35 65.17 48.913 157.1 98.671 240.81 97.029 117.02-2.308 203.7-113.7 271.72-195.006"
              ></path>
              <path
                stroke="url(#paint22_linear_104_11962)"
                d="M.848-189.399c62.355-42.705 126.735-78.126 204.52-54.58 60.1 18.185 108.564 64.506 149.853 109.853 66.507 73.073 137.73 218.655 250.268 219.348 88.241.538 125.813-69.739 164.333-138.195 47.055-83.615 108.821-163.844 211.158-177.9 180.4-24.751 302.27 115.086 435.18 208.165 64.54 45.193 155.47 95.618 235.33 102.749C1767.92 90.429 1856.01-22.067 1923-100.45"
              ></path>
              <path
                stroke="url(#paint23_linear_104_11962)"
                d="M.848-197.965c59.818-40.91 123.762-76.28 198.471-57.3 63.688 16.159 114.28 64.353 157.645 111.008 65.918 70.919 132.015 202.65 242.143 197.751C682.427 49.801 724.895-13.5 768.413-75.8c53.436-76.535 117.945-148.3 215.797-162.202 177.69-25.264 302.17 95.618 440.41 181.85 63.87 39.857 144.91 87.128 218.49 106.185 119.27 30.88 210.1-80.973 279.92-159.971"
              ></path>
              <path
                stroke="url(#paint24_linear_104_11962)"
                d="M.848-202.377c58.178-40.294 120.764-76.433 194.242-61.48 61.177 12.465 110.897 55.35 153.519 98.414C415.449-97.935 477.676 23.306 584.37 18.561c80.937-3.59 129.607-56.889 179.122-114.316 59.331-68.79 127.812-134.143 221.896-147.839 170.182-24.777 300.582 71.867 440.432 148.762 69.41 38.165 142.4 84.82 215.26 115.701C1758.39 70.602 1850.6-37.02 1923-115.53"
              ></path>
              <path
                stroke="url(#paint25_linear_104_11962)"
                d="M.848-203.736c122.404-86.847 228.278-86.411 339.431 16.569 68.25 63.224 126.249 171.743 229.201 168.05 78.297-2.821 132.733-46.014 187.912-96.721 65.021-59.736 136.654-117.523 226.997-130.962 162.151-24.136 299.451 45.757 440.561 112.059 77.68 36.498 140.53 82.28 212.88 126.679 114.25 70.097 207.52-29.984 285.22-110.136"
              ></path>
              <path
                stroke="url(#paint26_linear_104_11962)"
                d="M.848-203.146c113.921-83.513 218.769-99.723 331.589-6.772 70.044 57.71 123.993 152.251 222.767 150.302 164.462-3.232 265.748-164.434 426.494-188.749 153.982-23.289 298.632 18.005 440.252 72.714 86.58 33.446 141.09 80.819 211.32 138.606 110.15 90.642 203.77 1.974 289.76-82.076"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="328.861"
                y2="582.655"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="287.197"
                y2="571.293"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="246.397"
                y2="560.325"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_104_11962"
                x1="961.925"
                x2="961.925"
                y1="209.147"
                y2="548.924"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="173.476"
                y2="537.208"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="139.304"
                y2="524.902"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_104_11962"
                x1="961.951"
                x2="961.951"
                y1="105.449"
                y2="511.387"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="81.805"
                y2="485.968"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint8_linear_104_11962"
                x1="961.951"
                x2="961.951"
                y1="65.878"
                y2="452.949"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint9_linear_104_11962"
                x1="961.951"
                x2="961.951"
                y1="50.077"
                y2="423.564"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint10_linear_104_11962"
                x1="961.925"
                x2="961.925"
                y1="31.648"
                y2="397.719"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint11_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="13.525"
                y2="375.442"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint12_linear_104_11962"
                x1="961.951"
                x2="961.951"
                y1="-6.932"
                y2="355.652"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint13_linear_104_11962"
                x1="961.951"
                x2="961.951"
                y1="-27.804"
                y2="339.626"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint14_linear_104_11962"
                x1="961.951"
                x2="961.951"
                y1="-50.062"
                y2="325.007"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint15_linear_104_11962"
                x1="961.951"
                x2="961.951"
                y1="-75.207"
                y2="310.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint16_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="-102.107"
                y2="292.385"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint17_linear_104_11962"
                x1="961.951"
                x2="961.951"
                y1="-127.716"
                y2="268.644"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint18_linear_104_11962"
                x1="961.925"
                x2="961.925"
                y1="-153.23"
                y2="237.705"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint19_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="-185.544"
                y2="196.516"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint20_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="-222.109"
                y2="141.749"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint21_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="-239.004"
                y2="114.703"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint22_linear_104_11962"
                x1="961.925"
                x2="961.925"
                y1="-251.508"
                y2="85.225"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint23_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="-260.532"
                y2="55.291"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint24_linear_104_11962"
                x1="961.925"
                x2="961.925"
                y1="-267.303"
                y2="33.522"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint25_linear_104_11962"
                x1="961.951"
                x2="961.951"
                y1="-266.78"
                y2="15.632"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint26_linear_104_11962"
                x1="961.938"
                x2="961.938"
                y1="-272.985"
                y2="1.086"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333"></stop>
                <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
              </linearGradient>
              <clipPath id="clip0_104_11962">
                <path
                  fill="#fff"
                  d="M0 0H1924V1286H0z"
                  transform="translate(0 -571)"
                ></path>
              </clipPath>
            </defs>
          </svg>
          <a>
            <h5 className="text-wrap min-[389px]:text-nowrap relative z-0 mb-5 desktop:mb-[30px] not-italic text-xl laptop:text-[22px] desktop:text-2xl font-bold laptop:font-semibold leading-[30px] laptop:leading-[33px] desktop:leading-9">
              Unlock Your Investment Potential
            </h5>
          </a>
          <p className="relative z-0 mb-5 desktop:mb-[30px] not-italic font-medium text-sm laptop:text-base desktop:text-lg leading-[21px] laptop:leading-6 desktop:leading-[27px] text-[#999] laptop:text-[#E4E4E7]">
            Explore our Property Management Service categories and let us handle
            the complexities while you enjoy the benefits of property ownership.
          </p>
          <Link
            href="/about"
            className="relative z-0 w-full inline-flex items-center justify-center px-5 desktop:px-6 py-3.5 desktop:py-[18px] text-sm desktop:text-lg not-italic font-medium leading-[21px] desktop:leading-[27px] text-center bg-dark-gray ring-1 ring-inset ring-signal-black rounded-lg laptop:rounded-[10px] hover:bg-violet-600"
          >
            Learn More
          </Link>
        </div>
      </div>
      <ul className="grid grid-cols-1 xl:grid-cols-2 p-2.5 gap-2.5 rounded-xl bg-graphite-black">
        <Card
          title="Market Insight"
          value="Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
          LinkIcon={ChartBarIcon}
        />
        <Card
          title="ROI Assessment"
          value="Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
          LinkIcon={FireIcon}
        />
        <Card
          title="Customized Strategies"
          value="Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
          LinkIcon={LightBulbIcon}
        />
        <Card
          title="Diversification Mastery"
          value="Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
          LinkIcon={SunIcon}
        />
      </ul>
    </section>
  );
}
