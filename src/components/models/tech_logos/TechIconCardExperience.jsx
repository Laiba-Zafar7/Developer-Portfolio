const TechIconCardExperience = ({ model }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img
        src={model.image}
        alt={model.name}
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
      />
    </div>
  );
};

export default TechIconCardExperience;