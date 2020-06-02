#Starter template Rest
#### TypeScript + TypeOrm + ExpressJS + Validator Middleware
## Structure
```
/app
	/controllers (Controllers of the app)
	/core (Core of starter template)
	/middlewares (Middlewares for the routes of the app)
	/routes (Routes for Controllers of the app)
	/models (Models configuration for use)
	/repository (Custom queries)
	/App.ts (Server configuration)
	/Router.ts (Config file for Routing)

config.ts (Config file for the app)
tsconfig.json (File configuration typescript)
tslint.json (File configuration rules typescript)
Entry.ts (Main file to start the app)
```

## Usage
In Development mode, the express app is started with nodemon for automatic refresh when changes are made.
````
npm run dev
````
## Todo
- [X] TypeORM
- [X] Validator Middleware
- [ ] Configuration file
- [ ] Swagger Docs
- [ ] Release bundle
- [ ] JWT Middleware
- [ ] Dockerfile

## License
Usage is provided under the MIT License. See LICENSE for the full details. \
Copyright © 2020, Taoufik Tribki
