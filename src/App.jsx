import Loading from "./components/common/Loading";
import MainLayout from "./components/common/MainLayout";
import AuthRoute from "./routes/AuthRoute";

function App() {
    return <MainLayout>
        <AuthRoute />
        {/* <Loading /> */}
    </MainLayout>
}

export default App;