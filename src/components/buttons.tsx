import Link from 'next/link'

const textobotao = "Começe Agora"
const href = "#"
const target = ""

interface ButtonProps {
    textobotao: string;
    href: string;
    target: string;
}

export function ButtonVerde({ textobotao, href }: ButtonProps) {
    return (
        <button
            type="button"
            className="transition-all ease-in-out rounded-full px-16 py-4 text-md font-semibold bg-gradient-to-br from-verde from-10% to-verde to-95% hover:from-verde hover:to-azulescuro text-white shadow-xl hover:text-white hover:shadow-sm duration-500 "
        >
            <Link href={href} target={target}>
                {textobotao}
            </Link>
        </button>
    );
}

export function ButtonBranco({ textobotao, href }: ButtonProps) {
    return (
        <button
            type="button"
            className="transition-all ease-in-out rounded-full px-16 py-4 text-md font-semibold bg-gradient-to-br from-azulescuro from-10% to-verde to-95% hover:from-azulclaro hover:to-azulescuro text-white shadow-xl hover:text-white hover:shadow-sm duration-500 "
        >
            <Link href={href} target={target}>
                {textobotao}
            </Link>
        </button>
    );
}

export function ButtonGradient({ textobotao, href }: ButtonProps) {
    return (
        <button
            type="button"
            className="transition-all ease-in-out rounded-full px-16 py-4 text-md font-semibold bg-gradient-to-br from-green-500 from-10% to-green-700 to-95% hover:from-azul hover:to-azulescuro text-gray-800 shadow-xl hover:text-gray-600 hover:shadow-sm duration-500 "
        >
            <Link href={href} target={target}>
                {textobotao}
            </Link>
        </button>

    );
}