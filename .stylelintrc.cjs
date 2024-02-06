module.exports = {
    processors: [],
    plugins: ['stylelint-order'],
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue/scss",
        "stylelint-config-recess-order"
    ],
    rules: {
        "selector-class-pattern": [ // 命名规范 -
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                "message": "Expected class selector to be kebab-case"
            }
        ],
        "string-quotes":"single", // 单引号
        "at-rule-empty-line-before": null,
        "at-rule-no-unknown":null,
        "at-rule-name-case": "lower",// 指定@规则名的大小写
        "length-zero-no-unit": true,  // 禁止零长度的单位（可自动修复）
        "shorthand-property-no-redundant-values": true, // 简写属性
        "number-leading-zero": "never", // 小数不带0
        "declaration-block-no-duplicate-properties": true, // 禁止声明快重复属性
        "no-descending-specificity": true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
        "selector-max-id": 2, // 限制一个选择器中 ID 选择器的数量
        "max-nesting-depth": 3,
        "indentation": [4, {  // 指定缩进  warning 提醒
            "severity": "warning"
        }],
    }
}