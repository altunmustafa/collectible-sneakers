
interface IFooterColProps {
  children: React.ReactNode
  className?: string
}

const FooterCol: React.FC<IFooterColProps> = ({ children, className }) => {

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {children}
    </div>
  )
}

export default FooterCol;