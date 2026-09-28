import {
    Accessibility,
    BadgeCheck,
    Cable,
    ClipboardList,
    CreditCard,
    Drill,
    Headset,
    LampCeiling,
    Lightbulb,
    Package,
    Send,
    ShieldCheck,
    Store,
    ToggleRight,
    Truck,
    Wallet,
    Waypoints,
} from 'lucide-react'

import storefront from '../assets/image1.jpg'
import storefrontSide from '../assets/image3.jpg'
import lightingShowroom from '../assets/image2.jpg'
import pendantLamps from '../assets/image4.jpg'
import storeEntrance from '../assets/image5.jpg'
import toolsWall from '../assets/image6.jpg'
import counter from '../assets/image7.jpg'
import mainAisle from '../assets/image8.jpg'
import stockAisle from '../assets/image9.jpg'

export const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'diferenciais', label: 'Diferenciais' },
    { id: 'loja', label: 'A Loja' },
    { id: 'como-comprar', label: 'Como Comprar' },
    { id: 'contato', label: 'Contato' },
]

export const images = {
    storefront,
    storefrontSide,
    storeEntrance,
}

export const categories = [
    {
        icon: Cable,
        title: 'Fios e Cabos',
        description: 'Cabos flexíveis, PP, paralelos e de rede nas bitolas certas para cada circuito.',
        tags: ['Flexíveis', 'PP', 'Rede'],
    },
    {
        icon: ShieldCheck,
        title: 'Disjuntores e Proteção',
        description: 'Disjuntores, DR, DPS e quadros de distribuição para uma instalação segura.',
        tags: ['DR', 'DPS', 'Quadros'],
    },
    {
        icon: Lightbulb,
        title: 'Iluminação LED',
        description: 'Lâmpadas, painéis, refletores e fitas LED com economia e alta durabilidade.',
        tags: ['Lâmpadas', 'Painéis', 'Refletores'],
    },
    {
        icon: LampCeiling,
        title: 'Luminárias Decorativas',
        description: 'Pendentes, spots, arandelas e lustres para valorizar cada ambiente.',
        tags: ['Pendentes', 'Spots', 'Arandelas'],
    },
    {
        icon: ToggleRight,
        title: 'Tomadas e Interruptores',
        description: 'Linhas modulares do básico ao alto padrão, com placas e acabamentos variados.',
        tags: ['Modulares', 'Placas', 'USB'],
    },
    {
        icon: Waypoints,
        title: 'Eletrodutos e Conduítes',
        description: 'Conduítes corrugados, eletrodutos rígidos, curvas, caixas e acessórios.',
        tags: ['Corrugados', 'Rígidos', 'Caixas'],
    },
    {
        icon: Drill,
        title: 'Ferramentas Elétricas',
        description: 'Alicates, testadores, multímetros, furadeiras e ferramentas para o eletricista.',
        tags: ['Alicates', 'Multímetros', 'Furadeiras'],
    },
    {
        icon: Package,
        title: 'Materiais para Instalação',
        description: 'Conectores, terminais, fitas isolantes, abraçadeiras, extensões e adaptadores.',
        tags: ['Conectores', 'Fitas', 'Extensões'],
    },
]

export const differentials = [
    {
        icon: Headset,
        title: 'Atendimento técnico',
        description: 'Equipe que entende de elétrica e ajuda você a escolher o material certo para a sua obra.',
    },
    {
        icon: BadgeCheck,
        title: 'Do alto padrão ao econômico',
        description: 'Marcas reconhecidas e opções para todos os orçamentos, sem abrir mão da segurança.',
    },
    {
        icon: Truck,
        title: 'Entrega em domicílio',
        description: 'Levamos o seu pedido até a obra ou até a sua casa em Matinhos e região.',
    },
    {
        icon: Store,
        title: 'Retirada rápida',
        description: 'Compre pelo WhatsApp e retire na loja ou na porta, sem perder tempo.',
    },
    // TODO: si aceptan Pix y efectivo, añadirlo aquí (en Google solo figuran crédito, débito y NFC).
    {
        icon: CreditCard,
        title: 'Pagamento facilitado',
        description: 'Cartões de crédito, débito e pagamento por aproximação (NFC).',
    },
    {
        icon: Accessibility,
        title: 'Loja acessível',
        description: 'Entrada acessível para cadeirantes e um espaço amplo e organizado.',
    },
]

export const buySteps = [
    {
        icon: ClipboardList,
        title: 'Envie sua lista',
        description: 'Mande a lista de materiais ou uma foto do projeto pelo WhatsApp.',
    },
    {
        icon: Send,
        title: 'Receba o orçamento',
        description: 'Nossa equipe confere tudo e envia o orçamento completo, sem compromisso.',
    },
    {
        icon: Truck,
        title: 'Retire ou receba',
        description: 'Escolha retirar na loja ou receber no endereço da sua obra.',
    },
    {
        icon: Wallet,
        title: 'Pague como preferir',
        description: 'Crédito, débito ou aproximação, direto na loja ou na entrega.',
    },
]

export const gallery = [
    { src: storeEntrance, alt: 'Vista interna da loja com corredores organizados' },
    { src: lightingShowroom, alt: 'Showroom de luminárias pendentes e iluminação' },
    { src: counter, alt: 'Balcão de atendimento e expositores de materiais elétricos' },
    { src: pendantLamps, alt: 'Luminárias decorativas em exposição' },
    { src: mainAisle, alt: 'Corredor principal com produtos e luminárias' },
    { src: toolsWall, alt: 'Expositores de acessórios e materiais para instalação' },
    { src: stockAisle, alt: 'Prateleiras com estoque de produtos elétricos' },
]
