import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { ButtonBranco } from './buttons'

const beneficios = [
  {
    id: 1,
    title: 'Armazene seus documentos com segurança',
    href: '#',
    description:
      'Tenha acesso fácil e rápido aos seus documentos no momento em que precisar.',
    icon: ServerIcon,
  },
  {
    id: 2,
    title: 'Registro médico especializado',
    href: '#',
    description:
      'Nosso sistema foi desenhado para entregar confiabilidade ao manter e apresentar seus registros documentais',
    icon: ServerIcon,
  },
  {
    id: 3,
    title: 'Para começar, é GRÁTIS',
    href: '#',
    description:
      'Não pague nada para começar a utilizar nossos serviços e garantir sua carteirinha oficial de paciente de cannabis',
    icon: ServerIcon,
  },

]

export default function Beneficios() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-x-16 gap-y-24 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {beneficios.map((beneficio) => (
            <article key={beneficio.id} className="relative isolate flex flex-col rounded-2xl bg-gray-700 px-10 py-10 ">
              <div className="flex flex-col h-full">  <div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <div className="absolute mx-auto -top-10 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600">
                    <beneficio.icon className="h-12 w-12 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl pt-10 font-bold leading-6 text-white">
                  {beneficio.title}
                </h3>
                <p className="text-lg leading-6 text-white pt-8 pb-12">{beneficio.description}</p>
              </div>
                <div className="flex mx-auto justify-end -mb-16 mt-auto">  <ButtonBranco textobotao='COMEÇAR GRÁTIS' target='' href='#' />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
