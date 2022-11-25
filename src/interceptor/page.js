import { isFunc, isString } from '../libs/is';

const _Page = Page;

Page = function Page(param) {
  const { onLoad } = param;
  _Page({
    ...param,
    onLoad(options) {
      console.debug(`[${this.route}] onLoad`);
      const _options = {};
      Object.keys(options).forEach(key => {
        const value = options[key];
        _options[key] = value;
        if (isString(value)) {
          try {
            // 尝试给参数解码
            _options[key] = decodeURIComponent(value);
          } catch (e) {
            console.warn(`尝试解码「${value}」出错`);
          }
        }
      });
      if (isFunc(onLoad)) {
        onLoad.call(this, _options);
      }
    }
  });
};
