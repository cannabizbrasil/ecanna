import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { ButtonVerde, ButtonBranco } from './buttons'

export default function Cta() {
    return (
        <div className="relative isolate bg-gray-900">
            <Image
                src="/fundo-2.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                width={1920}
                height={1080}
            />

            <div
                className="absolute left-[calc(50%-4rem)] top-10 -z-20 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 pb-12  pt-36 sm:pb-48 lg:flex lg:px-8 ">
                <div className="mx-auto max-w-4xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <h2 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Desbloqueie um Novo Capítulo na sua Jornada de Saúde com a CannaID
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-white">
                        CannaID é o seu próximo passo para uma vida mais tranquila e suave.
                        <br /><br />
                        Seus documentos de identificação de paciente de cannabis medicinal armazenadas de forma segura e sempre ao alcance de um simples toque.
                    </p>
                    <div className="pt-10">
                        <ButtonBranco href='#' target='' textobotao='COMEÇAR AGORA' />
                    </div>
                </div>
                <div className="mx-auto flex max-w-2xl  ">
                    <div className="">
                        <Image
                            src="/ai-generator-19.png"
                            alt="App screenshot"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}