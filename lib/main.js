"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const request_promise_native_1 = __importDefault(require("request-promise-native"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const myInput = core.getInput("myInput");
            // core.debug(`Hello ${myInput} from inside a container`);
            const METHOD = core_1.default.getInput("Method", { required: false });
            const HEADERS = core_1.default.getInput("Content-type", { required: false });
            const data = core_1.default.getInput("data", { required: true });
            const URL = core_1.default.getInput("URL", { required: true });
            // // Get github context data
            // const context = github.context;
            // console.log(
            //     `We can even get context data, like the repo: ${context.repo.repo}`
            // );
            const OPTIONS = {
                url: URL,
                method: METHOD,
                headers: HEADERS,
                body: data
            };
            request_promise_native_1.default(OPTIONS)
                .then(res => console.log(`RESPONSE ${res.body}`))
                .catch(err => {
                throw err;
            });
        }
        catch (error) {
            core_1.default.setFailed(error.message);
        }
    });
}
run();
