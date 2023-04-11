import Borrow from "@/components/borrow/Borrow";
import AppFooter from "@/layouts/app/AppFooter";
import AppHeader from "@/layouts/app/AppHeader";
import Menu from "@/layouts/app/Menu";

function CreateClose() {
    return (
      <div>
        <AppHeader/>
        <Menu />
        <Borrow />
        <AppFooter />
      </div>
    );
  }

  
  export default CreateClose;