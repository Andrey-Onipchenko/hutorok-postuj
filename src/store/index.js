import { createStore } from "vuex";
import game from "./game";
import modal from "./modal";

export default createStore({
  modules: {
    game: game,
    modal: modal
  }
});
