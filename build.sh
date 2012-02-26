#!/bin/bash
cp debug-index.html index.html
sencha create jsb -a http://localhost/sencha/sbbs-client-sencha -p app.jsb3
sencha build -p app.jsb3 -d ./
cp production-index.html index.html
