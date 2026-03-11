// This is hooks layer for context, it will provide functions to use the context in a more convenient way

import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";



export function useAuth() {

    const context = useContext(AuthContext)

    return context

}