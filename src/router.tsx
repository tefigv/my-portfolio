import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type NavigateFn = (path: string) => void;

const RouterContext = createContext<{ path: string; navigate: NavigateFn }>({
  path: '/',
  navigate: () => {},
});

export function Router({ children }: { children: React.ReactNode }) {
  const getPath = () => {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
  };

  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onHashChange = () => setPath(getPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useNavigate(): NavigateFn {
  return useContext(RouterContext).navigate;
}

export function usePath(): string {
  return useContext(RouterContext).path;
}

export function Link({
  to,
  children,
  className,
  style,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const navigate = useNavigate();
  return (
    <a
      href={`home${to}`}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

type RouteConfig = { path: string; element: React.ReactNode };

export function Routes({ routes }: { routes: RouteConfig[] }) {
  const path = usePath();
  const match = routes.find((r) => r.path === path) ?? routes.find((r) => r.path === '/');
  return <>{match?.element}</>;
}
