import { SvgIcon, SvgIconProps } from '@mui/material'

export default function Logo(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M7.05 3.5a3.519 3.519 0 0 0 0 4.97l8.49 8.48c.58.59.58 1.55 0 2.12-.59.59-1.54.59-2.13 0l-4.24-4.24 1.06-1.06-3.53-3.54-.36.36-1.41-1.42a1.02 1.02 0 0 0-1.43 0l-1.4 1.42c-.39.41-.39 1.02 0 1.41l1.4 1.41-.34.36L6.7 17.3l1.06-1.06L12 20.5a3.531 3.531 0 0 0 4.95 0c1.37-1.38 1.37-3.6 0-4.96L8.46 7.05c-.58-.59-.58-1.55 0-2.12.59-.59 1.54-.59 2.13 0l4.24 4.24-1.06 1.06 3.53 3.54.36-.36 1.41 1.42c.39.39 1.03.39 1.43 0l1.4-1.42c.39-.41.39-1.02 0-1.41l-1.4-1.41.34-.36L17.3 6.7l-1.06 1.06L12 3.5a3.531 3.531 0 0 0-4.95 0m-4.24 7.79 1.41-1.41 1.42 1.41-1.42 1.42m14.14 0 1.42-1.42 1.41 1.42-1.41 1.41Z"></path>
      </svg>
    </SvgIcon>
  )
}
