#### 創建項目

<!-- pnpm add -g @nestjs/cli -->

- npx @nestjs/cli new 项目名
- npm install -g @nestjs/cli 、nest new 项目名

#### 生成模塊文件

- 生成模塊

  - nest generate resource xxx
  - nest g res xxx

- 生成中间件

  - nest g middleware log --no-spec --flat

- 生成守卫

  - nest g guard login --no-spec --flat

- 生成拦截器

  - nest g interceptor time --no-spec --flat

- 生成管道

  - nest g pipe validate --no-spec --flat

- 生成过滤器
  - nest g filter test --no-spec --flat

### 调用顺序

- 中间件 -> 守卫Guard -> 拦截器Interceptor前 -> 管道Pipe -> handler -> 拦截器后 -> 过滤器Filter

### Metadata/Reflector

- Nest 的装饰器的实现原理就是 Reflect.getMetadata、Reflect.defineMetadata 这些 api。通过在 class、method 上添加 metadata，然后扫描到它的时候取出 metadata 来做相应的处理来完成各种功能。

### ArgumentHost/ExecutionContext类

- Filter、Guard、Exception Filter 支持 http、ws、rpc 等场景下复用
- ArgumentHost可以通过 getArgs 或者 getArgByIndex 拿到上下文参数，getType 的结果分别 switchToHttp、switchToWs、swtichToRpc，然后再取对应的 argument
- ExecutionContext 还提供 getClass、getHandler 方法，可以结合 reflector 来取出其中的 metadata

### Module/Provider循环依赖问题

- 解决方式两边都用 forwardRef 来包裹下

### 动态模块

- Module 可以传入 options 动态产生，这叫做动态 Module，你还可以把传入的 options 作为 provider 注入到别的对象里。
- 建议的动态产生 Module 的方法名有 register、forRoot、forFeature 3种。
  - register：用一次注册一次
  - forRoot：全局注册一次
  - forFeature：局部注册一次
- 过程也可以用 ConfigurableModuleBuilder 来生成。通过 setClassMethodName 设置方法名，通过 setExtras 设置额外的 options 处理逻辑

### NestJS中间件和Express中间件区别

- Nest 的 IOC 容器注入依赖，还可以指定作用于哪些路由

### Rxjs在Interceptor中使用

- tap、map、timeout、catchError

### Pipe

- 在handler前对参数数据的转换或验证
- 接收 post 请求的方式是声明一个 dto class，然后通过 @Body 来取请求体来注入值,对它做验证要使用 ValidationPipe

### 接口多版本共存

- main.ts 里调用 enableVersioning
<!-- 学习到第19章 -->
