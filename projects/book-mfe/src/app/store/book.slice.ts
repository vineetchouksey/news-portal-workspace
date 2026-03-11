export interface BookSlice {
  readonly books: BookInterface[];
  readonly loading: boolean;
  readonly error: string | null;
}

export const initialBookSlice: BookSlice = {
  books: [],
  loading: false,
  error: null,
};

export interface BookInterface {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
  index: number;
}
