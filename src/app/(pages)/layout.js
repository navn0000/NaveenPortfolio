import Header from "../components/Header";

export default function overAllLayout({ children }){
    return(
        <>
        <Header />
        {children}
        </>
    )
}