import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Menu= (props) => (
  <Svg
 
    width={50}
    height={50}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 17h8m-8-5h14M5 7h8"
    />
  </Svg>
)
export default Menu;
