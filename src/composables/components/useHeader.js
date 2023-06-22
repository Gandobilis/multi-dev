import useArrows from "../helpers/useArrows.js";
import useNavigation from "./useNavigation.js";

const arrows = useArrows();

export default (function useHeader() {
  const button = {
    name: "Contact",
    label: `Let's Talk ${arrows.right}`,
  };
  const res = {
    menu: '<i class="fa-solid fa-xl fa-bars  text-white"/>',
    close: '<i class="fa-solid fa-xl fa-x"/>',
  };
  return {...useNavigation(), button, res, arrows};
});