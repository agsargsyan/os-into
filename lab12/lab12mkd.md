# РОССИЙСКИЙ УНИВЕРСИТЕТ ДРУЖБЫ НАРОДОВ

## Факультет физико-математических и естественных наук

### Кафедра прикладной информатики и теории вероятностей

ОТЧЕТ ПО ЛАБОРАТОРНОЙ РАБОТЕ № 12 **«Программирование в командном
процессоре ОС UNIX. Ветвления и циклы»**

дисциплина: *Операционные системы*

Студент: Саргсян Арам Грачьяевич

Группа: НПИбд-02-20

МОСКВА 2021 г.

-----

**Цель работы:** Изучить основы программирования в оболочке ОС
UNIX/Linux. Научиться писать небольшие командные файлы.

**Ход работы**

1.  Используя команды getopts grep, напишем командный файл, который
    анализирует командную строку с ключами:

\-i — прочитать данные из указанного файла;

\-o — вывести данные в указанный файл;

\-p — указать шаблон для поиска;

\-C — различать большие и малые буквы (по умолчанию включен)

\-n — выдавать номера строк. (Рис.1-2)

![clipboard](https://i.imgur.com/5ovt825.png) рис. 1
![clipboard](https://i.imgur.com/qgM2gyR.png) рис. 2

2.  Написал на языке Си программу, которая вводит число и определяет,
    является ли оно больше нуля, меньше нуля или равно нулю.Затем
    программа завершается с помощью функции exit(n), передавая
    информацию в о коде завершения в оболочку. Командный файл
    должен вызывать эту программу и,проанализировав с помощью
    команды$?,выдать сообщениео том,какое число было введено.
    (Рис. 3-4) ![clipboard](https://i.imgur.com/WoYMA2o.png) рис. 3

![clipboard](https://i.imgur.com/IK3g9lC.png) рис. 4

3.  Написал командный файл,создающий указанное число
    файлов,пронумерованных последовательно от 1 до N
    (например 1.tmp, 2.tmp, 3.tmp,4.tmp и т.д.). Число файлов, которые
    необходимо создать,передаётся в аргументы командной строки.Этот же
    командный файл должен уметь удалять все созданные им файлы (если они
    существуют). (Рис. 5-6)
    ![clipboard](https://i.imgur.com/1Z547ld.png) рис. 5
    ![clipboard](https://i.imgur.com/cwPt7ML.png) рис. 6

4.  Напишем командный файл, который с помощью команды tar запаковывает в
    архив все файлы в указанной директории. модифицируем его так, чтобы
    запаковывались только те файлы, которые были изменены менее недели
    тому назад. (Рис. 7-8)
    ![clipboard](https://i.imgur.com/8Ns4gcw.png) рис. 7
    ![clipboard](https://i.imgur.com/1LcvB3V.png) рис. 8

**ВЫВОД:** В ходе работы мы изучили основы программирования в оболочке
ОС UNIX. Научились писать более сложные командные файлы с
использование логических управляющих инструкций и циклов.
