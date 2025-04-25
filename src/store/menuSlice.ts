
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'appetizer' | 'main' | 'dessert' | 'drink';
  isSpecial?: boolean;
  allergens?: string[];
}

interface MenuState {
  items: MenuItem[];
  isLoading: boolean;
  error: string | null;
  categories: string[];
}

const initialState: MenuState = {
  items: [
    {
      id: '1',
      name: 'Truffle Risotto',
      description: 'Creamy Arborio rice cooked with wild mushrooms and finished with truffle oil',
      price: 18.99,
      image: '/images/truffle-risotto.jpg',
      category: 'main',
      isSpecial: true,
    },
    {
      id: '2',
      name: 'Beef Carpaccio',
      description: 'Thinly sliced raw beef with arugula, capers, and parmesan',
      price: 12.99,
      image: '/images/beef-carpaccio.jpg',
      category: 'appetizer',
    },
    {
      id: '3',
      name: 'Chocolate Soufflé',
      description: 'Warm chocolate soufflé with vanilla ice cream',
      price: 9.99,
      image: '/images/chocolate-souffle.jpg',
      category: 'dessert',
    },
    {
      id: '4',
      name: 'Signature Martini',
      description: 'Our signature martini with premium vodka and a twist of lemon',
      price: 12.99,
      image: '/images/signature-martini.jpg', 
      category: 'drink',
    },
    {
      id: '5',
      name: 'Seared Scallops',
      description: 'Fresh scallops seared to perfection with a citrus beurre blanc',
      price: 24.99,
      image: '/images/seared-scallops.jpg',
      category: 'main',
      isSpecial: true,
    },
    {
      id: '6',
      name: 'Artisan Cheese Plate',
      description: 'Selection of fine cheeses with honey, nuts, and artisan crackers',
      price: 16.99,
      image: '/images/cheese-plate.jpg',
      category: 'appetizer',
    },
    {
      id: '7',
      name: 'Crème Brûlée',
      description: 'Classic vanilla custard with a caramelized sugar top',
      price: 8.99,
      image: '/images/creme-brulee.jpg',
      category: 'dessert',
    },
    {
      id: '8',
      name: 'Craft Old Fashioned',
      description: 'Premium bourbon with aromatic bitters and a touch of maple syrup',
      price: 14.99,
      image: '/images/old-fashioned.jpg',
      category: 'drink',
    }
  ],
  categories: ['appetizer', 'main', 'dessert', 'drink'],
  isLoading: false,
  error: null
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuItems: (state, action: PayloadAction<MenuItem[]>) => {
      state.items = action.payload;
    },
    addMenuItem: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload);
    },
    updateMenuItem: (state, action: PayloadAction<MenuItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeMenuItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  setMenuItems, 
  addMenuItem, 
  updateMenuItem, 
  removeMenuItem, 
  setLoading, 
  setError 
} = menuSlice.actions;
export default menuSlice.reducer;
