import { useRouter } from "next/router";
import Dashboard from "./dashboard";
import About from "./feedback";
import Borrow from "@/components/borrow/Borrow";

function RouterPage() {

    const router = useRouter();

    if(router.pathname === '/eBTC'){
        return (<Borrow />)
    }else if(router.pathname === "/eBTC/dashboard"){
        return (<Dashboard/>)
    }else if(router.pathname === "/eBTC/about"){
        return (<About/>)
    }else return (<></>);


}



export default RouterPage;