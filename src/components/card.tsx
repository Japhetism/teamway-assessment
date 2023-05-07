export default function Card({
    title,
    description,
    linkName,
    linkUrl,
    image,
}: CardProps) {
    return (
        <div className="max-w-sm w-full lg:max-w-6xl lg:flex">
            <div className="h-48 lg:h-auto lg:w-60 flex-none bg-fit rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${image})`}} title={title}>
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                   {description}
                </p>
                </div>
                <div className="flex items-center">
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <a href={linkUrl}>{linkName}</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface CardProps {
    title: string;
    description: string;
    linkName: string;
    linkUrl: string;
    image: string;
}
