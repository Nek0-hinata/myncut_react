// import { HOOKS } from '../utils/constants';
//
// export default class Base {
//   #context;
//
//   constructor(config = {}, context) {
//     this.#context = context || this;
//
//     config[HOOKS.BEFORE_LOAD] && config[HOOKS.BEFORE_LOAD].apply(this.#context);
//
//     config.preprocess && config.preprocess.forEach((fn, index) => {
//       typeof fn === 'function' && fn.apply(this.#context);
//     });
//
//     config[HOOKS.AFTER_PREPROCESSOR] && config[HOOKS.AFTER_PREPROCESSOR].apply(this.#context);
//   }
// }
