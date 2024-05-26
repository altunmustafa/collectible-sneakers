import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface IScreenProps {
  circles?: boolean
  addressBar?: boolean
  arrows?: boolean
  image?: string | StaticImport
  size?: "s" | "m" | "l"
  // If sizeWithTailwind is provided, the size prop will be ignored.
  sizeWithTailwind?: string
  className?: string
}

const Screen: React.FC<IScreenProps> = ({ circles = true, addressBar = true, arrows = true, image, size = "m", sizeWithTailwind, className = "" }) => {
  let sizeClassName = sizeWithTailwind;

  if (!sizeClassName) {
    switch (size) {
      case "s":
        sizeClassName = "aspect-[256/286] max-md:aspect-[94/105] w-[94px] md:w-[175px] lg:w-[256px]";
        break;
      case "m":
        sizeClassName = "aspect-[520/350] max-md:aspect-[329/234] w-[329px] md:w-[425px] lg:w-[520px]";
        break;
      case "l":
        sizeClassName = "aspect-[759/451] max-md:aspect-[294/201] w-[294px] md:w-[526px] lg:w-[759px]";
        break;
    }
  }

  return (
    <div
      className={`flex flex-col items-center bg-white rounded-[20px] overflow-hidden border-[5px] border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),_0_0_15px_0_rgba(0,0,0,0.07)] ${sizeClassName} ${className}`} >
      {/* Top Bar */}
      {
        (circles || addressBar || arrows) &&
        <div className="flex justify-between items-center w-full h-[41px] px-4 py-2 gap-7" >
          {/* Circles */}
          <div className={`flex items-center gap-[5px] ${circles ? "" : "hidden"}`} >
            <svg width="8.33px" height="8.33px" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" className="fill-rose-600" />
            </svg>
            <svg width="8.33px" height="8.33px" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" className="fill-amber-400" />
            </svg>
            <svg width="8.33px" height="8.33px" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" className="fill-green-500" />
            </svg>
          </div>
          {/* Address Bar */}
          <div className={`flex justify-center items-center px-2 py-1 w-[233.95px] bg-slate-100 text-slate-500 text-xs ${addressBar ? "" : "hidden"}`}>
            feature
          </div>
          {/* Arrows */}
          <div className={`flex gap-[5px] ${arrows ? "" : "hidden"}`}>
            <div className="flex justify-center items-center w-6 h-6">
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                <path d="M2.757 7.49994L7.707 12.4499C7.80251 12.5422 7.87869 12.6525 7.9311 12.7745C7.98351 12.8965 8.0111 13.0278 8.01225 13.1605C8.01341 13.2933 7.98811 13.425 7.93782 13.5479C7.88754 13.6708 7.81329 13.7824 7.7194 13.8763C7.6255 13.9702 7.51385 14.0445 7.39096 14.0948C7.26806 14.145 7.13638 14.1703 7.0036 14.1692C6.87082 14.168 6.7396 14.1404 6.6176 14.088C6.49559 14.0356 6.38525 13.9594 6.293 13.8639L0.636002 8.20694C0.448531 8.01941 0.343216 7.7651 0.343216 7.49994C0.343216 7.23477 0.448531 6.98046 0.636002 6.79294L6.293 1.13594C6.4816 0.953778 6.73421 0.852984 6.9964 0.855262C7.2586 0.857541 7.50941 0.96271 7.69482 1.14812C7.88023 1.33353 7.9854 1.58434 7.98768 1.84654C7.98996 2.10873 7.88916 2.36133 7.707 2.54994L2.757 7.49994Z"
                  className="fill-slate-500" />
              </svg>
            </div>
            <div className="flex justify-center items-center w-6 h-6">
              <svg width="8" height="15" viewBox="0 0 8 15" fill="none">
                <path d="M5.31399 7.57098L0.363994 2.62098C0.181836 2.43238 0.0810419 2.17978 0.0833203 1.91758C0.0855987 1.65538 0.190768 1.40457 0.376176 1.21916C0.561584 1.03375 0.812396 0.928586 1.07459 0.926307C1.33679 0.924029 1.58939 1.02482 1.77799 1.20698L7.43499 6.86398C7.62247 7.05151 7.72778 7.30582 7.72778 7.57098C7.72778 7.83615 7.62247 8.09045 7.43499 8.27798L1.77799 13.935C1.58939 14.1171 1.33679 14.2179 1.07459 14.2157C0.812396 14.2134 0.561584 14.1082 0.376176 13.9228C0.190768 13.7374 0.0855987 13.4866 0.0833203 13.2244C0.0810419 12.9622 0.181836 12.7096 0.363994 12.521L5.31399 7.57098V7.57098Z"
                  className="fill-slate-600" />
              </svg>
            </div>
          </div>
        </div>
      }

      {/* Video */}
      <div className="relative flex w-full h-full justify-center items-center gap-[10px]">
        {image &&
          <Image src={image}
            alt="video play"
            // width={"520"}
            // height={350}
            layout="fill"
            objectFit="cover"
          />
        }
      </div>

    </div >
  )
}

export default Screen;