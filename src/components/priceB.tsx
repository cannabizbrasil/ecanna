import { CheckIcon } from '@heroicons/react/20/solid'
import { ButtonBranco, ButtonVerde } from './buttons'
import Image from 'next/image'

const includedFeatures = [
    'Upload ilimitado de documentos',
    'Suporte ilimitado ',
    'Carteirinha digital',
    'Carteirinha fisica',
]

export default function PriceB() {
    return (
        <div className="relative isolate py-24 sm:py-32">
            <Image
                src="/fundo-3.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                width={1920}
                height={1080}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Faça sua associação</h2>

                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-3xl font-bold tracking-tight text-verde">Associado Anual</h3>
                        <p className="mt-6 text-base leading-7 text-white">
                            Faça sua inscrição e desfrute da segurança e dos beneficios de nosso documento de identificação.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-xl font-semibold leading-6 text-verde">Inclui:</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 text-white sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-verde" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Pague uma vez, use por 1 ano</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">R$</span>
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">9,90</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">/mês</span>
                                </p>
                                <div className="mt-4">
                                    <ButtonBranco href="#" textobotao='ASSOCIAR' target='' />
                                </div>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    O valor cobrado será de R$ 118,80, equivalente a 12 meses de inscrição. *Esse valor pode ser parcelado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
