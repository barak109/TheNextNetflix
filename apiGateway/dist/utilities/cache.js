"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_cache_1 = __importDefault(require("node-cache"));
exports.ttl = 60 * 60 * 1; // cache for 1 Hour
// unlimited
exports.myCache = new node_cache_1.default({ stdTTL: exports.ttl, checkperiod: 0 });
exports.setCache = function (key, data) {
    exports.myCache.set(key, data);
};
exports.getCache = function (key) {
    var value = exports.myCache.get(key);
    return value;
};
//# sourceMappingURL=cache.js.map