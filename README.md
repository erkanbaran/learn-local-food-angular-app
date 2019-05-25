# LearnLocalFoods

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Angular Project Create

Angular CLI daha önceden yüklü değilse yüklenmelidir.
PS C:\Users\ErkanBaran> npm install -g @angular/cli

Proje klasörünü kendi oluşturacaktır, önceden oluşturmaya gerek yok.
Angular projesini oluşturmak için;
PS C:\Users\ErkanBaran\Desktop\Angular\Angular-Sample> ng new learn-local-foods

Sorulara bu şekilde cevap veriyoruz.
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS

Başarılı olursa bu mesaj alınıyor.
 Successfully initialized git.

Projeyi çalıştırmak için;
PS C:\Users\ErkanBaran\Desktop\Angular\Angular-Sample\learn-local-foods> ng serve

Başarılı olarak çalıştı.
i ｢wdm｣: Compiled successfully.

Tarayıcıya hangi yerel sunucuda servis edildiğini bu satırdan görebiliriz.
Bu yolu kopyalayıp tarayıcıda açabiliriz.
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


Ctrl+C kısa yolu ile terminali durduruyoruz.
Bootstrap paketlerini yüklemek için bu komutu yazıyoruz.
PS C:\Users\ErkanBaran\Desktop\Angular\Angular-Sample\learn-local-foods> npm install --save bootstrap@3

+ bootstrap@3.4.1
added 1 package from 1 contributor and audited 42618 packages in 14.429s
Paketler eklendi


PS C:\Users\ErkanBaran\Desktop\Angular\Angular-Sample\learn-local-foods> ng g c header
Component leri hazır bir şekilde oluşturuyor

PS C:\Users\ErkanBaran\Desktop\Angular\Angular-Sample\learn-local-foods> ng g c recipes --spec false
Option "spec" is deprecated: Use "skipTests" instead.
Spec dosyası olmadan oluşturmak istiyorsak komutu bu şekilde yazıyoruz.
