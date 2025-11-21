import { Bell, Apple, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { InfoChipsGroup } from '@/components/molecules/InfoChipsGroup';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const Topbar = () => {
  const isDev = import.meta.env.MODE !== 'production';
  const { isAuthenticated, userName, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-card shadow-sm">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Apple className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Quero Bem-Estar</h1>
        </div>

        <div className="flex items-center gap-6">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">Olá, {userName}!</span>
              <Avatar className="h-9 w-9 ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`}
                  alt={userName || 'Usuário'}
                />
                <AvatarFallback>{userName?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                title="Sair"
              >
                <LogOut className="h-5 w-5 text-destructive" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Avatar className="h-9 w-9 cursor-pointer ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="Usuário" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              {isDev ? (
                <div className="hidden md:flex items-center gap-2">
                  <Link
                    to="/login"
                    className="text-sm px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-100"
                  >
                    Entrar
                  </Link>
                  <Link
                    to="/register"
                    className="text-sm px-3 py-1 rounded-md bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-50"
                  >
                    Registrar
                  </Link>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
