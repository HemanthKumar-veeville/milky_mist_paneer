import { Badge } from "../../components/ui/badge";
import { CHARACTERS } from "../../lib/home";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({
  name,
  image,
  position,
  onClick,
}: {
  name: string;
  image: string;
  position: "right" | "left";
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="relative w-full flex justify-center mt-4 group 
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b254d] focus-visible:ring-offset-2 
      rounded-lg transition-transform duration-200 
      hover:scale-105 active:scale-95 
      touch-none tap-highlight-transparent"
  >
    <div className="relative w-full flex justify-center">
      <img
        className={`${
          position === "right"
            ? "w-[150px] h-[130px] object-contain"
            : "w-[205px] h-[130px] object-cover"
        } transition-transform duration-200`}
        alt={`${name} character`}
        src={image}
      />
      <Badge
        className={`absolute ${
          position === "right" ? "bottom-0 right-12" : "top-[80%] left-[10%]"
        } h-[31px] bg-[#0b254d] rounded-[32px] px-4 py-0 flex items-center justify-center 
        transition-colors duration-200 group-hover:bg-[#1a3b6d] group-active:bg-[#0b254d]`}
      >
        <span className="text-white text-center font-[helvetica] text-[19px] font-normal leading-[110%] tracking-[-0.57px]">
          {name}
        </span>
      </Badge>
    </div>
  </button>
);

export const Screen = (): JSX.Element => {
  const navigate = useNavigate();

  const handleCharacterSelect = (characterName: string) => {
    const urlCharacter = characterName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/game/${urlCharacter}`);
  };

  return (
    <main
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="425:2688"
    >
      <div className="bg-white w-[390px] relative h-full">
        <header className="w-full h-[120px] relative">
          <img
            className="w-[171px] h-[106px] absolute left-1/2 -translate-x-1/2 object-cover"
            alt="Power of Protein"
            src="/img/image-15.png"
          />
        </header>

        <h1 className="text-center text-[#0b254d] text-[19px] tracking-[-0.57px] leading-[110%] font-[helvetica] font-normal mt-0 mb-4">
          Choose Your Player
        </h1>
        <div className="flex flex-col items-center">
          {CHARACTERS.map((character) => (
            <CharacterCard
              key={character.name}
              {...character}
              onClick={() => handleCharacterSelect(character.name)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
