# PracticaParcial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## NOTITASSS

## In memory database

## Create Interface for cars in models
`ng generate interface models/cards`

## Create Class for cards in models
`ng g class models/cards -—type=model`

## Create InMemory Database
----------------------------------------------------------------------------------------------------------------------
`npm install --save angular-in-memory-web-api`
`ng generate service data`

and import
```javascript
import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb() {

}

```

And add the next statements in app.module.ts

import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from "./services/data.service";
import { HttpClientModule } from '@angular/common/http';

and in import section

InMemoryWebApiModule.forRoot(DataService),
HttpClientModule,

----------------------------------------------------------------------------------------------------------------------