import { dark, noDark } from "./elements.js";

export default function darkMode(){
    dark.addEventListener("click", (e)=>{
        e.currentTarget.classList.add("hidden");
        noDark.classList.remove("hidden");
        document.body.classList.remove("dark");

    })

    noDark.addEventListener("click", (e)=>{
        e.currentTarget.classList.add("hidden");
        dark.classList.remove("hidden");
        document.body.classList.add("dark");
    })
}