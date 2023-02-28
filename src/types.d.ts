interface ShoppingListItem {
  text: string;
  complete: boolean;
}

type ToggleShoppingListItem = (
  selectedShoppingListItem: ShoppingListItem
) => void;

type AddShoppingListItem = (text: string) => void;
