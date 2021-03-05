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
