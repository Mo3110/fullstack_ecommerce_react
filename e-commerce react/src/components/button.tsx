
import { ReactNode } from "react";
import clsx from "clsx";

type Size = "small" | "large"

const sizes: Record<Size, string> = {
    large: "py-2 px-20 rounded-[18px] bg-violet-blue hover:bg-periwinkle hover:text-raisin-black duration-300 text-white uppercase text-base text-raisin-black",
    small: "px-[18px] py-5 rounded-[18px] bg-violet-blue hover:bg-periwinkle hover:text-raisin-black duration-300 text-white uppercase text-base text-raisin-black"
}

type ButtonProps = {
    children?: ReactNode | ReactNode[]
    size?: Size
} & JSX.IntrinsicElements["button"]

const Button = ({ 
    children, 
    size = "small", 
    disabled, 
    className,
    ...props 
}: ButtonProps) => {
  return (
    <button 
    className={clsx(
        sizes[size], 
        {
        "bg-silver hover:bg-silver hover:text-white cursor-not-allowed": 
        disabled,
    },
    className
    )}
    disabled={disabled}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button