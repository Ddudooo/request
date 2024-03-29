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
const core = require("@actions/core");
const request = require("request-promise-native");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const METHOD = core.getInput("Method", { required: false });
            const HEADERS = core.getInput("Headers", { required: false });
            const DATA = core.getInput("data", { required: true });
            const URL = core.getInput("URL", { required: true });
            const OPTIONS = {
                url: URL,
                method: METHOD,
                headers: JSON.parse(HEADERS),
                body: DATA
            };
            console.log(OPTIONS);
            yield request(OPTIONS)
                .then(res => console.log(`RESPONSE ${res}`))
                .catch(err => {
                throw err;
            });
        }
        catch (error) {
            console.log(error);
            core.setFailed("FAIL TO REQUEST");
        }
    });
}
run();
