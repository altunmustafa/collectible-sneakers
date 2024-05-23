import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface IListItemProps {
  size?: "s" | "m" | "l" | "xl"
  text?: string
  icon?: boolean
}

interface IListProps {
  listItems: IListItemProps[]
}

const List: React.FC<IListProps> = ({ listItems }) => {

  return (
    <div className="flex flex-col">
      {listItems.map((listItem, index) => {
        return (
          <div className="flex items-center gap-2" key={index}>
            {/* Icon */}
            {listItem.icon &&
              <div className="flex justify-center items-center w-6 h-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.486 16.7299C10.3547 16.7302 10.2247 16.7045 10.1034 16.6544C9.98204 16.6043 9.87181 16.5307 9.77899 16.4379L5.53699 12.1949C5.44141 12.1027 5.36516 11.9924 5.31266 11.8705C5.26017 11.7485 5.23249 11.6173 5.23125 11.4845C5.23 11.3517 5.25521 11.22 5.3054 11.0971C5.3556 10.9742 5.42977 10.8625 5.52359 10.7685C5.61742 10.6746 5.72902 10.6002 5.85188 10.5499C5.97474 10.4995 6.1064 10.4741 6.23918 10.4752C6.37196 10.4762 6.50319 10.5037 6.62523 10.556C6.74727 10.6083 6.85767 10.6845 6.94999 10.7799L10.485 14.3149L16.85 7.95189C17.0375 7.76425 17.2919 7.65879 17.5571 7.65869C17.8224 7.6586 18.0768 7.76389 18.2645 7.95139C18.4521 8.1389 18.5576 8.39327 18.5577 8.65854C18.5578 8.92381 18.4525 9.17825 18.265 9.36589L11.193 16.4379C11.1002 16.5307 10.9899 16.6043 10.8686 16.6544C10.7473 16.7045 10.6173 16.7302 10.486 16.7299V16.7299Z" fill="#15803D" />
                </svg>
              </div>
            }
            {/* Text */}
            <div className="text-xl">
              {listItem.text}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List;