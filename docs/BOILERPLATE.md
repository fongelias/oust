# Boilerplate
Documentation/log for how this application was started and organized

## organization
Base boilerplate is from `create-react-app`
```
yarn create react-app oust --template typescript
```

`docs` directory added for process and design documentation

`/src/components/containers` added for stateful components

`/src/components/presentational` added for presentational components

`/src/scss` added for global style variables and utilities

## config
`"baseUrl": "src"` added to `tsconfig.json` to enable absolute paths within `src` directory

added `.travis.yml` for travis CI/CD

## CI/CD
### Static Site Hosting
create public s3 bucket with the name of your website, permissioned with read/write access

configure s3 bucket to be used as a static website host

add policy to IAM for travis with appropriate s3 access

add route 53 CNAME to point to bucket

### Lambda
create a lambda from scratch

create policy for lambda with access to read/write, as well as the ability to set the role of a lambda

attach the policy to the travis user deploying the code


## git
initialize repo
```
git init
```

add url for remote repo
```
git remote add origin git@github.com:fongelias/oust.git
```
(you can verify this step with `git remote -v`)

