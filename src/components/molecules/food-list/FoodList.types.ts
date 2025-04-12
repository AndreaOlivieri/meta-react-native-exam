export type FoodListItem = {
  name: string;
  description: string;
  cost: number;
  types: string[];
  image: any;
};

export type FoodListProps = {
  foodMenu: FoodListItem[];
};
