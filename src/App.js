import React from "react";
import { Admin, Resource, resolveBrowserLocale, translate } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

import { Provider } from "react-redux";
import { StoreProvider } from "easy-peasy";
import createAdminStore from "./store";
import { createHashHistory } from "history";

import portugueseMessages from "ra-language-portuguese";
import * as domainMessages from "./components/appMessages";
import englishMessages from "ra-language-english";

import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";

import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import UserList from "./components/UserList";
import { PostList, PostEdit, PostCreate } from "./components/Post";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const history = createHashHistory();

//https://v1.material-ui.com/style/color/
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      light: "#00A78D",
      main: "#00A78D",
      contrastText: "#fff"
    },
    error: {
      ...red,
      light: yellow.light
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  overrides: {
    MuiSnackbarContent: {
      root: {
        backgroundColor: "#00A78D"
      }
    }
  }
});

const browserLocale = resolveBrowserLocale() || "pt";
const messages = {
  pt: { ...portugueseMessages, ...domainMessages.pt },
  en: { ...englishMessages, ...domainMessages.en }
};
const i18nProvider = () => {
  return messages[browserLocale];
};

const authProvider = () => Promise.resolve();

const store = createAdminStore({
  authProvider,
  dataProvider,
  i18nProvider,
  history
});

const App = ({ translate }) => (
  <Provider store={store}>
    <StoreProvider store={store}>
      <Admin
        theme={theme}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        catchAll={NotFound}
        history={history}
        locale={browserLocale}
        i18nProvider={i18nProvider}
      >
        <Resource
          name="users"
          options={{ label: "app.label.user" }}
          list={UserList}
          icon={UserIcon}
        />
        <Resource
          name="posts"
          options={{ label: "app.label.post" }}
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostIcon}
        />
      </Admin>
    </StoreProvider>
  </Provider>
);

export default translate(App);
