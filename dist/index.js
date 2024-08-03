"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ormconfig_1 = require("./config/ormconfig");
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
ormconfig_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, app_1.createApp)();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map