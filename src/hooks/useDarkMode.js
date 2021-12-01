import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("mode",initialValue);

    return [darkMode,setDarkMode]
}
export default useDarkMode;