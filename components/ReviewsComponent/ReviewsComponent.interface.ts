export interface ReviewProps {
  reviews: Review[];
}

export type Review = {
  id: string;
  name: string;
  image: string;
  review: string;
};
