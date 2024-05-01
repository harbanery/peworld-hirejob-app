import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./reducer/authReducer";
import checkRoleReducer from "./reducer/checkRoleReducer";
import mainReducer from "./reducer/mainReducer";
import recruiterReducer from "./reducer/recruiterReducer";
import workerReducer from "./reducer/workerReducer";

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
