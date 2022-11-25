import { isProd } from '../config/env/index';

const DEV_KEY_SUFFIX = '__dev_suffix__';

function getEnvKey(key) {
  return isProd ? key : `${key}${DEV_KEY_SUFFIX}`;
}

/**
 * 本地缓存区分环境
 */
function addStorageEnv() {
  const {
    getStorage,
    setStorage,
    getStorageSync,
    setStorageSync,
    removeStorage,
    removeStorageSync
    // TODO 是否要重写 getStorageInfo 和 getStorageInfoSync ？
    // getStorageInfo,
    // getStorageInfoSync,
  } = wx;

  const fns = { getStorage, setStorage, removeStorage };
  const syncFns = { getStorageSync, setStorageSync, removeStorageSync };
  /** @type {PropertyDescriptorMap} */
  const obj = {};
  Object.keys(fns).forEach(fnName => {
    obj[fnName] = {
      get() {
        return function _({ key, ...other }) {
          return fns[fnName].call(wx, { ...other, key: getEnvKey(key) });
        };
      }
    };
  });
  Object.keys(syncFns).forEach(fnName => {
    obj[fnName] = {
      get() {
        return function _(key, data) {
          return syncFns[fnName].call(wx, getEnvKey(key), data);
        };
      }
    };
  });
  Object.defineProperties(wx, obj);
}

addStorageEnv();
