import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
    { value: 'monthly', label: 'Mês', priceSuffix: '/mês' },
    { value: 'annually', label: 'Ano', priceSuffix: '/ano' },
]
const tiers = [
    {
        name: 'Free',
        id: 'tier-freelancer',
        href: '#',
        price: { monthly: 'R$0', annually: 'R$0' },
        description: 'The essentials to provide your best work for clients.',
        features: [
            'Carteirinha digital oficial',
            'Upload de até 1 documento',
            'Upload ilimitado de documentos',
            'Carteirinha física',
        ],
        mostPopular: false,
    },
    {
        name: 'Premium',
        id: 'tier-startup',
        href: '#',
        price: { monthly: 'R$9', annually: 'R$99' },
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            'Carteirinha digital oficial',
            'Upload de até 1 documento',
            'Upload ilimitado de documentos',
            'Carteirinha física',
        ],
        mostPopular: false,
    },
    {
        name: 'Green',
        id: 'tier-enterprise',
        href: '#',
        price: { monthly: '$9', annually: '$99' },
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Carteirinha digital oficial',
            'Upload de até 1 documento',
            'Upload ilimitado de documentos',
            'Carteirinha física',

        ],
        mostPopular: true,
    },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Price() {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">

                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Escolha o melhor plano
                    </p>
                </div>

                <div className="mt-16 flex justify-center">
                    <RadioGroup
                        value={frequency}
                        onChange={setFrequency}
                        className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
                    >
                        <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                        {frequencies.map((option) => (
                            <RadioGroup.Option
                                key={option.value}
                                value={option}
                                className={({ checked }) =>
                                    classNames(
                                        checked ? 'bg-indigo-600 text-white' : 'text-gray-500',
                                        'cursor-pointer rounded-full px-2.5 py-1'
                                    )
                                }
                            >
                                <span>{option.label}</span>
                            </RadioGroup.Option>
                        ))}
                    </RadioGroup>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div key={tier.id} className={classNames(
                            tier.mostPopular ? 'ring-2 ring-green-600 bg-green-300' : 'ring-1 ring-gray-200 bg-white',
                            'rounded-3xl p-8 xl:p-10'
                        )}
                        >
                            <div className="absolute -mt-16 z-20 ">
                                {tier.mostPopular ? (
                                    <p className="relative px-6 py-2 mx-auto flex items-center justify-center rounded-full bg-green-500">
                                        Mais Popular
                                    </p>
                                ) : null}
                            </div>
                            <div className="flex items-center justify-between gap-x-4">
                                <h3
                                    id={tier.id}
                                    className={classNames(
                                        tier.mostPopular ? 'text-green-600 justify-center' : 'text-gray-900',
                                        'text-lg font-semibold leading-8'
                                    )}
                                >
                                    {tier.name}
                                </h3>

                            </div>

                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                                <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
                            </p>

                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex mx-auto justify-center pt-10 -mb-16 mt-auto">
                                <a
                                    href={tier.href}
                                    aria-describedby={tier.id}
                                    className={classNames(
                                        tier.mostPopular


                                            ? 'bg-gradient-to-br from-green-500 from-10% to-green-700 to-95% hover:from-azul hover:to-azulescuro text-gray-800 hover:text-gray-600'
                                            : 'bg-gradient-to-br from-azulescuro from-10% to-azulclaro to-95% hover:from-green-500 hover:to-green-700 text-gray-800 hover:text-gray-600',
                                        'transition-all ease-in-out rounded-full px-16 py-4 text-md font-semibold shadow-xl hover:shadow-sm duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                    )}
                                >
                                    ESCOLHER PLANO
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
