import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface Competitor {
  name: string;
  url: string;
}

interface CompetitorsContextType {
  competitors: Record<number, Competitor[]>;
  addCompetitor: (productId: number, competitor: Competitor) => void;
  getCompetitors: (productId: number) => Competitor[];
}

const CompetitorsContext = createContext<CompetitorsContextType | undefined>(undefined);

export const useCompetitors = () => {
  const context = useContext(CompetitorsContext);
  if (!context) {
    throw new Error('useCompetitors must be used within a CompetitorsProvider');
  }
  return context;
};

interface CompetitorsProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = 'productCompetitors';

export const CompetitorsProvider: React.FC<CompetitorsProviderProps> = ({ children }) => {
  const [competitors, setCompetitors] = useState<Record<number, Competitor[]>>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(competitors));
  }, [competitors]);

  const addCompetitor = (productId: number, competitor: Competitor) => {
    setCompetitors(prev => ({
      ...prev,
      [productId]: [...(prev[productId] || []), competitor]
    }));
  };

  const getCompetitors = (productId: number) => {
    return competitors[productId] || [];
  };

  return (
    <CompetitorsContext.Provider value={{ competitors, addCompetitor, getCompetitors }}>
      {children}
    </CompetitorsContext.Provider>
  );
};