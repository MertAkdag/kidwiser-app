import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextType {
  onboardingDone: boolean;
  completeOnboarding: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [onboardingDone, setOnboardingDone] = useState(false);

  const completeOnboarding = () => {
    setOnboardingDone(true);
  };

  const value = {
    onboardingDone,
    completeOnboarding,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 