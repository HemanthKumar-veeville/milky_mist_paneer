export const Character = ({
  name,
  image,
  position = "middle",
}: {
  name: string;
  image: string;
  position: "top" | "middle" | "bottom";
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
