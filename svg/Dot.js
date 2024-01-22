import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828"
    />
    <Path
      stroke="#1C274C"
      strokeWidth={1.5}
      d="M16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6"
    />
    <Path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.5 14h-3m1.5-1.5v3"
    />
    <Circle cx={12} cy={14} r={4} stroke="#1C274C" strokeWidth={1.5} />
  </Svg>
)
export default SvgComponent;
