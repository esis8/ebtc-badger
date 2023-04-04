import AppFooter from "@/layouts/app/AppFooter";
import AppHeader from "@/layouts/app/AppHeader";
import Menu from "@/layouts/app/Menu";

function Dashboard() {
    return (
      <div>
        <AppHeader/>
        <Menu />
        <h2>Dashboard</h2>
        <p>Welcome to the dashboard</p>
        <AppFooter />
      </div>
    );
  }

  
  export default Dashboard;