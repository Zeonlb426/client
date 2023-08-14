import Header from "../../components/header"
import Footer from "../../components/footer"

export default function CreateLayout({ children }) {
    return (
        <div className="w-full min-h-screen mt-16">
            <Header/>
            {children}
        </div>
    )
}
