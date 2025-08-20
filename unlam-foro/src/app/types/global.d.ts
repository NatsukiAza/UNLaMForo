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
  comision?: {
    codigo: number;
    profes: string;
    materia: {
      name: string;
      codigo: number;
    };
  };
  votos: {
    value: number;
    id: number;
  }[];
};