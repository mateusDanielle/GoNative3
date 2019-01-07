import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "~/pages/main";
import Favorites from "~/pages/favorites";

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        Favorites
    })
);

export default Routes;
