import type { Chapa, Voto } from './types';


const CHAPAS_KEY = 'gremio_chapas';
const VOTOS_KEY = 'gremio_votos';
const ELEICAO_KEY = 'gremio_eleicao';


export interface ConfigEleicao {
  nome: string;
  anoLetivo: string;
  escola: string;
  aberta: boolean;
  inicio: string;
  fim: string;
}


const chapasDefault: Chapa[] = [
  {
    id: 'chapa-a',
    nome: 'Chapa Renovação',
    numero: 1,
    proposta: 'Mais espaços de convivência, reforço escolar gratuito e biblioteca aberta nos fins de semana.',
    cor: '#3b56e8',
    membros: ['Ana Lima (Candidata a Presidente)', 'Bruno Costa (Vice)', 'Carla Souza', 'Diego Matos'],
  },
  {
    id: 'chapa-b',
    nome: 'Chapa União',
    numero: 2,
    proposta: 'Cantina com preços justos, quadra reformada e mais eventos culturais para todos.',
    cor: '#e53935',
    membros: ['Fernanda Rocha (Candidata a Presidente)', 'Gabriel Silva (Vice)', 'Helena Nunes', 'Igor Alves'],
  },
  {
    id: 'chapa-c',
    nome: 'Chapa Futuro',
    numero: 3,
    proposta: 'Laboratório de informática atualizado, grêmio digital e sustentabilidade na escola.',
    cor: '#16a34a',
    membros: ['Julia Mendes (Candidata a Presidente)', 'Kaio Ferreira (Vice)', 'Larissa Pinto', 'Marcos Reis'],
  },
];


const eleicaoDefault: ConfigEleicao = {
  nome: 'Eleição do Grêmio Estudantil 2026',
  anoLetivo: '2026',
  escola: 'CECM Onze de Outubro',
  aberta: true,
  inicio: '2026-09-15',
  fim: '2026-09-20',
};


export function getChapas(): Chapa[] {
  try {
    const raw = localStorage.getItem(CHAPAS_KEY);
    return raw ? JSON.parse(raw) : chapasDefault;
  } catch {
    return chapasDefault;
  }
}


export function saveChapas(chapas: Chapa[]) {
  localStorage.setItem(CHAPAS_KEY, JSON.stringify(chapas));
}


export function getVotos(): Voto[] {
  try {
    const raw = localStorage.getItem(VOTOS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
