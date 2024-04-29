import HubspotEcannaForm from "./hubspotform"
import Image from 'next/image'



export default function Footer() {
    return (
        <footer className="bg-verde" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="grid xl:grid-cols-4 gap-8">
                    <div className="xl:col-span-1">
                        <div className="">
                            <div>
                                <Image
                                    src="/ecanna-logo-white.png"
                                    alt="Ecanna"
                                    width={200}
                                    height={60}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-2">
                        <div>
                            <h3 className="text-4xl font-semibold leading-snug text-white">Cadastre para receber promoções e novas oportunidades da ECanna</h3>
                        </div>
                    </div>
                    <div className="mt-10 xl:mt-0  xl:col-span-1">
                        <HubspotEcannaForm />
                    </div>
                </div>
            </div>

            <div className=" border-t bg-black border-white/10 py-4 flex  justify-center">
                <div className="flex max-w-7xl  ">

                </div>
                <p className="mt-8 text-xs leading-5 text-gray-400 md:mt-0">
                    &copy; 2024 ECanna, todos os direitos resservados
                </p>
            </div>
        </footer>
    )
}
