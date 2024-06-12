import "./index.css";
import "./global.css";
import { Layout } from "./routes/Layout";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import { useAuthContext } from "./hook/useAuthContext";
import { Loading } from "./components/common/Loading";

export function App() {

  const { user, authIsReady } = useAuthContext();

  if (!authIsReady) return <Loading />;

  return (
    <Layout>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </Layout>
  )
}

