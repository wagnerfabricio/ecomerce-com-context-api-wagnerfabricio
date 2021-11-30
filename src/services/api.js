import axios from 'axios'

export const api = axios.create({
  baseURL: "https://kenzieshop.herokuapp.com",
});

export const productsDataBase = [
  {
    id: 1,
    title: "Calça jeans escura",
    price: 200,
    description: "Calça jeans modelo boby babe com costura reforçada",
    img: "https://cdn.awsli.com.br/300x300/1839/1839786/produto/1198769261245483b20.jpg",
  },
  {
    id: 2,
    title: "Calça jeans com aplique ",
    price: 580,
    description: "Calça jeans babe bella com apliques em renda",
    img: "https://i.pinimg.com/474x/3f/b1/0e/3fb10eba3db57bd90d15e05b93581579.jpg",
  },
  {
    id: 3,
    title: "Short bege ",
    description: "Short bege clássico, tecido de seda",
    price: 100,
    img: "https://i.pinimg.com/originals/73/27/28/7327286ce6618badd6582888b2cd6494.png",
  },
  {
    id: 4,
    title: "Camisa alien ",
    description: "Camisa divertida, tema alien, 100% poliester",
    price: 130,
    img: "https://i.pinimg.com/564x/c2/5d/66/c25d66f9bdda12f5c9fdbe8ddaf21b9f.jpg",
  },
  {
    id: 5,
    title: "Camisa flores ",
    price: 190,
    description: "Camisa elegante com tema de flores, modelo 1950",
    img: "https://i.pinimg.com/750x/e3/6a/ae/e36aae5c094214d6451abf9046ed3696.jpg",
  },
  {
    id: 6,
    title: "Short praia ",
    price: 80,
    description: "Moda praia 2021, short com estampa doggie",
    img: "https://i.pinimg.com/564x/1b/5a/9b/1b5a9b70eba31f4177b155c31b79d7fd.jpg",
  },
  {
    id: 7,
    title: "Tênis branco ",
    price: 199,
    description: "Tênis clássico branco soft clean",
    img: "https://i.pinimg.com/474x/e0/39/d7/e039d7027452158a2d9eb40e0bae293d.jpg",
  },
  {
    id: 8,
    title: "Havaianas ",
    price: 19,
    description: "Calçado multiuso, serve para ir a praia, shopping e enterros",
    img: "https://i.pinimg.com/564x/11/46/42/114642bfcfb2c183891e7e7afb16daf0.jpg",
  },
  {
    id: 9,
    title: "Meia astronauta ",
    price: 9,
    description: "Conjunto de meias tamanho médio com tema astronauta",
    img: "https://i.pinimg.com/564x/1a/99/d4/1a99d4dc95c4b888eb5c72c0fe962ea9.jpg",
  },
  {
    id: 10,
    title: "Meia stonehenge ",
    price: 19,
    description: "Conjunto de meias divertidas médio com tema stonehenge",
    img: "https://i.pinimg.com/564x/e5/ce/8f/e5ce8f80ed3ee01f4d3cf228b5914f85.jpg",
  },
  {
    id: 11,
    title: "Colar borboleta",
    description: "Colar feito com vidro de dragão azul",
    price: 59,
    img: "https://i.pinimg.com/564x/76/48/fc/7648fc2a4c53009429d3210af95ba3a3.jpg",
  },
  {
    id: 12,
    title: "Colar hammer",
    description:
      "Colar com réplica do martelo de Thor, feito em puro Uru metal",
    price: 159,
    img: "https://i.pinimg.com/474x/3e/d0/5d/3ed05d21ddd6f8ad12669a27eb3ce934.jpg",
  },
  {
    id: 13,
    title: "Luva biker",
    price: 39,
    description: "Luva biker feita em couro de puma",
    img: "https://i.pinimg.com/474x/bf/65/9f/bf659fb2065e60a978e2c436d1ca1236.jpg",
  },
  {
    id: 14,
    title: "Luva casamento",
    description:
      "Luva de casamento, perfeita para o dia mais feliz de uma noiva",
    price: 939,
    img: "https://i.pinimg.com/474x/c8/dd/9c/c8dd9c852dd895d1a3a802c6829657f6.jpg",
  },
  {
    id: 15,
    title: "Bolsa clássica",
    description: "Com detalhes xadrez e ziper duplo, acompanha porta moedas",
    price: 339,
    img: "https://i.pinimg.com/564x/98/29/0f/98290f2f8fbc4b7d3b5b8b3c5b30c6ad.jpg",
  },

  {
    id: 16,
    title: "Jaqueta jeans",
    description: "Básica, cor azul",
    price: 629,
    img: "https://i.pinimg.com/564x/29/f3/7e/29f37ed18b2e84d6a87f84e3f1ebef1f.jpg",
  },
];

