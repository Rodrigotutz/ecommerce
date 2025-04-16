import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-800 dark:to-neutral-950 dark:bg-neutral-800">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full lg:w-2/5 bg-white dark:bg-neutral-800 shadow-lg p-6">
          <div className="flex flex-col items-center">
            <div className="relative -mt-0">
              <Avatar className="h-32 w-32 border-4 border-white dark:border-neutral-700 shadow-md">
                <AvatarFallback className="text-4xl font-semibold bg-indigo-100 dark:bg-neutral-600 dark:text-white text-blue-600">
                  RT
                </AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 bg-blue-600 dark:bg-white dark:text-neutral-900 text-white p-2 rounded-full hover:bg-indigo-700 transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">
                Rodrigo Tutz
              </h2>
              <div className="mt-4 flex items-center justify-center text-gray-600 dark:text-white/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                São Paulo, Brasil
              </div>
            </div>

            <div className="mt-6 w-full space-y-3">
              <div className="flex items-center text-gray-600 dark:text-white/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                rodrigo@exemplo.com
              </div>
              <div className="flex items-center text-gray-600 dark:text-white/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                (11) 98765-4321
              </div>
            </div>

            <Button className="cursor-pointer mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-neutral-700 dark:hover:bg-neutral-600/80 transition duration-200 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Editar Perfil
            </Button>

            <div className="mt-8 w-full grid grid-cols-3 gap-2 text-center">
              <div className="p-3 bg-gray-50 dark:bg-neutral-900 rounded-lg">
                <p className="text-xl font-bold text-blue-600 dark:text-white">
                  42
                </p>
                <p className="text-xs text-gray-600 dark:text-white/60">
                  Produtos
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-neutral-900 rounded-lg">
                <p className="text-xl font-bold text-blue-600 dark:text-white">
                  3.5k
                </p>
                <p className="text-xs text-gray-600 dark:text-white/60">
                  Vendas
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-neutral-900 rounded-lg">
                <p className="text-xl font-bold text-blue-600 dark:text-white">
                  128
                </p>
                <p className="text-xs text-gray-600 dark:text-white/60">
                  Clientes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-6 lg:h-screen lg:overflow-y-auto">
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Dados do Usuário
            </h1>
            <p className="text-gray-600 dark:text-white/70">
              Bem-vindo de volta, Rodrigo! Aqui está o que está acontecendo
              hoje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 hover:shadow-md transition duration-200">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Produtos Vendidos</p>
                  <p className="text-xl font-bold">120</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 hover:shadow-md transition duration-200">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Produtos Cadastrados</p>
                  <p className="text-xl font-bold">23</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 hover:shadow-md transition duration-200">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Visitas ao Site</p>
                  <p className="text-xl font-bold">24522</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow overflow-hidden">
            <div className="border-b border-gray-200 dark:border-neutral-700 px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Atividade Recente
              </h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-neutral-700">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  title: "Novo produto cadastrado",
                  description: "Smart Phone Redmi",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  ),
                  title: "Perfil atualizado",
                  description: "Nome de Perfil atualizado - 1 dia atrás",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  title: "Novo Usuario Cadastrado",
                  description: "Marcius Mellen - 3 dias",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="px-6 py-4 flex items-start hover:bg-gray-50 transition duration-150"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    {activity.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-gray-200 dark:border-neutral-700 text-center">
              <button className="text-blue-600 hover:text-blue-800 dark:text-white text-sm font-medium">
                Ver todas as atividades
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
