import MotoG200 from '../assets/MotoG200.png';
import MotoG71 from '../assets/MotoG71.png';
import MotoG60s from '../assets/MotoG60s.png';
import SmartTVSamsung from '../assets/SmartTvSamsung32.png';
import SmartTVSamsung43 from '../assets/SmartTvSamsung43.png';
import Soporte from '../assets/Soporte.png';
import TabletLenovoM10 from '../assets/TabletLenovoM10.png';
import MousePadG240 from '../assets/MousePadG240.png';

const productos = [
    {
        id: 1,
        nombre: "Moto G200",
        desc: "Celular con 128 GB de memoria interna, 8GB de memoria RAM y bateria de 5000 mAh.",
        precio: 99999.00,
        categoria: "celulares",
        img: MotoG200,
        stock: 10
    },
    {
        id: 2,
        nombre: 'Smart TV 32" HD Samsung',
        desc: "Smart TV de Samsung de 32 pulgadas, incluye Youtube y Netflix.",
        precio: 47999.00,
        categoria: "TV",
        img: SmartTVSamsung,
        stock: 13
    },
    {
        id: 3,
        nombre: "Moto G71 5g",
        desc: "Celular con 128 GB de memoria interna, 6GB de memoria RAM y bateria de 5000 mAh.",
        precio: 59999.00,
        categoria: "celulares",
        img: MotoG71,
        stock: 4
    },
    {
        id: 4,
        nombre: 'Smart TV 4K UHD Samsung 43"',
        desc: "Smart TV de Samsung de 43 pulgadas, 4K. Incluye Youtube y Netflix.",
        precio: 79999,
        categoria: "TV",
        img: SmartTVSamsung43,
        stock: 3
    },
    {
        id: 5,
        nombre: 'Soporte de escritorio para notebook',
        desc: "Soporte de escritorio para notebook universal IPHO98, marca Tagwood.",
        precio: 7930,
        categoria: "soporte",
        img: Soporte,
        stock: 9
    },
    {
        id: 6,
        nombre: 'Moto G60s',
        desc: "Celular Samsung con 128 GB de memoria interna, 6GB de memoria RAM y bateria de 5000 mAh.",
        precio: 73999,
        categoria: "celulares",
        img: MotoG60s,
        stock: 20
    },
    {
        id: 7,
        nombre: 'Tablet Lenovo M10 10,1" + Funda',
        desc: "Tablet Lenovo de 10 Pulgadas con 64GB de memoria intern, 4GB de RAM, sistema operativo Android 10.",
        precio: 73999,
        categoria: "tablets",
        img: TabletLenovoM10,
        stock: 30
    },
    {
        id: 8,
        nombre: 'G240 Cloth Gaming Mouse Pad',
        desc: "Mouse Pad Logitech G420.",
        precio: 73999,
        categoria: "pads",
        img: MousePadG240,
        stock: 30
    }
]

export default productos