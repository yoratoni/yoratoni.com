import { IsWorkCard } from "@/types/general";


type WorkCardProps = {
    card: IsWorkCard;
};

export default function WorkCard({
    card
}: WorkCardProps) {
    return (
        <a
            className="w-full max-w-[650px] rounded-lg cursor-pointer relative flex shadow-io overflow-hidden hover:bg-gray-200 hover:bg-opacity-5 transition-colors duration-150"
            href={card.link}
            target="_blank"
            rel="noreferrer"
        >
            <div
                className="absolute w-full h-full rounded-lg"
                style={{
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: -1
                }}
            />

            <div className="relative h-full rounded-l-lg shadow-black shadow-io max-sm:hidden aspect-square">
                <img
                    className={`
                        absolute top-0 left-0 w-full h-full object-contain rounded-l-lg
                        ${!card.image && "opacity-30"}
                    `}
                    src={card.image}
                    style={{
                        backgroundImage: "linear-gradient(45deg, #242424 25%, #1a1a1a 25%, #1a1a1a 50%, #242424 50%, #242424 75%, #1a1a1a 75%, #1a1a1a 100%)",
                        backgroundSize: "56.57px 56.57px",
                        border: "none"
                    }}
                />
            </div>

            <div className="flex-col items-start justify-center px-8 text-left py-7">
                <h5 className="pb-4 text-3xl font-normal">
                    {card.title}
                </h5>

                <p className="text-sm font-normal text-shadow max-w-[400px] pb-4">
                    {card.description}
                </p>

                <p className="text-xs font-medium text-shadow max-w-[400px]">
                    {card.technologies.map((tech, index) => (
                        <div key={index} className="inline-block">
                            <span>{tech}</span>

                            {index < card.technologies.length - 1 && (
                                <span className="mx-2">•</span>
                            )}
                        </div>
                    ))}
                </p>
            </div>
        </a>
    );
}