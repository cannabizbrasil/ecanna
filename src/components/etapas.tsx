import Image from 'next/image'
import { ButtonVerde, ButtonBranco } from './buttons'

export default function Etapas() {
    return (
        <div className="relative isolate bg-verde">

            <div
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
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
            <div className="mx-auto max-w-7xl py-48 px-6 pt-32 lg:flex lg:px-8 ">
                <div className="mx-auto max-w-4xl flex-shrink-0 lg:mx-0 lg:max-w-2xl lg:pt-8">
                    <div className="">

                        <div className="border-b-2 py-8 border-dashed border-azul mr-24 flex flex-cols-2">
                            <div>
                                <h1 className="text-8xl font-bold text-azul pr-4">1</h1>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold tracking-tight text-white sm:text-5xl ">
                                    preencha <br />seus dados
                                </h4>
                            </div>
                        </div>

                        <div className="border-b-2 py-8 ml-12 mr-12 border-dashed border-azul flex flex-cols-2">
                            <div>
                                <h1 className="text-8xl font-bold text-azul pr-4">2</h1>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold tracking-tight text-white sm:text-5xl ">
                                    preencha <br />seus dados
                                </h4>
                            </div>
                        </div>

                        <div className=" py-8 ml-24  flex flex-cols-2">
                            <div>
                                <h1 className="text-8xl font-bold text-azul pr-4">3</h1>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold tracking-tight text-white sm:text-5xl ">
                                    preencha <br />seus dados
                                </h4>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mx-auto max-w-md ">
                    <div className="">
                        <Image
                            src="/ai-generator-6-1.png"
                            alt="App screenshot"
                            width={400}
                            height={400}
                        />
                    </div>
                    <ButtonBranco href="https://www.ecanna.com.br/cadastrar" target="" textobotao='COMEÇAR AGORA' />
                </div>
            </div>
        </div >
    )
}
