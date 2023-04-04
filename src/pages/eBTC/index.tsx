import AppHeader from "@/layouts/app/AppHeader";
import AppFooter from "@/layouts/app/AppFooter";
import RouterPage from "./RouterPage";
import Menu from "@/layouts/app/Menu";




function App(){


    return (
        <div>
            <AppHeader/>
            <Menu />
        <main className="mainApp">
            <RouterPage/>
        </main>
            <AppFooter/>
      </div>
    );
}

export default App;