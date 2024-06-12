import { BrowserRouter  } from "react-router-dom";

export function Layout ({children}: {children: React.ReactNode}) {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}