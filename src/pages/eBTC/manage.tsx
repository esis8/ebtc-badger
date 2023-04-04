import ManagePosition from "@/components/manage/ManagePosition";
import AppFooter from "@/layouts/app/AppFooter";
import AppHeader from "@/layouts/app/AppHeader";
import Menu from "@/layouts/app/Menu";

function Manage() {
    return (
      <div>
        <AppHeader/>
        <Menu />
        <ManagePosition />
        <AppFooter />
      </div>
    );
  }

  
  export default Manage;