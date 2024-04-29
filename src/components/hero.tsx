import Image from 'next/image'
import { ButtonBranco, ButtonVerde } from './buttons'

export default function Hero() {
    return (
        <div className="relative isolate bg-azul">
            <Image
                src="/fundo-1.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                width={1920}
                height={1080}
            />
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pb-8 lg:flex lg:px-8 lg:py-36">
                <div className="mx-auto max-w-3xl lg:mx-0  lg:flex-shrink-0 lg:pt-8">
                    <div className="mt-18 sm:mt-24 lg:mt-12">
                        <span className="text-sm font-semibold leading-6 text-verde ">
                            O FUTURO DA SAÚDE NAS SUAS MÃOS
                        </span>
                    </div>
                    <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                        A IDENTIDADE INTELIGENTE PARA PACIENTES CONSCIENTES.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white">
                        CannaID é a solução essencial para pacientes conscientes da cannabis medicinal. Com sua identidade e QR code seguro, você tem acesso rápido a todos os seus documentos de paciente e garante sua carteirinha oficial de paciente medicinal de cannabis.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <ButtonVerde href="#" target='' textobotao='COMEÇAR AGORA' />
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="">
                            <Image
                                src="/imagem-hero.png"
                                alt="App screenshot"
                                width={500}
                                height={600}
                                className="w-[22rem] lg:w-[30rem] lg:-mb-96 "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
