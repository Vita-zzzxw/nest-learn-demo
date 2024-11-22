#### 創建項目

<!-- pnpm add -g @nestjs/cli -->

- npx @nestjs/cli new 项目名
- npm install -g @nestjs/cli 、nest new 项目名

#### 生成模塊

- nest generate resource xxx
- nest g res xxx

#### 生成中间件

- nest g middleware log --no-spec --flat

#### 生成守卫

- nest g guard login --no-spec --flat

#### 生成拦截器

- nest g interceptor time --no-spec --flat

### 生成管道

- nest g pipe validate --no-spec --flat

### 生成过滤器

- nest g filter test --no-spec --flat

### 调用顺序

- 中间件 -> 守卫Guard -> 拦截器Interceptor前 -> 管道Pipe -> handler -> 拦截器后 -> 过滤器Filter
