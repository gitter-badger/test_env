#!/usr/bin/env node

// instrument by jscoverage, do not modifly this file
(function (file, lines, conds, source) {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (BASE._$jscoverage) {
    BASE._$jscmd(file, 'init', lines, conds, source);
    return;
  }
  var cov = {};
  /**
   * jsc(file, 'init', lines, condtions)
   * jsc(file, 'line', lineNum)
   * jsc(file, 'cond', lineNum, expr, start, offset)
   */
  function jscmd(file, type, line, express, start, offset) {
    var storage;
    switch (type) {
      case 'init':
        if(cov[file]){
          storage = cov[file];
        } else {
          storage = [];
          for (var i = 0; i < line.length; i ++) {
            storage[line[i]] = 0;
          }
          var condition = express;
          var source = start;
          storage.condition = condition;
          storage.source = source;
        }
        cov[file] = storage;
        break;
      case 'line':
        storage = cov[file];
        storage[line] ++;
        break;
      case 'cond':
        storage = cov[file];
        storage.condition[line] ++;
        return express;
    }
  }

  BASE._$jscoverage = cov;
  BASE._$jscmd = jscmd;
  jscmd(file, 'init', lines, conds, source);
})('C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js', [78,54,54,55,75,57,58,60,62,63,66,67,70], {"52_6_6":0,"52_6_1":0,"52_11_1":0,"53_8_7":0,"64_14_1":0,"65_16_4":0,"70_19_6":0}, ["/**"," Не четкое сравнение строк."," #Concept   Simon White April 07, 2004 <swhite@catalysoft.com>"," #link      http://www.catalysoft.com/articles/StrikeAMatch.html","            http://www.devarticles.com/cp/bio/Simon-White/"," #ported and improved"," @name      strike_match"," @author    XGuest <xguest@list.ru>"," @link      https://github.com/xguest/nice_alg"," @version   0.0.0.1"," @copyright GPL applies.","            No warranties XGuest[26.01.2005/10:18:28] fuzzy [ver.0.0.0.1]","            GPL applies."," #guid      {2DB3A242-F31A-4B7D-9512-567D0D6ECA2B}",""," @description Симон Уайт в [\"How to Strike a Match\"][http://www.catalysoft.com/articles/StrikeAMatch.html]","              от 07 апреля 2004 предложил концепцию расчета, коэффициента","              нечеткого сравнения строк, как соотношение количества совпадений","              пересекающихся парах символов (test ==> [te,es,st]) двух слов, и","              общего количества пар.","","              Шаги алгоритма скрипта","","  1 - Проверяем наличие параметров","  2 - Проверяем точное равенство строк","  3 - Первый цикл обработка параметров","      Второй - Обработка слов параметра","      Третий - Обработка пар символов слова","  4 - В первых двух циклах действия одинаковы","      В третьем","        для первого параметра","         все пары помещаются в объект, где","             key = пара символов,","           value = счетчик кол-ва этой пары","        для второго поиск каждой пары в объекте первого параметра,","        если успешно прибавляет счетчик общих пар и убавляет счетчик этой пары","  5 - В завершении циклов умножаем кол-во общих пар 2 (два объекта), делим на","      общее кол-во пар",""," @param {String} a  Строка для сравнения"," @param {String} b  Строка для сравнения",""," @return {Number|undefined} - undefined если одна из строк === undefined","                                0  - нет общих пар","                             до 1  - коэффициент соотношения","                                1  - относительное равенство строк","                                2  - точное равенство строк","*/","/*eslint complexity: [2, 9]*/","","function strike_match(a, b) {","  if (a && b) {                                      // Наличие параметров","    if (a === b) return 2;                           // Если равны","    b = [a, b]; a = 2;                               // Массив параметров","    var c, d, e, f, g, h, i = 0, j, k = {}, l = 0;","    for (c = 0; c < 2; c++) {                        // Обработка параметров","      d = b[c].toLowerCase().split(/\\s+/g);          // Массив слов","      e = d.length;                                  // Размер = кол-во слов","      for (f = 0; f < e; f++) {                      // Обработка слов","        g = d[f].length - 1;                         // Длинна слова","        for (h = 0; h < g; h++) {                    // Обработка пар символов","          i++;                                       // Счетчик пар","          j = d[f].substr(h, 2);                     // Текущая пара","          if (c) {                                   // Параметр не первый?","            if (k[j]) {                              // счетчик есть?","              --k[j];                                // Dec счетчик пар","              ++l;                                   // Inc счетчик совпадений","            }","          } else {                                   // Первый параметр","            k[j] = ++k[j] || 1;                      // Inc счетчика пары","          }                                          // первого параметра","        }","      }","    }","    return (2 * l / i).toFixed(2);                   // Определяем соотношение","  }                                                  // одинаковых пар к кол-ву","}","module.exports = strike_match;",""]);
/**
 Не четкое сравнение строк.
 #Concept   Simon White April 07, 2004 <swhite@catalysoft.com>
 #link      http://www.catalysoft.com/articles/StrikeAMatch.html
            http://www.devarticles.com/cp/bio/Simon-White/
 #ported and improved
 @name      strike_match
 @author    XGuest <xguest@list.ru>
 @link      https://github.com/xguest/nice_alg
 @version   0.0.0.1
 @copyright GPL applies.
            No warranties XGuest[26.01.2005/10:18:28] fuzzy [ver.0.0.0.1]
            GPL applies.
 #guid      {2DB3A242-F31A-4B7D-9512-567D0D6ECA2B}

 @description Симон Уайт в ["How to Strike a Match"][http://www.catalysoft.com/articles/StrikeAMatch.html]
              от 07 апреля 2004 предложил концепцию расчета, коэффициента
              нечеткого сравнения строк, как соотношение количества совпадений
              пересекающихся парах символов (test ==> [te,es,st]) двух слов, и
              общего количества пар.

              Шаги алгоритма скрипта

  1 - Проверяем наличие параметров
  2 - Проверяем точное равенство строк
  3 - Первый цикл обработка параметров
      Второй - Обработка слов параметра
      Третий - Обработка пар символов слова
  4 - В первых двух циклах действия одинаковы
      В третьем
        для первого параметра
         все пары помещаются в объект, где
             key = пара символов,
           value = счетчик кол-ва этой пары
        для второго поиск каждой пары в объекте первого параметра,
        если успешно прибавляет счетчик общих пар и убавляет счетчик этой пары
  5 - В завершении циклов умножаем кол-во общих пар 2 (два объекта), делим на
      общее кол-во пар

 @param {String} a  Строка для сравнения
 @param {String} b  Строка для сравнения

 @return {Number|undefined} - undefined если одна из строк === undefined
                                0  - нет общих пар
                             до 1  - коэффициент соотношения
                                1  - относительное равенство строк
                                2  - точное равенство строк
*/
/*eslint complexity: [2, 9]*/
function strike_match(a, b) {
    if (_$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "cond", "52_6_6", _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "cond", "52_6_1", a) && _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "cond", "52_11_1", b))) {
        // Наличие параметров
        if (_$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "cond", "53_8_7", a === b)) return 2;
        _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 54);
        // Если равны
        b = [ a, b ];
        _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 54);
        a = 2;
        _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 55);
        // Массив параметров
        var c, d, e, f, g, h, i = 0, j, k = {}, l = 0;
        for (c = 0; c < 2; c++) {
            _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 57);
            // Обработка параметров
            d = b[c].toLowerCase().split(/\s+/g);
            _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 58);
            // Массив слов
            e = d.length;
            // Размер = кол-во слов
            for (f = 0; f < e; f++) {
                _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 60);
                // Обработка слов
                g = d[f].length - 1;
                // Длинна слова
                for (h = 0; h < g; h++) {
                    _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 62);
                    // Обработка пар символов
                    i++;
                    _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 63);
                    // Счетчик пар
                    j = d[f].substr(h, 2);
                    // Текущая пара
                    if (_$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "cond", "64_14_1", c)) {
                        // Параметр не первый?
                        if (_$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "cond", "65_16_4", k[j])) {
                            _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 66);
                            // счетчик есть?
                            --k[j];
                            _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 67);
                            // Dec счетчик пар
                            ++l;
                        }
                    } else {
                        _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 70);
                        // Первый параметр
                        k[j] = _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "cond", "70_19_6", ++k[j]) || 1;
                    }
                }
            }
        }
        _$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 75);
        return (2 * l / i).toFixed(2);
    }
}

_$jscmd("C:/Downloads/WORK/20160219/My_Package/UNPACKED/nice_alg/lib/strike_match.js", "line", 78);

module.exports = strike_match;