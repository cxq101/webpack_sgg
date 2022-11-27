module.exports = {
    // 解析选项
    parserOptions: {
        // ES 语法版本
        ecmaVersion: 6,
        // ES 模块化
        sourceType: "module",
        // ES其他特性
        ecmaFeatures: {
            // jsx: true // 如果是react项目 就需要开启jsx语法
        }
    },
    // 规则文档 https://eslint.bootcss.com/docs/rules/
    // 具体的检验规则 
    // "off"  \ "0" 关闭规则;
    // "warn" \ "1" 开启规则 只发出警告不会导致程序退出;
    // "error" \ "2" 开启规则 触发后报错 终止程序;
    rules: {
        semi: "error",// 禁止使用分号
        eqeqeq: ['warn', 'smart'],
        // "no-var": 2
    },
    // 继承其他规则
    extends: [],
    // extends: ["eslint:recommended"],
};