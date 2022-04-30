## [0.3.5](https://github.com/miaoxing/mxjs-a-form/compare/v0.3.4...v0.3.5) (2022-04-30)


### Bug Fixes

* **u, a-form:** 解决提交表单后离开页面，表单还继续执行跳转的问题 ([8ed3218](https://github.com/miaoxing/mxjs-a-form/commit/8ed3218fe93add735804a9cd1453419b15a5dede))

## [0.3.4](https://github.com/miaoxing/mxjs-a-form/compare/v0.3.3...v0.3.4) (2022-03-31)





### Dependencies

* **@mxjs/box:** upgrade from `0.3.1` to `0.3.2`
* **@mxjs/a-clink:** upgrade from `0.2.3` to `0.2.4`
* **@mxjs/cur-url:** upgrade from `0.2.16` to `0.2.17`
* **@mxjs/a-table:** upgrade from `0.4.3` to `0.4.4`
* **@mxjs/test:** upgrade from `0.2.3` to `0.2.4`

## [0.3.3](https://github.com/miaoxing/mxjs-a-form/compare/v0.3.2...v0.3.3) (2022-03-04)





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.2` to `0.2.3`
* **@mxjs/cur-url:** upgrade from `0.2.15` to `0.2.16`
* **@mxjs/a-table:** upgrade from `0.4.2` to `0.4.3`
* **@mxjs/test:** upgrade from `0.2.2` to `0.2.3`

## [0.3.2](https://github.com/miaoxing/mxjs-a-form/compare/v0.3.1...v0.3.2) (2022-02-05)





### Dependencies

* **@mxjs/box:** upgrade from `0.3.0` to `0.3.1`
* **@mxjs/a-clink:** upgrade from `0.2.1` to `0.2.2`
* **@mxjs/cur-url:** upgrade from `0.2.14` to `0.2.15`
* **@mxjs/a-table:** upgrade from `0.4.1` to `0.4.2`
* **miaoxing:** upgrade from `0.4.0` to `0.4.1`
* **@miaoxing/dev:** upgrade from `8.0.1` to `8.1.0`
* **@mxjs/test:** upgrade from `0.2.1` to `0.2.2`

## [0.3.1](https://github.com/miaoxing/mxjs-a-form/compare/v0.3.0...v0.3.1) (2022-01-12)


### Bug Fixes

* **a-form:** `FormItem` 不包含输入项时，设置了 `required` 未显示星号 ([beead22](https://github.com/miaoxing/mxjs-a-form/commit/beead2210841f8f7bca2cb0241ee432ccb0646d0))


### Features

* 更新 `antd` 到 `~4.17.4` ([f37ab56](https://github.com/miaoxing/mxjs-a-form/commit/f37ab5698754b024ba7eaf7832a84ed7c129ea3d))





### Dependencies

* **@mxjs/box:** upgrade from `0.2.3` to `0.3.0`
* **@mxjs/a-clink:** upgrade from `0.2.0` to `0.2.1`
* **@mxjs/cur-url:** upgrade from `0.2.13` to `0.2.14`
* **@mxjs/a-table:** upgrade from `0.4.0` to `0.4.1`
* **miaoxing:** upgrade from `0.3.0` to `0.4.0`
* **babel-preset-miaoxing:** upgrade from `0.5.0` to `0.6.0`
* **@miaoxing/dev:** upgrade from `8.0.0` to `8.0.1`
* **@mxjs/test:** upgrade from `0.2.0` to `0.2.1`

# [0.3.0](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.15...v0.3.0) (2021-10-28)


### Code Refactoring

* **a-form:** `Form` 组件 `afterLoad` 属性的参数由 `ret` 改为完整的 `response` 对象 ([2c87cff](https://github.com/miaoxing/mxjs-a-form/commit/2c87cff023f14deb2fc4cf98d3310ef0dd151268))


### Features

* `react` 依赖移到 `peerDependencies` 中，开发依赖使用 `react` 17 ([983eaeb](https://github.com/miaoxing/mxjs-a-form/commit/983eaeb1701e795c95b93541dc5a238bb2254605))
* **a-form, FormAction:** 允许自定义 `Form.Item` 属性 ([15e3bca](https://github.com/miaoxing/mxjs-a-form/commit/15e3bca987cc031d6b9a9d263907758ec33826a7))


### BREAKING CHANGES

* `react` 依赖移到 `peerDependencies` 中，开发依赖使用 `react` 17
* **a-form:** `Form` 组件 `afterLoad` 属性的参数由 `ret` 改为完整的 `response` 对象





### Dependencies

* **@mxjs/box:** upgrade from `0.2.2` to `0.2.3`
* **@mxjs/a-clink:** upgrade from `0.1.8` to `0.2.0`
* **@mxjs/cur-url:** upgrade from `0.2.12` to `0.2.13`
* **@mxjs/a-table:** upgrade from `0.3.11` to `0.4.0`
* **miaoxing:** upgrade from `0.2.5` to `0.3.0`
* **babel-preset-miaoxing:** upgrade from `0.4.0` to `0.5.0`
* **@miaoxing/dev:** upgrade from `7.0.1` to `8.0.0`
* **@mxjs/test:** upgrade from `0.1.8` to `0.2.0`

## [0.2.15](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.14...v0.2.15) (2021-05-12)





### Dependencies

* **@mxjs/box:** upgrade from `0.2.1` to `0.2.2`
* **@mxjs/a-clink:** upgrade from `0.1.7` to `0.1.8`
* **@mxjs/cur-url:** upgrade from `0.2.11` to `0.2.12`
* **@mxjs/a-table:** upgrade from `0.3.10` to `0.3.11`
* **miaoxing:** upgrade from `0.2.4` to `0.2.5`
* **@miaoxing/dev:** upgrade from `7.0.0` to `7.0.1`
* **@mxjs/test:** upgrade from `0.1.7` to `0.1.8`

## [0.2.14](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.13...v0.2.14) (2021-05-11)





### Dependencies

* **@mxjs/box:** upgrade from `0.2.0` to `0.2.1`
* **@mxjs/a-clink:** upgrade from `0.1.6` to `0.1.7`
* **@mxjs/cur-url:** upgrade from `0.2.10` to `0.2.11`
* **@mxjs/a-table:** upgrade from `0.3.9` to `0.3.10`
* **miaoxing:** upgrade from `0.2.3` to `0.2.4`
* **babel-preset-miaoxing:** upgrade from `0.3.0` to `0.4.0`
* **@miaoxing/dev:** upgrade from `6.4.0` to `7.0.0`
* **@mxjs/test:** upgrade from `0.1.6` to `0.1.7`

## [0.2.13](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.12...v0.2.13) (2021-04-27)


### Features

* 增加 `afterSubmit` 回调，在请求成功后触发 ([a395df6](https://github.com/miaoxing/mxjs-a-form/commit/a395df6475263d2f7e229a4bc42442164a1f87a3))
* **Form:** `afterLoad` 选项支持异步函数 ([56563bc](https://github.com/miaoxing/mxjs-a-form/commit/56563bc169a393ef997fef87d022270a8abeac5d))
* `redirectUrl` 允许传入函数，根据返回值生成地址 ([dc77afd](https://github.com/miaoxing/mxjs-a-form/commit/dc77afda92916b032c2753c60760e867cbd4f998))
* 增加 `redirect` 选项，用于控制提交表单后是否跳转页面 ([68a344e](https://github.com/miaoxing/mxjs-a-form/commit/68a344e99b086b30132950eabadf6f629d300b9c))





### Dependencies

* **@mxjs/box:** upgrade from `0.1.0` to `0.2.0`
* **@mxjs/a-clink:** upgrade from `0.1.5` to `0.1.6`
* **@mxjs/cur-url:** upgrade from `0.2.9` to `0.2.10`
* **@mxjs/a-table:** upgrade from `0.3.8` to `0.3.9`
* **miaoxing:** upgrade from `0.2.2` to `0.2.3`
* **babel-preset-miaoxing:** upgrade from `0.2.0` to `0.3.0`
* **@miaoxing/dev:** upgrade from `6.3.4` to `6.4.0`
* **@mxjs/test:** upgrade from `0.1.5` to `0.1.6`

## [0.2.12](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.11...v0.2.12) (2021-03-22)





### Dependencies

* **@mxjs/cur-url:** upgrade from `0.2.8` to `0.2.9`
* **miaoxing:** upgrade from `0.2.1` to `0.2.2`
* **babel-preset-miaoxing:** upgrade from `0.1.5` to `0.2.0`
* **@miaoxing/dev:** upgrade from `6.3.3` to `6.3.4`
* **@mxjs/test:** upgrade from `0.1.4` to `0.1.5`

## [0.2.11](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.10...v0.2.11) (2021-03-17)


### Bug Fixes

* **SearchForm:** 表单缺少 `form` 属性，导致 `FormContext` 失效 ([84072f8](https://github.com/miaoxing/mxjs-a-form/commit/84072f80f437e654ca6ebcc3c5ea4e747051805a))

## [0.2.10](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.9...v0.2.10) (2021-03-12)





### Dependencies

* **@mxjs/cur-url:** upgrade from `0.2.7` to `0.2.8`
* **miaoxing:** upgrade from `0.2.0` to `0.2.1`
* **babel-preset-miaoxing:** upgrade from `0.1.4` to `0.1.5`
* **@miaoxing/dev:** upgrade from `6.3.2` to `6.3.3`
* **@mxjs/test:** upgrade from `0.1.3` to `0.1.4`

## [0.2.9](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.8...v0.2.9) (2021-03-11)





### Dependencies

* **miaoxing:** upgrade from `0.1.10` to `0.2.0`
* **@mxjs/test:** upgrade from `0.1.2` to `0.1.3`

## [0.2.8](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.7...v0.2.8) (2021-03-11)





### Dependencies

* **@mxjs/test:** upgrade from `0.1.1` to `0.1.2`

## [0.2.7](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.6...v0.2.7) (2021-03-10)





### Dependencies

* **@mxjs/cur-url:** upgrade from `0.2.6` to `0.2.7`

## [0.2.6](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.5...v0.2.6) (2021-03-10)


### Bug Fixes

* 指定要发布的文件 ([5b121c8](https://github.com/miaoxing/mxjs-a-form/commit/5b121c8fb7a552aeca3cacd09769dac571bb8d41))





### Dependencies

* **@mxjs/cur-url:** upgrade from 0.2.5 to 0.2.6
* **miaoxing:** upgrade from 0.1.9 to 0.1.10
* **@miaoxing/dev:** upgrade from 6.3.1 to 6.3.2

## [0.2.5](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.4...v0.2.5) (2021-03-09)





### Dependencies

* **@mxjs/cur-url:** upgrade from 0.2.4 to 0.2.5
* **miaoxing:** upgrade from 0.1.8 to 0.1.9
* **@miaoxing/dev:** upgrade from 6.3.0 to 6.3.1

## [0.2.4](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.3...v0.2.4) (2021-03-09)





### Dependencies

* **@mxjs/cur-url:** upgrade from 0.2.3 to 0.2.4
* **miaoxing:** upgrade from 0.1.7 to 0.1.8
* **@miaoxing/dev:** upgrade from 6.2.0 to 6.3.0

## [0.2.3](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.2...v0.2.3) (2021-03-05)





### Dependencies

* **@mxjs/cur-url:** upgrade from 0.2.2 to 0.2.3
* **miaoxing:** upgrade from 0.1.6 to 0.1.7
* **@miaoxing/dev:** upgrade from 6.1.2 to 6.2.0

## [0.2.2](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.1...v0.2.2) (2021-03-05)


### Bug Fixes

* **form:** 解决 `valuesUrl` 变量变成 `undefined` ([09aef4a](https://github.com/miaoxing/mxjs-a-form/commit/09aef4ace8fd12bdc80a50b2143b525abea98717))


### Features

* **FormItem:** 如果没有定义 label，默认的 label 使用 "该项" ([73a78d2](https://github.com/miaoxing/mxjs-a-form/commit/73a78d2aaa9fe570183ba258cab7382a50dc87f2))
* Form beforeSubmit 允许返回 false 来停止表单提交 ([f0495bd](https://github.com/miaoxing/mxjs-a-form/commit/f0495bda3dcad396515ca82b560c58ea268af401))
* Select 增加 firstLabel, firstValue 选项，用于自定义下拉框第一个值 ([f603500](https://github.com/miaoxing/mxjs-a-form/commit/f6035004502b01ef0335780b77cb7d80cfa451dd))
* 增加 FormContext, useForm，方便子组件处理表单数据 ([6e2557b](https://github.com/miaoxing/mxjs-a-form/commit/6e2557b1e7efeecbdf1143f0f3e9de1863931613))
* 表单提交校验不通过时，滚动到错误位置 ([7f8dc33](https://github.com/miaoxing/mxjs-a-form/commit/7f8dc335b23d3935d97c6cea9ea7478589adbfbe))





### Dependencies

* **@mxjs/cur-url:** upgrade from 0.2.1 to 0.2.2
* **miaoxing:** upgrade from 0.1.5 to 0.1.6
* **@mxjs/test:** upgrade from 0.1.0 to 0.1.1

## [0.2.1](https://github.com/miaoxing/mxjs-a-form/compare/v0.2.0...v0.2.1) (2020-09-25)


### Features

* 增加 FormContext，可用于子组件获取 form 对象 ([e3da6f3](https://github.com/miaoxing/mxjs-a-form/commit/e3da6f38eacf404faf75854df4970a44dd96e94d))
* **SearchForm:** 增加 filterValues 回调，用于在搜索前更改表单的值 ([9740ddd](https://github.com/miaoxing/mxjs-a-form/commit/9740ddd4b653952b433e02d922c18fe8b58c5a71))
* FromItem 增加 textarea 支持 ([15a9d8f](https://github.com/miaoxing/mxjs-a-form/commit/15a9d8f19a9358765f279604d01067c449eccc85))
* 增加 afterLoad 回调，可以用于更改请求的返回值 ([27c3e3f](https://github.com/miaoxing/mxjs-a-form/commit/27c3e3f0add90f018c8878f6b99e461ec4cc4994))





### Dependencies

* **@mxjs/cur-url:** upgrade from 0.2.0 to 0.2.1
* **miaoxing:** upgrade from 0.1.4 to 0.1.5
* **@miaoxing/dev:** upgrade from 6.1.1 to 6.1.2

# [0.2.0](https://github.com/miaoxing/mxjs-a-form/compare/v0.1.3...v0.2.0) (2020-09-01)


### Code Refactoring

* 更改接口为 REST 风格 ([96b8d14](https://github.com/miaoxing/mxjs-a-form/commit/96b8d1456c8e4d1ced763c3cbaccc162141e96e6))


### BREAKING CHANGES

* 更改接口为 REST 风格





### Dependencies

* **@mxjs/cur-url:** upgrade from 0.1.4 to 0.2.0
* **miaoxing:** upgrade from 0.1.3 to 0.1.4

## [0.1.3](https://github.com/miaoxing/mxjs-a-form/compare/v0.1.2...v0.1.3) (2020-08-17)





### Dependencies

* **@mxjs/cur-url:** upgrade from 0.1.3 to 0.1.4
* **miaoxing:** upgrade from 0.1.2 to 0.1.3
* **@miaoxing/dev:** upgrade from 6.1.0 to 6.1.1

## [0.1.2](https://github.com/miaoxing/mxjs-a-form/compare/v0.1.1...v0.1.2) (2020-08-14)





### Dependencies

* **@mxjs/cur-url:** upgrade from 0.1.2 to 0.1.3
* **miaoxing:** upgrade from 0.1.1 to 0.1.2
* **@miaoxing/dev:** upgrade from 6.0.0 to 6.1.0

## [0.1.1](https://github.com/miaoxing/mxjs-a-form/compare/v0.1.0...v0.1.1) (2020-08-14)





### Dependencies

* **@mxjs/cur-url:** upgrade from 0.1.1 to 0.1.2
* **miaoxing:** upgrade from 0.1.0 to 0.1.1
* **babel-preset-miaoxing:** upgrade from 0.1.3 to 0.1.4
* **@miaoxing/dev:** upgrade from  to 0.1.0

# 0.1.0 (2020-07-30)


### Features

* FormItem 增加 type=number ([](https://github.com/miaoxing/mxjs-a-form/commit/))
* Select 组件可以设置默认显示 all ([](https://github.com/miaoxing/mxjs-a-form/commit/))
* 初步实现图片上传功能 ([](https://github.com/miaoxing/mxjs-a-form/commit/))
* 表单提交数据默认移除空白字符 ([](https://github.com/miaoxing/mxjs-a-form/commit/))
