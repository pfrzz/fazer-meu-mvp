import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                FAZERMEUMVP
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Transformamos ideias em MVPs funcionais para validar seu negócio. Desenvolvimento rápido, eficiente e
              focado no que realmente importa.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  MVP de Sites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  MVP de Aplicativos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Validação de Ideias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Consultoria
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span>contato@fazermeumvp.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span>(48) 99193-5956</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span>Florianópolis, SC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 fazermeuMVP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
