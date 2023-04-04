import { useRouter } from "next/router";
import Dashboard from "./dashboard";
import Manage from "./manage";
import Borrow from "@/components/borrow/Borrow";

function RouterPage() {

    const router = useRouter();

    if(router.pathname === '/eBTC'){
        return (<Borrow />)
    }else if(router.pathname === "/eBTC/dashboard"){
        return (<Dashboard/>)
    }else if(router.pathname === "/eBTC/manage"){
        return (<Manage/>)
    }else return (<></>);


}



export default RouterPage;