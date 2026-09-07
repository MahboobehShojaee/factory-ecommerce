import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingState } from "../../components/ui/AsyncState.jsx";
import { appRoutes, lazyPages } from "../../routes/routeConfig.jsx";

const HomePage = lazyPages.Home;
const NotFoundPage = lazyPages.NotFound;

export default function AppRouter() {
  return (
    <Suspense fallback={<LoadingState label="Loading page..." />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fa" element={<HomePage />} />
        {appRoutes.map(({ path, page }) => {
          const Page = lazyPages[page];
          return <Route key={path} path={path} element={<Page />} />;
        })}
        {appRoutes.map(({ path, page }) => {
          const Page = lazyPages[page];
          return (
            <Route key={`fa${path}`} path={`/fa${path}`} element={<Page />} />
          );
        })}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
