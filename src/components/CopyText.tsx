import { IoIosCopy, IoIosCheckmark } from 'react-icons/io'
import { useState } from 'react'
import copy from 'copy-to-clipboard'

interface CopyTextProps extends React.ComponentProps<'span'> {
  content: string
}

type IconToShow = 'copy' | 'copied'

export const CopyText = ({
  content,
  children,
  ...rest
}: CopyTextProps) => {
  const [iconToShow, setIconToShow] = useState<IconToShow>('copy')

  return (
    <span
      className="cursor-pointer"
      onMouseLeave={() => setIconToShow('copy')}
      onTouchEnd={() => setIconToShow('copy')}
      onClick={() => {
        copy(content)
        setIconToShow('copied')
      }}
      {...rest}
    >
      {children}
      <span className="ml-1 transition-colors duration-200">
        {iconToShow === 'copy' ? (
          <IoIosCopy className="align-middle" />
        ) : (
          <IoIosCheckmark className="align-middle" />
        )}
      </span>
    </span>
  )
}
