import ArrowDownIcon from "./arrow-small-down"
import ArrowSmallRightIcon from "./arrow-small-right"
import CartIcon from "./cart-icon"
import ExclamationTriangleIcon from "./exclamation-triangle"
import Logo from "./logo"
import MinusIcon from "./minus-icon"
import PlusIcon from "./plus-icon"
import TrashIcon from "./trash-icon"
import XMarkIcon from "./x-mark-icon"

type IconName = 
| "arrow-small-down"
| "arrow-small-right"
| "cart-icon"
| "exclamation-triangle"
| "minus-icon"
| "plus-icon"
| "trash-icon"
| "x-mark-icon"
| "logo"

type IconsType = {
  [K in IconName]: JSX.Element
}

const Icons: IconsType = {
  "arrow-small-down": <ArrowDownIcon/>,
  "arrow-small-right": <ArrowSmallRightIcon/>,
  "cart-icon": <CartIcon/>,
  "exclamation-triangle": <ExclamationTriangleIcon/>,
  "minus-icon": <MinusIcon/>,
  "plus-icon": <PlusIcon/>,
  "trash-icon": <TrashIcon/>,
  "x-mark-icon": <XMarkIcon/>,
  logo: <Logo/>,
}

type IconProps = {
  name: keyof typeof Icons
}

const Icon = ({ name }: IconProps) => {
  return Icons[name]
}

export default Icon