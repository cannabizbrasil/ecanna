import Image from 'next/image'

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900">

            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl lg:flex-shrink-0 lg:pt-8">
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                        <span className="text-sm font-semibold leading-6 text-azul ">
                            O FUTURO DA SAÚDE NAS SUAS MÃOS
                        </span>
                    </div>
                    <h1 className="mt-6 text-3xl font-bold tracking-tight text-azulclaro sm:text-6xl">
                        A Identidade Inteligente para Pacientes Conscientes.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white">
                        CannaID é a solução essencial para pacientes conscientes da cannabis medicinal. Com sua identidade e QR code seguro, você tem acesso rápido a todos os seus documentos de paciente e garante sua carteirinha oficial de paciente medicinal de cannabis.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-full bg-verde px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-azulescuro focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azulclaro"
                        >
                            COMEÇAR GRATIS
                        </a>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="">
                            <Image
                                src="/ai-generator-16-1.png"
                                alt="App screenshot"
                                width={500}
                                height={600}
                                className="w-[38rem] "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
