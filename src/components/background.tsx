
export default function Background({ id, className, children }: Props) {

    className = className + " bg-green-100 dark:bg-gray-900 text-black-100 dark:text-gray-100"

    return (
        <div id={id} className={className}>
            {children}
        </div>
    );
}

interface Props {
    id?:string;
    className: string;
    children: any;
}
