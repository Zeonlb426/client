import Header from "../../components/header"

export default function FlowLayout({ children }) {
    return (
        <div className="w-full bg-white dark:bg-slate-800">
            <Header/>
            {children}
        </div>
    )
}
