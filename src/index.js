import REACTDOM from "react-dom/client"
import Random from "./Random"

const root=REACTDOM.createRoot(document.getElementById("root"))

root.render(<Random></Random>)