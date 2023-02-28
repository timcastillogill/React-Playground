interface ShoppingListItem {
  text: string;
  complete: boolean;
}

type ToggleShoppingListItem = (
  selectedShoppingListItem: ShoppingListItem
) => void;

type addShoppingListItem = (text: string) => void;
