interface ShoppingListItem {
  id: number;
  quantity: number;
  text: string;
  complete: boolean;
}

type ToggleShoppingListItem = (
  selectedShoppingListItem: ShoppingListItem
) => void;

type AddShoppingListItem = (text: string) => void;
type InputErrorCheck = ReactNode;
