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
      image: 'https://images.unsplash.com/photo-1673165846880-c7513dfbe444?auto=format&fit=crop&w=800&q=80',
      category: 'main',
      isSpecial: true,
      allergens: ['dairy', 'mushrooms'],
    },
    {
      id: '2',
      name: 'Beef Carpaccio',
      description: 'Thinly sliced raw beef with arugula, capers, and parmesan',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
      category: 'appetizer',
      allergens: ['beef', 'dairy'],
    },
    {
      id: '3',
      name: 'Chocolate Soufflé',
      description: 'Warm chocolate soufflé with vanilla ice cream',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1579372786545-d24232f7e0d1?auto=format&fit=crop&w=800&q=80',
      category: 'dessert',
      allergens: ['dairy', 'eggs', 'gluten'],
    },
    {
      id: '4',
      name: 'Signature Martini',
      description: 'Our signature martini with premium vodka and a twist of lemon',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&w=800&q=80',
      category: 'drink',
    },
    {
      id: '5',
      name: 'Seared Scallops',
      description: 'Fresh scallops seared to perfection with a citrus beurre blanc',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1632785322586-97f163025570?auto=format&fit=crop&w=800&q=80',
      category: 'main',
      isSpecial: true,
      allergens: ['shellfish', 'dairy'],
    },
    {
      id: '6',
      name: 'Artisan Cheese Plate',
      description: 'Selection of fine cheeses with honey, nuts, and artisan crackers',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1561756526-88c36ea52eb4?auto=format&fit=crop&w=800&q=80',
      category: 'appetizer',
      allergens: ['dairy', 'nuts', 'gluten'],
    },
    // Adding new items
    {
      id: '9',
      name: 'Pan-Seared Salmon',
      description: 'Fresh Atlantic salmon with lemon herb butter sauce and seasonal vegetables',
      price: 26.99,
      image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80',
      category: 'main',
      allergens: ['fish', 'dairy'],
    },
    {
      id: '10',
      name: 'Caprese Salad',
      description: 'Fresh mozzarella, tomatoes, and basil with balsamic reduction',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80',
      category: 'appetizer',
      allergens: ['dairy'],
    },
    {
      id: '11',
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
      category: 'dessert',
      allergens: ['dairy', 'eggs', 'gluten'],
    },
    {
      id: '12',
      name: 'Craft Old Fashioned',
      description: 'Premium bourbon with aromatic bitters and a touch of maple syrup',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      category: 'drink',
    },
    {
      id: '13',
      name: 'Grilled Octopus',
      description: 'Tender octopus with olive oil, lemon, and Mediterranean herbs',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1605209971703-56e3d140df01?auto=format&fit=crop&w=800&q=80',
      category: 'appetizer',
      allergens: ['seafood'],
    },
    {
      id: '14',
      name: 'Classic Mojito',
      description: 'Fresh mint, lime, rum, and soda water',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      category: 'drink',
    },
    {
      id: '15',
      name: 'New York Cheesecake',
      description: 'Rich and creamy cheesecake with berry compote',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
      category: 'dessert',
      allergens: ['dairy', 'eggs', 'gluten'],
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
