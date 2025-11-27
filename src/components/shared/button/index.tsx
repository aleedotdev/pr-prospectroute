import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
    "flex justify-center !cursor-pointer items-center  transition-all duration-500 rounded-lg focus:outline-none",
   {
    variants: {
    theme:{
        solid: 'text-black',
    },
 
    size:{
        xl: 'text-xl',
        lg: 'text-lg',
        md: 'text-md',
        sm: 'text-sm',
        xs: 'text-xs'
    },
    weight:{
       normal: ["font-normal"],
        medium: ["font-medium"],
        semibold: ["font-semibold"],
        bold: ["font-bold"],
        extrabold: ["font-extrabold"],
    },
    },
    defaultVariants:{
     theme: 'solid',
     size: 'sm',
     weight: 'medium',
   
    }
   }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonStyles> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps>=({
  theme, 
  size,
  weight,
  className,
  loading=false,
  children,
  ...props

}) =>{
    return( 
        <button className={`${buttonStyles({ theme, size, weight})} ${className}`}{...props} 
          disabled={loading || props.disabled}>
          {loading ? (
        <span className="border-2 border-yellow rounded-lg loader animate-spin"></span>
      ) : (
        children
      )}
        </button>
    )
}

