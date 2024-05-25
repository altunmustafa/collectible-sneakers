import Button from "@/components/button";
import SectionText from "@/components/section-text";
import Screen from "@/components/screen";
import video_png from "/public/images/video.png"

const CollectionSection: React.FC = () => {

  const buttons: React.ComponentProps<typeof Button>[] = [
    {
      text: "Bibendum tellus",
      style: "filled",
    },
    {
      text: "Cras eget",
      style: "link",
    },
    {
      text: "Dolor pharetra",
      style: "link",
    },
    {
      text: "Amet, fringilla",
      style: "link",
    },
    {
      text: "Amet nibh",
      style: "link",
    },
    {
      text: "Sed velit",
      style: "link",
    },
  ]

  return (
    <section className="flex flex-col justify-center items-center gap-20 px-20 pt-20 pb-32 w-full">
      <SectionText
        headline2="Grow your collection"
        text="Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus."
      />
      {/* Row */}
      <div className="flex flex-col md:flex-row justify-center gap-20 w-full">
        {/* Col 1 */}
        <div className="flex flex-col gap-4 w-[256px]">
          {buttons.map((button, index) => (
            <Button
              key={index}
              text={button.text}
              style={index == 0 ? "filled" : "link"}
              size="l"
              colors={{ primary: index == 0 ? "white" : "black", secondary: "black" }}
              className="font-medium text-[20px]"
            />
          ))}
        </div>
        {/* Col 2 */}
        <div className="flex flex-col gap-[10px] w-full h-[556px]">
          <Screen image={video_png}
            size="l"
          />
        </div>

      </div>
    </section>
  )
}

export default CollectionSection;