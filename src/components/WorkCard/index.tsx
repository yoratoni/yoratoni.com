import { IsWorkCard } from "@/types/general";


type WorkCardProps = {
    card: IsWorkCard;
};

export default function WorkCard({
    card
}: WorkCardProps) {
    return (
        <a
            className={`
                w-full px-8 py-7 max-w-[650px] rounded-lg cursor-pointer
                flex flex-col justify-center items-start text-left
                shadow-xl
            `}
            style={{
                backgroundColor: card.bgColor,
                color: card.color
            }}
        >
            <h5 className="pb-4 text-3xl font-normal">
                {card.title}
            </h5>

            <p className="text-sm font-normal text-shadow max-w-[400px]">
                {card.description}
            </p>
        </a>
    );
}