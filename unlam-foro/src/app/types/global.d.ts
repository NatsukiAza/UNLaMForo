export type Post = {
  id: number;
  titulo: string;
  contenido: string;
  fecha: Date;
  usuarioId: number | null;
  comisionId: number;
  anonymousId: string | null;
  usuario: {
    name: string;
  } | null;
  votos: {
    value: number;
    id: number;
  }[];
};