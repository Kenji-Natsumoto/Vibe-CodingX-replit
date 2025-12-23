import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/home";
import { ArticlePage } from "@/pages/article";
import { ArticlesPage } from "@/pages/articles";
import { RosinaPage } from "@/pages/rosina";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles" component={ArticlesPage} />
      <Route path="/article/:id" component={ArticlePage} />
      <Route path="/rosina" component={RosinaPage} />
      <Route path="/novel/rosina" component={RosinaPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <WouterRouter hook={useHashLocation}>
            <AppRouter />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;