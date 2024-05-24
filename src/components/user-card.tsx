
interface IUserCard {
  name: string
  role?: string
  size?: "s" | "m" | "l"
  layout?: "vertical" | "horizontal"
  avatar?: React.ReactNode
}

const UserCard: React.FC<IUserCard> = ({ name, role, size = "m", layout = "vertical", avatar }) => {
  return (
    <div className={`flex items-center gap-4 pt-4 ${layout == "vertical" ? "flex-col" : "flex-row"}`}>
      <div className="w-16 h-16">
        {avatar}
      </div>
      <div className="flex flex-col w-full">
        <div className="text-[18px]">
          {name}
        </div>
        <div className="text-[16px] text-slate-600">
          {role}
        </div>
      </div>
    </div>
  );
};

export default UserCard;