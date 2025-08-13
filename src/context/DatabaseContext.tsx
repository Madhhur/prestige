import React, { createContext, useContext, useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: 'opal' | 'diamond';
  price: number;
  image: string;
  description: string;
  specifications: string;
  stock: number;
}

interface User {
  id: number;
  email: string;
  name: string;
  password: string;
}

interface Order {
  id: number;
  userId: number;
  products: Array<{
    productId: number;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}

interface DatabaseContextType {
  products: Product[];
  users: User[];
  orders: Order[];
  addUser: (user: Omit<User, 'id'>) => User | null;
  findUser: (email: string, password: string) => User | null;
  addOrder: (order: Omit<Order, 'id' | 'createdAt'>) => Order;
  getProductById: (id: number) => Product | undefined;
  getOrdersByUserId: (userId: number) => Order[];
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
};

export const DatabaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Royal Ethiopian Opal Ring',
      category: 'opal',
      price: 2500,
      image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Exquisite Ethiopian opal set in 18k gold with intricate detailing.',
      specifications: '18k Gold, 3.2ct Ethiopian Opal, Size 7',
      stock: 5
    },
    {
      id: 2,
      name: 'Diamond Solitaire Necklace',
      category: 'diamond',
      price: 8900,
      image: 'https://images.pexels.com/photos/1721936/pexels-photo-1721936.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Classic diamond solitaire pendant on platinum chain.',
      specifications: 'Platinum Chain, 1.5ct Diamond, VS1 Clarity',
      stock: 3
    },
    {
      id: 3,
      name: 'Fire Opal Earrings',
      category: 'opal',
      price: 1800,
      image: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Stunning fire opal earrings with brilliant orange hues.',
      specifications: '14k Gold, Mexican Fire Opal, 2.1ct total',
      stock: 8
    },
    {
      id: 4,
      name: 'Diamond Tennis Bracelet',
      category: 'diamond',
      price: 12500,
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Elegant tennis bracelet with perfectly matched diamonds.',
      specifications: '18k White Gold, 5ct Total Diamond Weight, 7.5" Length',
      stock: 2
    },
    {
      id: 5,
      name: 'Boulder Opal Pendant',
      category: 'opal',
      price: 3200,
      image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Rare boulder opal with natural matrix patterns.',
      specifications: '18k Gold, Australian Boulder Opal, 4.8ct',
      stock: 1
    },
    {
      id: 6,
      name: 'Diamond Engagement Ring',
      category: 'diamond',
      price: 15900,
      image: 'https://images.pexels.com/photos/1721936/pexels-photo-1721936.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Timeless engagement ring with exceptional brilliance.',
      specifications: 'Platinum Setting, 2.5ct Diamond, Excellent Cut',
      stock: 4
    }
  ]);

  const [users, setUsers] = useState<User[]>([
    { id: 1, email: 'demo@example.com', name: 'Demo User', password: 'demo123' }
  ]);

  const [orders, setOrders] = useState<Order[]>([]);

  const addUser = (userData: Omit<User, 'id'>): User | null => {
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) return null;
    
    const newUser: User = {
      ...userData,
      id: users.length + 1
    };
    
    setUsers(prev => [...prev, newUser]);
    return newUser;
  };

  const findUser = (email: string, password: string): User | null => {
    return users.find(user => user.email === email && user.password === password) || null;
  };

  const addOrder = (orderData: Omit<Order, 'id' | 'createdAt'>): Order => {
    const newOrder: Order = {
      ...orderData,
      id: orders.length + 1,
      createdAt: new Date().toISOString()
    };
    
    setOrders(prev => [...prev, newOrder]);
    return newOrder;
  };

  const getProductById = (id: number): Product | undefined => {
    return products.find(product => product.id === id);
  };

  const getOrdersByUserId = (userId: number): Order[] => {
    return orders.filter(order => order.userId === userId);
  };

  return (
    <DatabaseContext.Provider value={{
      products,
      users,
      orders,
      addUser,
      findUser,
      addOrder,
      getProductById,
      getOrdersByUserId
    }}>
      {children}
    </DatabaseContext.Provider>
  );
};