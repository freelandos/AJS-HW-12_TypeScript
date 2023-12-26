import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  totalCost(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  discountedTotalCost(discount: number): number {
    return this._items.reduce((total, item) => total + item.price * (1 - discount / 100), 0);
  }

  remove(id: number): void {
    const itemIndex = this._items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
        this._items.splice(itemIndex, 1);
    }
  }
}
