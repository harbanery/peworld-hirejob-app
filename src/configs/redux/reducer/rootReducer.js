import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import workerReducer from "./workerReducer";
import authReducer from "./authReducer";
import checkRoleReducer from "./checkRoleReducer";
import mainReducer from "./mainReducer";
import recruiterReducer from "./recruiterReducer";

const recruiterPersistConfig = {
  key: "recruiter",
  storage: storage,
};

const rolePersistConfig = {
  key: "role",
  storage: storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  main: mainReducer,
  checkRole: persistReducer(rolePersistConfig, checkRoleReducer),
  worker: workerReducer,
  recruiter: persistReducer(recruiterPersistConfig, recruiterReducer),
});

export default rootReducer;
