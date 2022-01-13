# nest-test
## Инструкция по запуску
Надо скачать репозиторий, скачать пакеты с помощью ```npm install```. Далее в файл ```main.ts``` нужно указать ключи от S3 (.env файлы не были загружены в данный репозиторий в виду содержания личных данных(ключи от S3)) и запустить проект через ```npm run start``` 
 
## Описание API:
 
### ```/cats (get)```
Вызывает метод ```getAllCat()```. Данный метод возвращает массив всех котиков из базы данных, в формате JSON.
Пример:
```
[
    {
        "id": 1,
        "name": "сашуля",
        "color": "red",
        "breed": "xex",
        "age": "121",
        "price": "300",
        "isReserved": false,
        "image": {
            "id": 2,
            "url": "https://cats-restapi-test-kuz.s3.eu-central-1.amazonaws.com/ea9c3a76-26e7-43f0-a331-42b3cef1d4c8-pic2.jpg",
            "key": "ea9c3a76-26e7-43f0-a331-42b3cef1d4c8-pic2.jpg"
        }
    },
    {
        "id": 2,
        "name": "Акежанус",
        "color": "black",
        "breed": "kamenь",
        "age": "2",
        "price": "0",
        "isReserved": true,
        "image": null
    }
]
```
 
### ```/cats/get/:id (get)```
Вызывает метод ```getOneCat(id:number)```. Данный метод принимает id нужного котика и возвращает его данные в формате JSON.
Пример:
```
{
    "id": 1,
    "name": "сашуля",
    "color": "red",
    "breed": "xex",
    "age": "121",
    "price": "300",
    "isReserved": false,
    "image": {
        "id": 2,
        "url": "https://cats-restapi-test-kuz.s3.eu-central-1.amazonaws.com/ea9c3a76-26e7-43f0-a331-42b3cef1d4c8-pic2.jpg",
        "key": "ea9c3a76-26e7-43f0-a331-42b3cef1d4c8-pic2.jpg"
    }
}
```
 
### ```/cats/reserved (get)```
Вызывает метод ```getCatByReserveMean(mean: boolean)```. Данный метод принимает булевое значение и возвращает массив котиков, которые забронированы, в формате JSON.
Пример: 
```
[
    {
        "id": 2,
        "name": "Акежанус",
        "color": "black",
        "breed": "kamenь",
        "age": "2",
        "price": "0",
        "isReserved": true,
        "image": null
    }
]
```
 
### ```/cats/unreserved```
Вызывает метод ```getNotBooked()```. Данный метод принимает булевое значение и возвращает массив котиков, которые не забронированы, в формате JSON.
Пример:
```
[
    {
        "id": 1,
        "name": "сашуля",
        "color": "red",
        "breed": "xex",
        "age": "121",
        "price": "300",
        "isReserved": false,
        "image": {
            "id": 2,
            "url": "https://cats-restapi-test-kuz.s3.eu-central-1.amazonaws.com/ea9c3a76-26e7-43f0-a331-42b3cef1d4c8-pic2.jpg",
            "key": "ea9c3a76-26e7-43f0-a331-42b3cef1d4c8-pic2.jpg"
        }
    }
]
```
### ```/cats/reserve/:id (put)```
Вызывает метод ```setReservationMeanToCat(id: number, mean: boolean)```. Данный метод принимает id нужного котика и булевое значение и изменяет его значение регистрации на заданное.
 
### ```/cats/unreserve/:id (put)```
Вызывает метод ```setReservationMeanToCat(id: number, mean: boolean)```. Данный метод принимает id нужного котика и булевое значение и изменяет его значение регистрации на заданное.
 
### ```/cats/update/:id (put)```
Вызывает метод ```setNewDataToCat(id: number, dto: UpdateCatDto)```. Данный метод принимает id нужного котика и JSON объект с данными, который кастуется к обьекту типа UpdateCatDto. Данный метод изменяет поля нужного котика на данные из dto. 
 
Пример данных:
id = 1
```
{
    "color": "white",
    "price": 500
}
```
 
### ```/cats/create (post)```
Вызывает метод ```create(dto: CreateCatDto, id: number)```. Данный метод принимает JSON объект с данными, который кастуется к обьекту типа СreateCatDto. Данный метод создает нового котика основываясь на данных из dto. Картинка привязывается отдельно.
 
Пример данных:
```
{
        "name": "сашуля",
        "color": "red",
        "breed": "xex",
        "age": "121",
        "price": "300"
}
```
 
### ```/cats/setImage/:id```
Вызывает метод ```setImage(id: number, imageBuffer: Buffer, filename: string)```. Данный метод принимает id котика и файл картинки. Данный метод сохраняет картинку в S3 хранилище и добавляет ее название в поле photo у данного котика. 
 
### ```/cats/deleteCat/:id (delete)```
Вызывает метод ```deleteCat(id: number)```. Данный метод принимает id котика и удаляет его из базы данных.
